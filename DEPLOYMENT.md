# Deploying khaledchat.io

The site is a fully static export. Production needs only a web server that serves files over HTTPS: no Node.js, database or server-side code.

## 1. Hosting requirements

The host must:

- Serve static files from a directory you upload (any of: Nginx, Apache, Caddy, Cloudflare Pages, Netlify, GitHub Pages, S3 + CloudFront, or a shared host with file upload).
- Support HTTPS with a valid certificate for `khaledchat.io` (and `www.khaledchat.io` if used).
- Serve `/some/path/` from `/some/path/index.html` (standard directory-index behaviour).
- Allow a custom 404 page (`/404.html`).
- Serve `.txt` files (Next.js prefetch data such as `__next.docs.__PAGE__.txt`) as `text/plain`. Do not block or rewrite them.
- Ideally: set custom response headers (security and caching, see section 6). Hosts that cannot set headers still work; they just miss those hardening and caching benefits.

Not required: Node.js runtime, server-side rendering, redirects for the site itself, databases, environment variables or secrets.

## 2. Build

Requirements: Node.js 20.9+ and npm.

```bash
npm ci
npm run build
```

Always build with `npm run build` (not `npx next build`): npm then runs `scripts/postbuild.mjs` automatically, which corrects a Next.js prefetch-file bug on Windows builds (see "Known build workaround" below). On Linux/macOS the script finds nothing to fix and does nothing.

Optional checks before every deploy:

```bash
npm run typecheck
npm run lint
npm run preview   # serves ./out at http://localhost:4173 for a final look
```

## 3. Production output

Everything to upload is in `out/`:

```
out/
  index.html            home page
  features/index.html   ...one folder per route (trailing-slash URLs)
  docs/<section>/index.html
  404.html              custom not-found page
  sitemap.xml  robots.txt  og.png
  _next/static/...      hashed JS/CSS/fonts (safe to cache forever)
  branding/  icons/     logo and icon files
```

Upload the **contents** of `out/` (not the folder itself) to the web root.

## 4. Domain and HTTPS

1. At your DNS provider, point `khaledchat.io` to the host:
   - a static host/CDN usually gives a CNAME target (use an ALIAS/ANAME/flattened CNAME for the apex domain), or
   - your own server: an `A` record (and `AAAA` for IPv6) with its IP address.
2. Add `www.khaledchat.io` as a CNAME to the same target and redirect it to `https://khaledchat.io` (the canonical URLs in the site use the apex domain without `www`).
3. Enable HTTPS: managed certificates on static hosts/CDNs, or Let's Encrypt (`certbot`) on your own server.
4. Redirect all `http://` requests to `https://` (301).
5. After certificates work, enable HSTS (header below). Start with a short `max-age` if you want an easy way back, then raise it to one year.

## 5. Deployment steps

1. `git pull` the commit you want to release, then `npm ci && npm run build`.
2. Archive the build so it can be restored later:
   `tar -czf khaledchat-$(git rev-parse --short HEAD).tar.gz -C out .`
3. Upload the contents of `out/` to the web root, replacing the previous files. Prefer an atomic switch where the host supports it (new release folder + symlink switch, or the host's own deploy/rollback feature) so visitors never see a half-uploaded site.
4. Smoke-test production:
   - `https://khaledchat.io/` loads, light/dark toggle works.
   - Every top-level page and `/docs/getting-started/` loads; clicking between docs pages works.
   - `https://khaledchat.io/does-not-exist/` shows the custom 404 page with HTTP status 404.
   - `https://khaledchat.io/sitemap.xml`, `/robots.txt` and `/og.png` load.
   - The browser console shows no errors and the network tab shows no failed requests.
   - Run PageSpeed Insights (https://pagespeed.web.dev) on the home page for real-world scores.
5. Optional: submit `https://khaledchat.io/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## 6. Recommended headers

Nginx example (adapt for your host):

```nginx
server {
  listen 443 ssl http2;
  server_name khaledchat.io;
  root /var/www/khaledchat/current;

  error_page 404 /404.html;
  location / { try_files $uri $uri/ =404; }

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header X-Frame-Options "DENY" always;
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
  add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" always;

  # Hashed build assets never change: cache for a year.
  location /_next/static/ {
    add_header Cache-Control "public, max-age=31536000, immutable" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
  }
  # HTML and prefetch data must revalidate so new deploys show up immediately.
  location ~* \.(html|txt)$ { add_header Cache-Control "public, max-age=0, must-revalidate" always; }

  gzip on;
  gzip_types text/plain text/css application/javascript application/json image/svg+xml application/xml;
}
```

Notes:

- `'unsafe-inline'` for scripts is required: the static export inlines the Next.js bootstrap, the theme script (prevents a light/dark flash) and the JSON-LD structured data. Nothing on the site loads third-party scripts, fonts or images; fonts are self-hosted.
- In Nginx, an `add_header` inside a `location` replaces the server-level ones, which is why the static-assets block repeats the security headers. Copy all of them there if you want them on every response.
- Apache equivalent: `ErrorDocument 404 /404.html`, `Header always set ...` lines in `.htaccess`, and `mod_expires`/`mod_deflate` for caching and compression.

## Hostinger (current host)

`public/.htaccess` is copied into `out/` by the build. It:
- sets the 404 page;
- redirects http and www to https://khaledchat.io;
- adds the security and caching headers from section 6.

Strict-Transport-Security is commented out. Enable it once HTTPS has worked for a few days.

1. Run `npm run build`. It also generates `sitemap.xml`, `robots.txt` and `llms.txt` (from `src/app/`).
2. Zip the **contents** of `out/`, including `.htaccess`, with forward-slash paths. On Windows, run this from inside `out/`: `tar -a -c -f ../site.zip * .htaccess`. PowerShell 5's Compress-Archive writes backslash paths, which break on Linux hosts.
3. In hPanel, open **Websites → khaledchat.io → File Manager → public_html**.
   - Remove the placeholder `default.php` and any previous site files.
   - Upload the zip, choose **Extract**, then delete the zip.
4. In **Security → SSL**, install the free certificate and turn on **Force HTTPS**.
5. Smoke-test as in section 5. Also check:
   - `/llms.txt`, `/robots.txt` and `/sitemap.xml` load;
   - `https://www.khaledchat.io/` and `http://khaledchat.io/` both redirect to `https://khaledchat.io/`.

## 7. Rollback

Every deploy is just a set of files, so rolling back means putting the previous files back:

- **Host with deploy history** (Cloudflare Pages, Netlify, etc.): use its "rollback/publish previous deploy" button.
- **Own server with release folders**: keep the last few releases in `/var/www/khaledchat/releases/<commit>/` and point the `current` symlink back to the previous one (`ln -sfn releases/<previous> current`). Takes effect instantly.
- **Plain file upload**: re-upload the previous archive (`khaledchat-<commit>.tar.gz` from step 5.2), or rebuild it from git: `git checkout <previous-commit> && npm ci && npm run build` and upload `out/`.

After rolling back, purge the CDN cache for HTML (`/*.html`, `/`) if your host caches pages. Hashed `_next/static` files from both versions can coexist safely.

## 8. Updating content

Edit the files listed in the README's "Updating content" table (releases, features, FAQ, docs), commit, then rebuild and deploy as above. Publishing a release in `src/data/releases.ts` with real `https://` asset URLs is what turns on the download buttons; until then every platform shows "Coming Soon".

## Known build workaround (`scripts/postbuild.mjs`)

Next.js 16.4.6 (latest stable, and still present on the canary branch as of November 2026) has a Windows-only bug in static export: segment-prefetch files are listed with `path.relative()`, which returns backslash paths on Windows, and `convertSegmentPathToStaticExportFilename()` only converts forward slashes. The files land in nested folders (`docs/getting-started/__next.docs/$d$slug/__PAGE__.txt`) while the browser requests flat names (`docs/getting-started/__next.docs.$d$slug.__PAGE__.txt`), so link prefetches 404. Pages still work (navigation falls back to full page loads) but the console fills with errors.

No configuration option avoids this; disabling prefetch would only hide it. The script:

- moves each misplaced file to the flat name the browser requests and removes the empty folders, producing the same output a Linux build produces;
- only touches `__next.*` folders inside `out/`, never overwrites existing files, and processes files in sorted order (deterministic);
- is idempotent: a second run reports `fixed 0` and leaves file hashes unchanged (verified);
- is a no-op on Linux/macOS builds, so it is safe in any CI.

When a Next.js release fixes the bug, the build will log `postbuild: fixed 0 prefetch file(s)` on Windows; the script and the `postbuild` entry in `package.json` can then be deleted.

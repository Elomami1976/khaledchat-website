# Khaled Chat — Official Website

Source for https://khaledchat.com: the product site, download center and documentation for Khaled Chat, a privacy-focused offline AI desktop assistant built upon the open-source [Hob](https://github.com/FrigadeHQ/hob) project.

Stack: Next.js (App Router, static export) · React · TypeScript · Tailwind CSS v4 · Lucide icons. No database, no analytics, no trackers.

## Requirements

- Node.js 20.9 or newer
- npm

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # production static build -> ./out
npm run preview    # serve ./out locally at http://localhost:4173
```

## Project structure

```
public/
  branding/          approved logo files go here (see branding/README.md)
  icons/ screenshots/
src/
  app/               routes: / features download docs privacy about faq changelog, 404, sitemap, robots, OG image
  components/
    layout/          Header, Footer, Logo, ThemeToggle
    ui/              Button, primitives (Container, Card, StatusBadge, Prose…)
    sections/        homepage sections, app mockup, docs sidebar
  content/docs/      documentation in Markdown (one file per section)
  data/              features.ts, releases.ts, faq.ts, docs.ts, navigation.ts
  lib/               site config, Markdown renderer, docs loader
```

## Updating content (no design changes needed)

| What | File |
|---|---|
| Feature availability (`available` / `development` / `planned`) | `src/data/features.ts` |
| Releases, download links, sizes, checksums, changelog | `src/data/releases.ts` |
| FAQ | `src/data/faq.ts` |
| Docs text | `src/content/docs/*.md` |
| Docs sidebar order / new docs page | `src/data/docs.ts` (+ add the `.md` file) |
| Navigation | `src/data/navigation.ts` |
| Homepage app screenshot (replaces the mockup) | `src/data/preview.ts` + image in `public/screenshots/` |
| Source repo link, domain | `src/lib/site.ts` |

### Publishing a release

Add an entry at the top of `releases` in `src/data/releases.ts`:

```ts
{
  version: "1.0.0",
  date: "2027-01-15",
  notesUrl: "https://…",
  assets: [
    { platform: "windows", arch: "x64", fileName: "KhaledChat-1.0.0-x64.exe",
      url: "https://…", size: "95 MB", sha256: "…" },
  ],
  changes: { features: ["…"], improvements: [], fixes: [] },
}
```

Download buttons activate automatically only for platforms with an asset; others show "Coming Soon". Only `https://` URLs are rendered. Then rebuild and redeploy.

Docs Markdown supports `##`/`###` headings, paragraphs, `-` and `1.` lists, `> ` notes, `**bold**`, `` `code` `` and `[links](/path/)`. It is rendered to React elements; raw HTML is not supported, by design.

## Branding

Approved logo files live in `public/branding/` (see its README). The homepage app preview is an HTML mockup, labeled as such on the page; replace it with a real screenshot when available.

## Deployment

The site is a fully static export; no Node.js server is needed in production.

1. `npm ci && npm run build`
2. Upload the contents of `out/` to the web root of any static host (Nginx, Apache, Cloudflare Pages, Netlify, GitHub Pages, S3 + CDN…).
3. Point `khaledchat.com` (and optionally `www`) DNS to the host, enable HTTPS (Let's Encrypt or the host's managed certificate), and redirect `http` → `https` and `www` → apex.

URLs use trailing slashes (`/features/` → `out/features/index.html`). Configure the host to serve `404.html` for missing pages.

### Recommended security headers

Static hosts can't receive headers from Next.js, so set them at the server/CDN. Nginx example:

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header X-Frame-Options "DENY" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'" always;
error_page 404 /404.html;
location /_next/static/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
```

(`'unsafe-inline'` is required for the inline theme script and Next.js bootstrap scripts in a static export.)

## Attribution

Khaled Chat builds upon [Hob](https://github.com/FrigadeHQ/hob). The desktop application's distribution must preserve the upstream license and notices.

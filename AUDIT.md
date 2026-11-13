# Pre-deployment audit: khaledchat.com

Date: 2026-11-12 · Next.js 16.4.6 · Tested build: fresh `npm run build` of this commit, served locally from `out/`.

**Verdict:** technically ready for static deployment. Before publishing, decide on the content items in "Open issues" (mainly present-tense product claims for an application that has not been released).

## 1. Git

| Check | Result |
|---|---|
| Repository | Local only, branch `master`. No remote, nothing pushed. |
| Initial commit | Contains the complete website. (create-next-app had auto-committed a half-finished snapshot; it was replaced by one clean initial commit before any push.) |
| `.gitignore` | Excludes `node_modules/`, `.next/`, `out/`, `build/`, all `.env*` files, `*.pem`, `*.tsbuildinfo`, logs, `*.tmp`/`*.swp`, OS files and local tool settings (`.claude/`). Verified with `git check-ignore`. |
| Secrets | None found in tracked files. The site uses no API keys or environment variables. |

## 2. Next.js prefetch workaround

Root cause: a Windows-only path bug in Next.js static export (backslash paths from `path.relative()` are not converted to the flat `__next.*.txt` names the client requests). Confirmed in the installed 16.4.6 source and in the current canary source on GitHub; 16.4.6 is the latest stable release, so no upgrade or configuration option fixes it.

`scripts/postbuild.mjs` was rewritten to **move** files to the correct names, so the output now matches a Linux build exactly. Verified:

- **Safe:** only touches `__next.*` folders inside `out/` and never overwrites.
- **Deterministic:** processes files in sorted order.
- **Idempotent:** a second run fixes 0 files and leaves file hashes identical.
- **Production-compatible:** a no-op on Linux/macOS builds.

Full details are in DEPLOYMENT.md.

## 3. Production testing

| Check | Result |
|---|---|
| `npm run typecheck` | Pass |
| `npm run lint` | Pass |
| `npm run build` (fresh, after deleting `out/`) | Pass, 19 static routes, 14 prefetch files corrected |
| Routes after fresh build | All 14 public pages return 200; unknown URLs return the custom 404 page with status 404 |
| Client-side navigation | Clicking between docs pages and from footer links works; all prefetch requests return 200 |
| Broken links | 0 internal links or in-page anchors broken across 17 HTML files; Hob GitHub link returns 200 |
| JavaScript errors | 0 across 180 page loads (15 routes × 6 widths × light/dark) |
| Failed network requests | 0 (only the intentional 404 test URL) |
| Responsive layout | No horizontal overflow at 360, 390, 768, 1024, 1440, 1920 px, both themes |
| Light/dark themes | Theme applied correctly on every page; light is default |
| axe-core 4 (WCAG 2.0/2.1/2.2 A+AA + best practices) | **0 violations**, all pages, both themes, at 390 and 1440 px |
| Keyboard | Skip link, visible focus ring, mobile menu (Escape closes), FAQ accordion operable by keyboard |

### Lighthouse (Microsoft Edge headless, local server)

| Category | Desktop | Mobile |
|---|---|---|
| Accessibility | 96–100 → 100 after fix | 96–100 → 100 after fix |
| Best Practices | 100 on all pages | 100 on all pages |
| SEO | 100 on all pages | 100 on all pages |
| Performance | 97–100 on all pages | 85–99 on most pages; **home page 71–99** |

The one accessibility finding (mockup placeholder text at 3.58:1 contrast) was fixed.

Mobile performance varied widely between identical runs (Total Blocking Time 100 ms to 1,150 ms on the same page), which points to load on the test machine rather than the site. The home page is the heaviest page (app mockup, icons). Forcing reduced motion did not change its score, so the fade-in animation is not the cause.

Lighthouse also flags caching, compression and server-latency items. Those come from the bare local test server, not the site; the headers in DEPLOYMENT.md address them.

### Not completed

- **Lighthouse on the real host:** scores here come from a local server on a busy machine. Re-run PageSpeed Insights after deployment.
- **Screen reader testing** (NVDA, VoiceOver): not done. Only automated checks and keyboard testing were run.
- **Real devices:** layouts were tested at emulated widths in Edge (Chromium) only. Safari/iOS and Firefox were not tested.
- **Production hosting features** (HTTPS, headers, 404 status, MIME types): need checking on the chosen host (smoke test in DEPLOYMENT.md).

## 4. Content and release audit

| Item | Status |
|---|---|
| Downloads | No release exists in `src/data/releases.ts`. All three platforms show a non-clickable "Coming Soon" (no links). Download buttons render only for assets with `https://` URLs. |
| Changelog | Shows a pre-release notice; no invented history. |
| Feature availability | Every feature is labeled "In development" or "Planned"; none is labeled "Available". |
| Documentation | Marked as pre-release; no fabricated menu paths or system requirements. |
| App preview | Labeled "Design preview" in the window and in the caption ("not a screenshot of a released application"). |
| Privacy page | States it describes intended design; separates website data from app data; mentions that model downloads and updates need the internet; makes no absolute guarantees. Website claims verified: no analytics/trackers, fonts self-hosted, no third-party requests. |
| Attribution | Hob credited and linked on the About page and footer. Hob is **MIT-licensed** (verified via GitHub). |
| SEO | Unique titles; descriptions 96–161 characters; canonical URL, `og:url`, `og:title` and `og:image` correct on every page (fixed); 404 page is `noindex` with no canonical (fixed); sitemap lists all 14 public pages; robots.txt allows all and points to the sitemap; JSON-LD SoftwareApplication + FAQPage. |
| Social image | Now exported as a real `og.png` (1200×630 PNG). Previously it was an extension-less file, which typical static hosts would serve with the wrong content type (fixed). |

## 5. Changes made during this audit

No page design, branding, colors, typography or layout changed.

- **Prefetch fix:** `scripts/postbuild.mjs` now moves files instead of copying them, and its header documents the root cause.
- **Contrast:** the mockup placeholder text now uses the standard muted gray (meets 4.5:1).
- **Metadata:**
  - New `pageMetadata()` helper, so every page has a matching canonical, Open Graph and Twitter set.
  - The root layout no longer forces a homepage canonical onto other pages.
  - Longer descriptions for the docs pages and the changelog.
- **Social image:** `src/app/opengraph-image.tsx` became `src/app/og.png/route.tsx`, producing `out/og.png`.
- **Docs and config:**
  - `.gitignore` extended.
  - DEPLOYMENT.md added.
  - README deployment and attribution sections updated.

## Open issues (need your decision)

1. **Present-tense claims on the home page** (your approved copy). The hero says users can "Chat, work with documents, write code, and explore ideas privately, even without an internet connection," and the benefit cards say "Your conversations and files stay on your device" and "Automatically discovers suitable AI models". The app is unreleased, and documents and coding are marked "Planned" on the same page. Options: keep as aspirational copy, or soften (for example "is designed to…") until the first release.
2. **FAQ "Is Khaled Chat free?"** answers "Khaled Chat is an open-source project." The Khaled Chat repository is not yet public (`repoUrl` is empty). Confirm the license and publication plan, then add the repository URL in `src/lib/site.ts`.
3. **About page attribution sentence** states that Hob's notices "are preserved in the Khaled Chat source code and distributed builds." The website can't verify this. Make sure the desktop app ships Hob's MIT copyright and license notice, as the MIT License requires.
4. **Structured data** lists `operatingSystem: Windows, macOS, Linux` for the app. That's acceptable as intent, but revisit it if a platform is dropped.
5. **Homepage mobile performance** may fall below the 95 target on slower phones. Measure with PageSpeed Insights on the live host before optimizing.

## Deployment readiness

| Area | Ready |
|---|---|
| Build and static output | Yes |
| Routes, links, 404 | Yes |
| Accessibility (automated) | Yes |
| SEO metadata | Yes |
| Hosting and deploy docs | Yes (DEPLOYMENT.md) |
| Content claims | Needs your decision on open issues 1–3 |
| Live verification | Pending: run the smoke test in DEPLOYMENT.md after the first deploy |

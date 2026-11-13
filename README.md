# Khaled Chat — Official Website

Source for https://khaledchat.io: the product site, download center and documentation for Khaled Chat, a privacy-focused offline AI desktop assistant built upon the open-source [Hob](https://github.com/FrigadeHQ/hob) project.

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

The site is a fully static export: `npm ci && npm run build`, then upload the contents of `out/` to any static host with HTTPS. Always build with `npm run build` so the post-build fix in `scripts/postbuild.mjs` runs.

See [DEPLOYMENT.md](DEPLOYMENT.md) for hosting requirements, DNS and HTTPS, recommended security and caching headers, smoke tests and rollback. The latest pre-deployment audit is in [AUDIT.md](AUDIT.md). Desktop app releases follow [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md), including the required Hob MIT license notices.

## Attribution

Khaled Chat builds upon [Hob](https://github.com/FrigadeHQ/hob), which is released under the MIT License. The desktop application's source and distributed builds must include Hob's copyright and license notice.

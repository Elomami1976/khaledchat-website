# Khaled Chat release checklist

Use this list for every public release of the Khaled Chat desktop application, and especially the first one. Website steps are at the end.

## 1. Open-source license notices (required)

Khaled Chat is developed using [Hob](https://github.com/FrigadeHQ/hob), which is released under the MIT License. The MIT License requires its copyright notice and permission notice to be included in "all copies or substantial portions of the Software".

- [ ] Hob's `LICENSE` file (copyright line + full MIT text) is kept, unmodified, in the Khaled Chat source repository (for example as `LICENSES/hob-LICENSE` or in a `NOTICE`/`THIRD_PARTY_NOTICES` file).
- [ ] The same notice is shipped **inside every installer and app bundle** (Windows, macOS, Linux), for example as a bundled `THIRD_PARTY_NOTICES.txt`.
- [ ] The notice is reachable from inside the application (for example Settings → About → Open-source licenses).
- [ ] Notices for Hob's own dependencies and Khaled Chat's added dependencies are generated and included (use a license-report tool for the app's package manager, and review anything that is not MIT/BSD/Apache-2.0/ISC).
- [ ] Licenses of any AI models offered for download are checked, and each model's license is shown or linked before download.
- [ ] Khaled Chat's own license is chosen and added to its repository before the repository is made public.

## 2. Release build

- [ ] Version number set and consistent across the app, installers and release notes.
- [ ] Installers built for each supported platform and architecture.
- [ ] Code signing / notarization done where the platform expects it (Windows Authenticode, macOS notarization).
- [ ] SHA-256 checksum recorded for every installer.
- [ ] Each installer tested on a clean machine: install, first launch, hardware detection, model recommendation, model download, first conversation, offline use, uninstall.
- [ ] Minimum system requirements verified by benchmarking before they are published.

## 3. Feature and privacy claims

- [ ] `src/data/features.ts`: a feature is set to `available` only if it works in this release build.
- [ ] Privacy page and docs privacy section checked against the app's actual network behavior (model downloads, update checks, any optional connections). Change future-tense wording ("will be stored") to present tense only for behavior verified in the release.
- [ ] FAQ answers checked against the release (offline use, accounts, model import, updates, supported platforms).
- [ ] Documentation steps in `src/content/docs/` verified against the real application; remove the "in development" notes from sections that are now verified.

## 4. Website update (this repository)

- [ ] Add the release to `src/data/releases.ts` (version, date, https asset URLs, sizes, SHA-256 checksums, verified requirements, changes). The download buttons and the homepage button switch from "Coming Soon" automatically.
- [ ] Set `repoUrl` in `src/lib/site.ts` once the Khaled Chat repository is public; update the FAQ answer "Is Khaled Chat free?" and the About page accordingly.
- [ ] Decide whether to keep the "In Development" label on the homepage hero (`src/components/sections/home.tsx`).
- [ ] Replace the homepage mockup with a real screenshot via `src/data/preview.ts`.
- [ ] `npm run typecheck && npm run lint && npm run build`, then follow DEPLOYMENT.md (deploy + smoke test).

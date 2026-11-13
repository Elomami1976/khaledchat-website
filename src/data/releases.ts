/**
 * Release manifest. This is the single source of truth for the download page
 * and changelog. Do NOT add entries for builds that have not been published.
 *
 * To publish a release: add an entry to `releases` (newest first) with real
 * asset URLs, sizes and SHA-256 checksums.
 */
export type Platform = "windows" | "macos" | "linux";

export interface ReleaseAsset {
  platform: Platform;
  arch: string;          // e.g. "x64", "arm64", "universal"
  fileName: string;
  url: string;           // must be https
  size: string;          // e.g. "92 MB"
  sha256: string;
  requirements?: string[]; // only verified requirements
}

export interface Release {
  version: string;
  date: string; // ISO yyyy-mm-dd
  notesUrl?: string;
  assets: ReleaseAsset[];
  changes: { features?: string[]; improvements?: string[]; fixes?: string[] };
}

export const platforms: { id: Platform; name: string }[] = [
  { id: "windows", name: "Windows" },
  { id: "macos", name: "macOS" },
  { id: "linux", name: "Linux" },
];

export const releases: Release[] = [
  {
    version: "0.1.0",
    date: "2026-11-13",
    notesUrl: "https://github.com/Elomami1976/khaledchat-desktop/releases/tag/v0.1.0",
    assets: [
      {
        platform: "windows",
        arch: "x64",
        fileName: "KhaledChat-Setup-0.1.0-x64.exe",
        url: "https://github.com/Elomami1976/khaledchat-desktop/releases/download/v0.1.0/KhaledChat-Setup-0.1.0-x64.exe",
        size: "422 MB",
        sha256: "830213a214bf4a23bfd09f83893f5bcd1f06cbcd6b757ea18b36966b2152bc9f",
        requirements: [
          "Windows 10 or 11, 64-bit (tested on Windows 10)",
          "8 GB of memory or more",
          "2 GB+ free disk space for the smallest model",
          "Not code-signed yet: Windows may show a SmartScreen warning",
        ],
      },
    ],
    changes: {
      features: [
        "Local AI chat with 8 built-in models, recommended for your hardware",
        "Every download is confirmed first, showing size, source, folder and license",
        "Simple chat mode: much faster answers on computers without a graphics card",
        "Greeting by time of day, with your optional first name",
        "Settings: Hardware, Optional components, Privacy, About",
        "English and Arabic interface",
      ],
      improvements: [
        "No account, no cloud AI, no analytics, no automatic updates",
        "Web access off by default",
        "Sandboxed app window and checked internal messages",
        "Held back in this version: Code tools on Windows, and Web search (see the docs)",
      ],
    },
  },
];

export const latestRelease: Release | undefined = releases[0];

export function assetsFor(platform: Platform): ReleaseAsset[] {
  return latestRelease?.assets.filter((a) => a.platform === platform) ?? [];
}

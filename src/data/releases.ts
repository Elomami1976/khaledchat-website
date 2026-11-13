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

export const releases: Release[] = [];

export const latestRelease: Release | undefined = releases[0];

export function assetsFor(platform: Platform): ReleaseAsset[] {
  return latestRelease?.assets.filter((a) => a.platform === platform) ?? [];
}

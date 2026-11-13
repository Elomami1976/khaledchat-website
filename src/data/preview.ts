/**
 * Homepage application preview.
 *
 * While `appScreenshot` is null, the homepage shows the HTML design mockup
 * (src/components/sections/AppPreview.tsx), labeled as a preview.
 *
 * To use a real screenshot once the desktop app exists:
 *   1. Put the image in public/screenshots/ (PNG or WebP, ~2400px wide is plenty).
 *   2. Fill in the object below with its path, pixel size and a description.
 * Nothing else needs to change.
 */
export interface AppScreenshot {
  src: string; // e.g. "/screenshots/home-light.webp"
  srcDark?: string; // optional dark-theme screenshot
  width: number;
  height: number;
  alt: string;
}

export const appScreenshot: AppScreenshot | null = null;

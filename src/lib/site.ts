export const site = {
  name: "Khaled Chat",
  url: "https://khaledchat.com",
  tagline: "Your AI. Your Device. Your Privacy.",
  title: "Khaled Chat | Private Offline AI for Your Computer",
  description:
    "Discover Khaled Chat, a privacy-focused desktop AI assistant designed to run locally on your computer. Work with AI offline using models suited to your hardware.",
  /** Official Khaled Chat source repository. Set when it is public. */
  repoUrl: null as string | null,
  ogImage: { url: "/og.png", width: 1200, height: 630, alt: "Khaled Chat — Your AI. Your Device. Your Privacy." },
  upstream: {
    name: "Hob",
    url: "https://github.com/FrigadeHQ/hob",
  },
};

/** Only allow https URLs to be rendered as outbound links. */
export function safeUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/**
 * Per-page metadata: title, description, canonical URL, and matching
 * Open Graph / Twitter fields so shared links preview the right page.
 * `title` is the short page title; the layout template appends "| Khaled Chat".
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }) {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website" as const, siteName: site.name, url: path, title: fullTitle, description, images: [site.ogImage] },
    twitter: { card: "summary_large_image" as const, title: fullTitle, description, images: [site.ogImage.url] },
  };
}

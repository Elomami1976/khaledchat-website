export const site = {
  name: "Khaled Chat",
  url: "https://khaledchat.com",
  tagline: "Your AI. Your Device. Your Privacy.",
  title: "Khaled Chat | Private Offline AI for Your Computer",
  description:
    "Discover Khaled Chat, a privacy-focused desktop AI assistant designed to run locally on your computer. Work with AI offline using models suited to your hardware.",
  /** Official Khaled Chat source repository. Set when it is public. */
  repoUrl: null as string | null,
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

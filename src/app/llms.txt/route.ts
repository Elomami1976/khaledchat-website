// /llms.txt (https://llmstxt.org): a plain-text summary of the site for AI assistants and crawlers.
// Built from the same data as the pages, so it stays in step with them.
import { docSections } from "@/data/docs";
import { faq } from "@/data/faq";
import { features, statusLabel } from "@/data/features";
import { chatModels, extraModels } from "@/data/models";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const pages: [string, string, string][] = [
  ["Home", "/", "What Khaled Chat is and why it runs on your own computer."],
  ["Features", "/features/", "Planned and in-development capabilities, with their status."],
  ["Download", "/download/", "Release downloads (none published yet)."],
  ["Documentation", "/docs/", "Guides for installing, models, offline use, hardware and privacy."],
  ["Privacy", "/privacy/", "How the app and this website handle data."],
  ["About", "/about/", "The project, its goals and its relationship to Hob."],
  ["Changelog", "/changelog/", "Release notes."],
  ["FAQ", "/faq/", "Common questions."],
  ["Contact", "/contact/", "Email info@khaledchat.io; bugs and feature requests on GitHub."],
];

export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const text = [
    `# ${site.name}`,
    "",
    `> ${site.tagline} ${site.description}`,
    "",
    `${site.name} is a free, open-source desktop AI assistant (Windows first) that runs open-weight AI models locally (GGUF via llama.cpp). It needs no account, subscription or cloud AI service, and downloads nothing without the user's confirmation. It is based on ${site.upstream.name} (${site.upstream.url}, MIT License). Status: in development; no public release yet.`,
    "",
    "## Pages",
    "",
    ...pages.map(([title, path, desc]) => `- [${title}](${u(path)}): ${desc}`),
    "",
    "## Documentation",
    "",
    ...docSections.map((d) => `- [${d.title}](${u(`/docs/${d.slug}/`)}): ${d.description}`),
    "",
    "## Features",
    "",
    ...features.map((f) => `- ${f.title} (${statusLabel[f.status]}): ${f.description}`),
    "",
    "## AI models",
    "",
    `Built-in catalog: ${chatModels.length} chat models. The app recommends one for the computer; each is downloaded only after the user confirms it.`,
    "",
    ...chatModels.map((m) => `- ${m.name}: ${m.sizeGB.toFixed(2)} GB download, rough fit: ${m.fits}, ${m.license}${m.tested ? ", tested in Khaled Chat" : ""}`),
    ...extraModels.map((x) => `- Optional, ${x.feature}: ${x.models} (${x.license})`),
    "",
    "## FAQ",
    "",
    ...faq.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Optional",
    "",
    `- [Sitemap](${u("/sitemap.xml")})`,
    ...(site.repoUrl ? [`- [Source code](${site.repoUrl})`] : []),
    "",
  ].join("\n");
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

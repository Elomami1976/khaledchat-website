import type { MetadataRoute } from "next";
import { docSections } from "@/data/docs";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/features/", "/download/", "/docs/", "/privacy/", "/about/", "/changelog/", "/faq/",
    ...docSections.map((d) => `/docs/${d.slug}/`)];
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "/" ? 1 : 0.7 }));
}

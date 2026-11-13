import fs from "node:fs";
import path from "node:path";
import { docSections } from "@/data/docs";

const dir = path.join(process.cwd(), "src", "content", "docs");

export function getDoc(slug: string) {
  const meta = docSections.find((d) => d.slug === slug);
  if (!meta) return null;
  const body = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
  return { ...meta, body };
}

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal, dependency-free Markdown renderer that outputs React elements
 * (no raw HTML injection). Supports: ## / ### headings, paragraphs,
 * - and 1. lists, > notes, **bold**, `code`, [links](url).
 */

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function inline(text: string, key = 0): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    const k = `${key}-${i++}`;
    if (t.startsWith("**")) out.push(<strong key={k}>{t.slice(2, -2)}</strong>);
    else if (t.startsWith("`")) out.push(<code key={k}>{t.slice(1, -1)}</code>);
    else {
      const [, label, href] = /\[([^\]]+)\]\(([^)]+)\)/.exec(t)!;
      if (href.startsWith("/")) out.push(<Link key={k} href={href}>{label}</Link>);
      else if (href.startsWith("https://")) out.push(<a key={k} href={href} rel="noopener noreferrer">{label}</a>);
      else out.push(label);
    }
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export interface Heading { id: string; text: string }

export function renderMarkdown(src: string): { nodes: ReactNode[]; headings: Heading[] } {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  const headings: Heading[] = [];
  let i = 0;
  let k = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = slugify(text);
      headings.push({ id, text });
      nodes.push(<h2 key={k++} id={id} className="scroll-mt-24">{text}</h2>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      nodes.push(<h3 key={k++}>{inline(line.slice(4).trim(), k)}</h3>);
      i++; continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) {
        items.push(lines[i].replace(/^(- |\d+\. )/, ""));
        i++;
      }
      const lis = items.map((it, j) => <li key={j}>{inline(it, j)}</li>);
      nodes.push(ordered ? <ol key={k++}>{lis}</ol> : <ul key={k++}>{lis}</ul>);
      continue;
    }
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) { buf.push(lines[i].slice(2)); i++; }
      nodes.push(
        <div key={k++} role="note" className="rounded-xl border border-dashed border-line bg-bg-2/60 px-4 py-3 text-sm text-muted">
          {inline(buf.join(" "), k)}
        </div>,
      );
      continue;
    }
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3} |- |\d+\. |> )/.test(lines[i])) { buf.push(lines[i]); i++; }
    nodes.push(<p key={k++}>{inline(buf.join(" "), k)}</p>);
  }
  return { nodes, headings };
}

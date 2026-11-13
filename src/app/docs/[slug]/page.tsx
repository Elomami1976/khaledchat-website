import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docSections } from "@/data/docs";
import { getDoc } from "@/lib/docs";
import { renderMarkdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/site";
import { Prose } from "@/components/ui/primitives";

export const dynamicParams = false;

export function generateStaticParams() {
  return docSections.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = docSections.find((d) => d.slug === slug);
  if (!doc) return {};
  return pageMetadata({
    title: `${doc.title} · Docs`,
    description: `Khaled Chat documentation: ${doc.description} Guidance for the privacy-focused offline AI desktop assistant.`,
    path: `/docs/${slug}/`,
  });
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  const { nodes, headings } = renderMarkdown(doc.body);
  const idx = docSections.findIndex((d) => d.slug === slug);
  const prev = docSections[idx - 1];
  const next = docSections[idx + 1];

  return (
    <article>
      <h1 className="text-4xl font-semibold tracking-tight">{doc.title}</h1>
      <p className="mt-3 text-lg text-muted">{doc.description}</p>
      {headings.length > 1 && (
        <nav aria-label="On this page" className="mt-8 rounded-xl border border-line p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">On this page</p>
          <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
            {headings.map((h) => (
              <li key={h.id}><a href={`#${h.id}`} className="text-muted hover:text-fg">{h.text}</a></li>
            ))}
          </ul>
        </nav>
      )}
      <div className="mt-6">
        <Prose>{nodes}</Prose>
      </div>
      <nav aria-label="Pagination" className="mt-16 flex justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? <Link href={`/docs/${prev.slug}/`} className="text-muted hover:text-fg">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/docs/${next.slug}/`} className="text-muted hover:text-fg">{next.title} →</Link> : <span />}
      </nav>
    </article>
  );
}

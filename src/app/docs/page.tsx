import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { docSections } from "@/data/docs";
import { Notice } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to install Khaled Chat, manage local AI models, work offline and troubleshoot common problems.",
  alternates: { canonical: "/docs/" },
};

export default function DocsIndex() {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Documentation</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">Everything you need to set up and use Khaled Chat.</p>
      <div className="mt-6 max-w-2xl">
        <Notice>
          Khaled Chat is in pre-release development. Step-by-step instructions will be completed and verified against
          the first public release.
        </Notice>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {docSections.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/docs/${d.slug}/`}
              className="group block h-full rounded-2xl border border-line bg-card p-5 transition-shadow hover:shadow-[0_8px_28px_-14px_rgba(0,0,0,0.14)]"
            >
              <h2 className="flex items-center justify-between font-semibold">
                {d.title}
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
              </h2>
              <p className="mt-2 text-sm text-muted">{d.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

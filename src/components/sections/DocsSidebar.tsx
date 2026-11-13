import Link from "next/link";
import { docSections } from "@/data/docs";

export function DocsSidebar({ current }: { current?: string }) {
  return (
    <nav aria-label="Documentation">
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Documentation</p>
      <ul className="mt-3 space-y-0.5">
        <li>
          <Link
            href="/docs/"
            aria-current={!current ? "page" : undefined}
            className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-bg-2 hover:text-fg aria-[current=page]:bg-bg-2 aria-[current=page]:font-medium aria-[current=page]:text-fg"
          >
            Overview
          </Link>
        </li>
        {docSections.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/docs/${d.slug}/`}
              aria-current={current === d.slug ? "page" : undefined}
              className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-bg-2 hover:text-fg aria-[current=page]:bg-bg-2 aria-[current=page]:font-medium aria-[current=page]:text-fg"
            >
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

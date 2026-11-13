import type { ReactNode } from "react";
import { statusLabel, type FeatureStatus } from "@/data/features";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_8px_28px_-14px_rgba(0,0,0,0.14)] ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-bg text-fg" aria-hidden>
      {children}
    </div>
  );
}

const badge: Record<FeatureStatus, string> = {
  available: "border-transparent bg-invert text-invert-fg",
  development: "border-line bg-bg-2 text-fg",
  planned: "border-dashed border-line text-muted",
};

export function StatusBadge({ status }: { status: FeatureStatus }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${badge[status]}`}>
      {statusLabel[status]}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted text-pretty">{intro}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-line">
      <Container className="fade-up py-16 sm:py-20">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">{intro}</p>}
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 text-[15.5px] leading-7 text-fg/90 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_code]:rounded [&_code]:bg-bg-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em]">
      {children}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div role="note" className="rounded-xl border border-dashed border-line bg-bg-2/60 px-4 py-3 text-sm text-muted">
      {children}
    </div>
  );
}

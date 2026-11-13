import type { Metadata } from "next";
import { Container, Notice, PageHeader } from "@/components/ui/primitives";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history for Khaled Chat.",
  alternates: { canonical: "/changelog/" },
};

const groups = [
  ["features", "New features"],
  ["improvements", "Improvements"],
  ["fixes", "Bug fixes"],
] as const;

export default function ChangelogPage() {
  return (
    <>
      <PageHeader eyebrow="Changelog" title="Release history" />
      <Container className="py-16">
        {releases.length === 0 ? (
          <div className="max-w-2xl">
            <Notice>
              Khaled Chat is in pre-release development. There are no public releases yet. Release notes will be
              published here with the first version.
            </Notice>
          </div>
        ) : (
          <ol className="max-w-3xl space-y-14">
            {releases.map((r) => (
              <li key={r.version} className="grid gap-4 sm:grid-cols-[160px_1fr]">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{r.version}</h2>
                  <time dateTime={r.date} className="text-sm text-muted">{r.date}</time>
                </div>
                <div className="space-y-6">
                  {groups.map(([key, label]) =>
                    r.changes[key]?.length ? (
                      <section key={key}>
                        <h3 className="text-sm font-semibold">{label}</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-muted">
                          {r.changes[key]!.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                      </section>
                    ) : null,
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
}

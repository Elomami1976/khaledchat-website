import type { Metadata } from "next";
import { Monitor, Apple, Terminal, Download, Info } from "lucide-react";
import { Card, Container, Notice, PageHeader } from "@/components/ui/primitives";
import { DisabledButton, buttonClass } from "@/components/ui/Button";
import { assetsFor, latestRelease, platforms, type Platform } from "@/data/releases";
import { safeUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Khaled Chat for Windows, macOS and Linux. Release availability, versions and checksums.",
  alternates: { canonical: "/download/" },
};

const icons: Record<Platform, typeof Monitor> = { windows: Monitor, macos: Apple, linux: Terminal };

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Get Khaled Chat"
        intro={
          latestRelease
            ? `Latest version: ${latestRelease.version}, released ${latestRelease.date}.`
            : "Khaled Chat has not been publicly released yet. Installers will appear here as soon as they are published."
        }
      />
      <Container className="py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {platforms.map(({ id, name }) => {
            const Icon = icons[id];
            const assets = assetsFor(id).filter((a) => safeUrl(a.url));
            return (
              <Card key={id} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
                </div>
                {assets.length === 0 ? (
                  <>
                    <p className="mt-4 flex-1 text-sm text-muted">No release is available for {name} yet.</p>
                    <DisabledButton className="mt-6 w-full">Coming Soon</DisabledButton>
                  </>
                ) : (
                  <div className="mt-4 flex-1 space-y-6">
                    {assets.map((a) => (
                      <div key={a.fileName}>
                        <dl className="divide-y divide-line">
                          <Row label="Version" value={latestRelease!.version} />
                          <Row label="Architecture" value={a.arch} />
                          <Row label="Size" value={a.size} />
                          <Row label="Released" value={latestRelease!.date} />
                        </dl>
                        {a.requirements && a.requirements.length > 0 && (
                          <ul className="mt-3 list-disc pl-5 text-xs text-muted">
                            {a.requirements.map((r) => <li key={r}>{r}</li>)}
                          </ul>
                        )}
                        <a href={safeUrl(a.url)!} className={buttonClass("primary", "md", "mt-4 w-full")} rel="noopener">
                          <Download className="h-4 w-4" aria-hidden /> Download {a.arch}
                        </a>
                        <p className="mt-3 break-all font-mono text-[11px] text-muted">SHA-256: {a.sha256}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {latestRelease?.notesUrl && safeUrl(latestRelease.notesUrl) && (
          <p className="mt-6 text-sm">
            <a className="underline underline-offset-2" href={safeUrl(latestRelease.notesUrl)!}>Release notes</a>
          </p>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden />
            <p className="text-[15px] leading-7 text-muted">
              Khaled Chat requires an initial model download. Once a compatible model is installed, supported local AI
              features work offline. Model sizes vary, from a few hundred megabytes to many gigabytes.
            </p>
          </div>
          <Notice>
            Minimum system requirements will be published once they have been verified through benchmarking.
          </Notice>
        </div>
      </Container>
    </>
  );
}

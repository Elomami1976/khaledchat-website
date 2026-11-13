import { Lock, WifiOff, Cpu, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card, Container, IconBox, SectionHeading, StatusBadge } from "@/components/ui/primitives";
import { chatModels, extraModels } from "@/data/models";
import { AppPreview } from "./AppPreview";
import { features } from "@/data/features";
import { latestRelease } from "@/data/releases";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="pb-16 pt-16 sm:pt-24">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center rounded-full border border-line bg-bg-2 px-3 py-1 text-xs font-medium tracking-wide text-muted">
            In Development
          </p>
          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
            Your AI. Your Device. Your Privacy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
            Khaled Chat is a free desktop AI assistant that runs on your own computer. It checks your hardware, recommends
            a model that fits, and keeps your conversations private, with no account and no cloud.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/download/" size="lg" className="w-full sm:w-auto">
              {latestRelease ? "Download Khaled Chat" : "Download: Coming Soon"}
            </ButtonLink>
            <ButtonLink href="/features/" size="lg" variant="secondary" className="w-full sm:w-auto">
              Explore Features
            </ButtonLink>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <AppPreview />
        </div>
      </Container>
    </section>
  );
}

const benefits = [
  { icon: Lock, title: "Private by Design", text: "Designed to keep your conversations and files on your device." },
  { icon: WifiOff, title: "Works Offline", text: "Designed to keep working without an internet connection after setup." },
  { icon: Cpu, title: "Built for Your Computer", text: "Designed to find suitable AI models based on your hardware." },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title">
      <Container className="py-16">
        <h2 id="benefits-title" className="sr-only">Key benefits</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <IconBox><Icon className="h-5 w-5" strokeWidth={1.75} /></IconBox>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeatureGrid({ limit }: { limit?: number }) {
  const list = limit ? features.slice(0, limit) : features;
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {list.map(({ id, icon: Icon, title, description, status }) => (
        <div key={id} className="flex flex-col bg-card p-6 transition-colors hover:bg-bg">
          <div className="flex items-start justify-between gap-3">
            <Icon className="h-5 w-5 text-fg" strokeWidth={1.75} aria-hidden />
            <StatusBadge status={status} />
          </div>
          <h3 className="mt-6 font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-title">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="features-title">
            <SectionHeading eyebrow="Capabilities" title="Planned capabilities, on your own computer." />
          </div>
          <ButtonLink href="/features/" variant="ghost" className="self-start md:self-auto">
            All features <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
        <div className="mt-10">
          <FeatureGrid />
        </div>
        <p className="mt-4 text-sm text-muted">Availability labels reflect the current development status.</p>
      </Container>
    </section>
  );
}

const steps = [
  { n: "01", title: "Detect hardware", text: "Memory, processor, graphics and storage will be checked on your device." },
  { n: "02", title: "Recommend a model", text: "A model suited to your available resources will be suggested." },
  { n: "03", title: "Download and configure", text: "The model will be downloaded once and set up for you." },
  { n: "04", title: "Work offline", text: "Supported features will run locally, without a connection." },
];

export function HardwareSection() {
  return (
    <section aria-labelledby="hw-title" className="bg-bg-2/60">
      <Container className="py-20 sm:py-24">
        <div id="hw-title">
          <SectionHeading
            center
            eyebrow="Hardware-aware"
            title="AI That Adapts to Your Computer"
            intro="Khaled Chat checks your hardware and recommends an AI model suited to your available resources."
          />
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-line bg-card p-6">
              <span className="font-mono text-xs text-muted">{s.n}</span>
              <h3 className="mt-4 font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-muted">
          Available features depend on your hardware and installed models. Some capabilities, such as image analysis,
          may be unavailable on lower-resource devices. When that happens, Khaled Chat is designed to explain why
          rather than fail unexpectedly.
        </p>
      </Container>
    </section>
  );
}

export function DownloadCta() {
  return (
    <section>
      <Container className="py-16">
        <div className="rounded-3xl bg-invert px-6 py-16 text-center text-invert-fg sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Private AI on your desktop.</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-75">
            Version 0.1.0 is available for Windows 10 and 11. macOS and Linux will follow.
          </p>
          <ButtonLink
            href="/download/"
            size="lg"
            className="mt-8 !bg-invert-fg !text-invert"
          >
            Go to downloads
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** The models in Khaled Chat's built-in catalog (src/data/models.ts). */
export function ModelsSection() {
  return (
    <section aria-labelledby="models-title" id="models">
      <Container className="py-20 sm:py-24">
        <div id="models-title">
          <SectionHeading
            center
            eyebrow="AI models"
            title={`${chatModels.length} chat models, picked to fit your computer`}
            intro="Khaled Chat checks your hardware and recommends one. Every model is free, runs on your computer, and is downloaded only after you confirm it."
          />
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-2xl border border-line bg-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Chat models in the built-in catalog</caption>
            <thead className="border-b border-line text-muted">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">Model</th>
                <th scope="col" className="px-5 py-3 font-medium">Download</th>
                <th scope="col" className="px-5 py-3 font-medium">Rough fit</th>
                <th scope="col" className="px-5 py-3 font-medium">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {chatModels.map((m) => (
                <tr key={m.name}>
                  <th scope="row" className="px-5 py-3 font-medium">
                    {m.name}
                    {m.tested && <span className="ms-2 rounded-full border border-line px-2 py-0.5 text-xs font-normal text-muted">Tested</span>}
                  </th>
                  <td className="px-5 py-3 whitespace-nowrap">{m.sizeGB.toFixed(2)} GB</td>
                  <td className="px-5 py-3 text-muted">{m.fits}</td>
                  <td className="px-5 py-3 text-muted">{m.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mx-auto mt-6 max-w-4xl space-y-2 text-sm leading-6 text-muted">
          {extraModels.map((x) => (
            <li key={x.feature}><span className="font-medium text-fg">{x.feature}</span> (optional): {x.models}. {x.license}.</li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-6 text-muted">
          &ldquo;Rough fit&rdquo; is a guide only: the app&apos;s own hardware check decides, and models that won&apos;t fit are shown
          but can&apos;t be picked. &ldquo;Tested&rdquo; means verified end to end in Khaled Chat on real hardware; the others
          come from the upstream Hob catalog with verified checksums and are still being tested.
        </p>
      </Container>
    </section>
  );
}

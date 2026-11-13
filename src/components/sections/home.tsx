import { Lock, WifiOff, Cpu, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card, Container, IconBox, SectionHeading, StatusBadge } from "@/components/ui/primitives";
import { AppPreview } from "./AppPreview";
import { features } from "@/data/features";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="pb-16 pt-16 sm:pt-24">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
            Your AI. Your Device. Your Privacy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
            Khaled Chat brings powerful AI directly to your computer. Chat, work with documents, write code, and
            explore ideas privately, even without an internet connection.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/download/" size="lg" className="w-full sm:w-auto">
              Download Khaled Chat
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
  { icon: Lock, title: "Private by Design", text: "Your conversations and files stay on your device." },
  { icon: WifiOff, title: "Works Offline", text: "Continue working without an internet connection after setup." },
  { icon: Cpu, title: "Built for Your Computer", text: "Automatically discovers suitable AI models based on your hardware." },
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
            <SectionHeading eyebrow="Capabilities" title="Everything you need, on your own computer." />
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
  { n: "01", title: "Detect hardware", text: "Memory, processor, graphics and storage are checked on your device." },
  { n: "02", title: "Recommend a model", text: "A model suited to your available resources is suggested." },
  { n: "03", title: "Download and configure", text: "The model is downloaded once and set up for you." },
  { n: "04", title: "Work offline", text: "Supported features run locally, without a connection." },
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
            intro="Khaled Chat checks your hardware and helps select an AI model suited to your available resources."
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
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Private AI, ready when you are.</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-75">
            Khaled Chat is being prepared for Windows, macOS and Linux.
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

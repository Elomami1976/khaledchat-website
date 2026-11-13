import type { Metadata } from "next";
import { FeatureGrid, HardwareSection, DownloadCta } from "@/components/sections/home";
import { Container, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Features",
  description: "Local AI chat, hardware-aware model selection, document assistance and more. See what Khaled Chat can do and what is in development.",
  alternates: { canonical: "/features/" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Capable AI that stays on your computer."
        intro="Khaled Chat is under active development. Each capability below is labeled with its current status."
      />
      <Container className="py-16">
        <h2 className="sr-only">All features</h2>
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>Status:</span>
          <StatusBadge status="available" />
          <StatusBadge status="development" />
          <StatusBadge status="planned" />
        </div>
        <FeatureGrid />
      </Container>
      <HardwareSection />
      <DownloadCta />
    </>
  );
}

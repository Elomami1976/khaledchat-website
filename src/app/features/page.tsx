import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { FeatureGrid, HardwareSection, ModelsSection, DownloadCta } from "@/components/sections/home";
import { Container, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = pageMetadata({
  title: "Features",
  description: "Local AI chat, hardware-aware model selection, document assistance and more. See what Khaled Chat can do today and what is planned.",
  path: "/features/",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Capable AI, designed to stay on your computer."
        intro="Each capability below is labeled with its status in the current version."
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
      <ModelsSection />
      <DownloadCta />
    </>
  );
}

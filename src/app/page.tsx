import type { Metadata } from "next";
import { Benefits, DownloadCta, FeaturesSection, HardwareSection, Hero } from "@/components/sections/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturesSection />
      <HardwareSection />
      <DownloadCta />
    </>
  );
}

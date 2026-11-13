import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Container, PageHeader } from "@/components/ui/primitives";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Khaled Chat: offline use, privacy, models, hardware and supported platforms.",
  alternates: { canonical: "/faq/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" />
      <Container className="py-16">
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-medium hover:text-fg/80">
                <h2 className="text-base sm:text-lg">{item.q}</h2>
                <ChevronDown className="chev h-5 w-5 shrink-0 text-muted transition-transform duration-200" aria-hidden />
              </summary>
              <p className="pb-6 pr-10 text-[15px] leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </>
  );
}

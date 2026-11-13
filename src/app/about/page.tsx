import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui/primitives";
import { safeUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Khaled Chat is a desktop AI application focused on privacy, simplicity and accessibility, built upon the open-source Hob project.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const repo = safeUrl(site.repoUrl);
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Make local AI easier to use, regardless of technical experience."
      />
      <Container className="py-16">
        <Prose>
          <p>
            Khaled Chat is a desktop AI application focused on privacy, simplicity and accessibility. It runs AI models
            on your own computer, so you can use modern AI without sending your conversations to a cloud service.
          </p>
          <p>
            Setting up local AI usually means comparing model formats, memory requirements and configuration options.
            Khaled Chat aims to remove that work: it looks at your hardware, recommends a suitable model, and helps you
            download and configure it.
          </p>

          <h2>Open source</h2>
          <p>
            Khaled Chat builds upon the open-source{" "}
            <a href={site.upstream.url} rel="noopener noreferrer">Hob</a> project. We are grateful to its authors and
            contributors. The original project&apos;s license and copyright notices, and those of its dependencies, are
            preserved in the Khaled Chat source code and distributed builds.
          </p>
          {repo ? (
            <p>
              The Khaled Chat source code is available at <a href={repo} rel="noopener noreferrer">{repo}</a>.
            </p>
          ) : (
            <p>A link to the Khaled Chat source repository will be added here when it is published.</p>
          )}
        </Prose>
      </Container>
    </>
  );
}

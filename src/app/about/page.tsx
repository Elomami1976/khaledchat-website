import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui/primitives";
import { safeUrl, site, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Khaled Chat is a free desktop AI application focused on privacy, simplicity and accessibility, built on the open-source Hob project.",
  path: "/about/",
});

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
            Khaled Chat is a free desktop AI application focused on privacy, simplicity and accessibility. It runs AI
            models on your own computer, so you can use modern AI without sending your conversations to a cloud
            service. Version 0.1.1 is available for Windows.
          </p>
          <p>
            Setting up local AI usually means comparing model formats, memory requirements and configuration options.
            Khaled Chat removes that work: it looks at your hardware, recommends a suitable model, and downloads and
            sets it up after you confirm.
          </p>

          <h2>Open source</h2>
          <p>
            Khaled Chat is built on the open-source{" "}
            <a href={site.upstream.url} rel="noopener noreferrer">Hob</a> project, which is released under the MIT
            License. We are grateful to its authors and contributors.
          </p>
          {repo ? (
            <p>
              The Khaled Chat source code is available at <a href={repo} rel="noopener noreferrer">{repo}</a>.
            </p>
          ) : (
            <p>
              Khaled Chat&apos;s own source code is not publicly available yet. A link to the official repository will
              be added here once it is published.
            </p>
          )}
        </Prose>
      </Container>
    </>
  );
}

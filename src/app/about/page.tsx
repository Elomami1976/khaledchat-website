import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui/primitives";
import { safeUrl, site, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Khaled Chat is an upcoming desktop AI application focused on privacy, simplicity and accessibility, developed using the open-source Hob project.",
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
            Khaled Chat is an upcoming desktop AI application focused on privacy, simplicity and accessibility. It is
            being designed to run AI models on your own computer, so you can use modern AI without sending your
            conversations to a cloud service. It is currently in development and has not been released yet.
          </p>
          <p>
            Setting up local AI usually means comparing model formats, memory requirements and configuration options.
            Khaled Chat aims to remove that work: it is being designed to look at your hardware, recommend a suitable
            model, and help you download and configure it.
          </p>

          <h2>Open source</h2>
          <p>
            Khaled Chat is being developed using the open-source{" "}
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

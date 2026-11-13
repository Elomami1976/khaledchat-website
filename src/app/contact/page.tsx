import type { Metadata } from "next";
import { Mail, Bug } from "lucide-react";
import { pageMetadata, safeUrl, site } from "@/lib/site";
import { Container, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the Khaled Chat team: questions, feedback, partnerships and press. Email info@khaledchat.io.",
  path: "/contact/",
});

export default function ContactPage() {
  const repo = safeUrl(site.repoUrl);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        intro="Questions, feedback, partnership or press enquiries: we'd like to hear from you."
      />
      <Container className="py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <a href={`mailto:${site.email}`} className="group rounded-2xl border border-line bg-card p-7 transition-colors hover:border-fg/30">
            <Mail className="h-5 w-5 text-fg" strokeWidth={1.75} aria-hidden />
            <h2 className="mt-5 font-semibold tracking-tight">Email</h2>
            <p className="mt-2 text-sm leading-6 text-muted">For general questions, feedback, partnerships and press.</p>
            <p className="mt-4 font-medium underline underline-offset-4 group-hover:no-underline">{site.email}</p>
          </a>
          {repo && (
            <a href={`${repo}/issues`} rel="noopener noreferrer" className="group rounded-2xl border border-line bg-card p-7 transition-colors hover:border-fg/30">
              <Bug className="h-5 w-5 text-fg" strokeWidth={1.75} aria-hidden />
              <h2 className="mt-5 font-semibold tracking-tight">Bugs and feature requests</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Found a problem in the app, or have an idea? Open an issue on GitHub so others can follow it too.</p>
              <p className="mt-4 font-medium underline underline-offset-4 group-hover:no-underline">GitHub issues</p>
            </a>
          )}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
          Khaled Chat is a small open-source project, so replies may take a few days. Please don&apos;t send passwords or
          other sensitive personal information by email.
        </p>
      </Container>
    </>
  );
}

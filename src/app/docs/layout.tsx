import { Container } from "@/components/ui/primitives";
import { DocsNav } from "./DocsNav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <DocsNav />
      </aside>
      <div className="min-w-0">{children}</div>
    </Container>
  );
}

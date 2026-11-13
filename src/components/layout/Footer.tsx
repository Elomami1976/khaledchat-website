import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav } from "@/data/navigation";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-2/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} Khaled Chat. Built upon the open-source{" "}
          <a href={site.upstream.url} className="underline underline-offset-2 hover:text-fg" rel="noopener noreferrer">
            Hob
          </a>{" "}
          project.
        </p>
      </div>
    </footer>
  );
}

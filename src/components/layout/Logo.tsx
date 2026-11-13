import Link from "next/link";

/**
 * Approved Khaled Chat logos. Uses trimmed copies of the supplied files
 * (public/branding/*-web.svg); originals are kept unchanged alongside them.
 */
type Variant = "stacked" | "horizontal";

const files: Record<Variant, { light: string; dark: string; ratio: number }> = {
  stacked: { light: "/branding/logo-light-web.svg", dark: "/branding/logo-dark-web.svg", ratio: 520 / 358 },
  horizontal: { light: "/branding/horizontal-light-web.svg", dark: "/branding/horizontal-dark-web.svg", ratio: 766 / 162 },
};

export function LogoMark({ height = 40, variant = "stacked", className = "" }: { height?: number; variant?: Variant; className?: string }) {
  const f = files[variant];
  const width = Math.round(height * f.ratio);
  return (
    <span className={`inline-block ${className}`} style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={f.light} alt="Khaled Chat" width={width} height={height} className="block dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={f.dark} alt="Khaled Chat" width={width} height={height} className="hidden dark:block" />
    </span>
  );
}

export function Logo({ height = 26, variant = "horizontal", className = "" }: { height?: number; variant?: Variant; className?: string }) {
  return (
    <Link href="/" aria-label="Khaled Chat home" className={`inline-flex ${className}`}>
      <LogoMark height={height} variant={variant} />
    </Link>
  );
}

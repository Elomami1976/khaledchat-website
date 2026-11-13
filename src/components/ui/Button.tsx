import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98]";
const variants: Record<Variant, string> = {
  primary: "bg-invert text-invert-fg shadow-sm hover:opacity-90",
  secondary: "border border-line bg-card text-fg hover:bg-bg-2",
  ghost: "text-fg hover:bg-bg-2",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link {...props} className={buttonClass(variant, size, className)} />;
}

export function DisabledButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-disabled="true"
      className={`${base} ${sizes.md} cursor-not-allowed border border-dashed border-line text-muted ${className}`}
    >
      {children}
    </span>
  );
}

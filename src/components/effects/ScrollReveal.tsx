"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades in page sections as they scroll into view.
 * Targets every <section> in <main> after the first (the hero animates on load).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main section")).slice(1);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      else {
        el.classList.add("reveal");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { DocsSidebar } from "@/components/sections/DocsSidebar";

export function DocsNav() {
  const pathname = usePathname() ?? "";
  const current = pathname.split("/").filter(Boolean)[1];
  return <DocsSidebar current={current} />;
}

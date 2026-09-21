"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isNavigationActive,
  resolveNavigationHref,
} from "@/src/lib/navigation";
import { navigation } from "@/src/data/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-7 lg:flex"
    >
      {navigation.map((item) => {
        const href = resolveNavigationHref(item, pathname);
        const isActive = isNavigationActive(item, pathname);

        return (
          <Link
            key={item.label}
            href={href}
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-[var(--foreground)]"
                : "text-[var(--foreground)]/65 hover:text-[var(--foreground)]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
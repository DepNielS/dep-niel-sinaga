"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/src/data/navigation";
import {
  isNavigationActive,
  resolveNavigationHref,
} from "@/src/lib/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        {isOpen ? (
          <X size={21} strokeWidth={1.8} />
        ) : (
          <Menu size={21} strokeWidth={1.8} />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[var(--border)] bg-[var(--background)]">
          <div className="container-main py-5">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navigation.map((item) => {
                const href = resolveNavigationHref(item, pathname);
                const isActive = isNavigationActive(item, pathname);

                return (
                  <Link
                    key={item.label}
                    href={href}
                    onClick={closeMenu}
                    className={`border-b border-[var(--border)] py-4 text-base font-medium transition-colors duration-300 last:border-b-0 ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)] hover:text-[var(--accent)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
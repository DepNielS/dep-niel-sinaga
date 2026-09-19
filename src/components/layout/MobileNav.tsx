"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/src/data/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            inline-flex size-10 items-center justify-center
            rounded-full
            border border-navy-700
            text-white
            transition-colors duration-300
            hover:border-primary-500
            hover:text-primary-400
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={18} aria-hidden="true" />
          ) : (
            <Menu size={18} aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="
            absolute left-4 right-4 top-[calc(100%+0.75rem)]
            rounded-2xl
            border border-navy-700
            bg-navy-900/95
            p-4
            shadow-2xl
            backdrop-blur-xl
          "
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3
                  text-sm font-medium text-slate-200
                  transition-colors duration-300
                  hover:bg-primary-500/10
                  hover:text-primary-400
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="
                mt-2
                inline-flex items-center justify-center gap-2
                rounded-xl
                bg-primary-500
                px-4 py-3
                text-sm font-semibold text-white
                transition-colors duration-300
                hover:bg-primary-600
              "
            >
              Contact
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
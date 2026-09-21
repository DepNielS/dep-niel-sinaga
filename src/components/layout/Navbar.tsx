import Link from "next/link";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="container-main flex h-20 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          Dep` Niel Sinaga
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <DesktopNav />

          <ThemeToggle />

          <Link
            href={resolveContactHref()}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function resolveContactHref() {
  return "/#contact";
}
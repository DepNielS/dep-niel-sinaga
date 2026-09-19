import Link from "next/link";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-navy-700/60 bg-navy-950/80 backdrop-blur-xl">
        <div className="container-main">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="
                text-base font-semibold tracking-tight
                text-white
                transition-colors duration-300
                hover:text-primary-400
              "
            >
              Dep` Niel Sinaga
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <DesktopNav />
              <ThemeToggle />
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/src/data/navigation";
import { cn } from "@/src/lib/utils";

export function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-7 lg:flex"
      aria-label="Primary navigation"
    >
      {navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "text-sm font-medium",
            "text-navy-500 dark:text-slate-300",
            "transition-colors duration-300",
            "hover:text-primary-400"
          )}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="#contact"
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-primary-600
          bg-primary-500
          px-4 py-2.5
          text-sm font-semibold text-white
          transition-all duration-300
          hover:bg-primary-600
          hover:shadow-blue
        "
      >
        Contact
        <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </nav>
  );
}
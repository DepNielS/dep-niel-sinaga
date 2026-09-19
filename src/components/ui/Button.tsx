import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none";

  const variants = {
    primary:
      "bg-primary-500 text-foreground hover:bg-primary-600 hover:shadow-blue",
    secondary:
      "border border-navy-700 bg-transparent text-foreground hover:border-primary-500 hover:text-primary-400",
    ghost:
      "text-navy-500 hover:text-primary-400 dark:text-navy-500",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}
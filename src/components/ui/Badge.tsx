import { cn } from "@/src/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "border border-primary-700/40",
        "bg-primary-500/10",
        "px-3 py-1.5",
        "text-xs font-medium text-primary-300",
        className
      )}
    >
      <span
        className="size-1.5 rounded-full bg-primary-400"
        aria-hidden="true"
      />

      {children}
    </span>
  );
}
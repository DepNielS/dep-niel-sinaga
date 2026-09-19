import { cn } from "@/src/lib/utils";
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)]",
        "bg-[var(--surface-elevated)]",
        className
      )}
    >
      {children}
    </div>
  );
}
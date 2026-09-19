import { cn } from "@/src/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title text-foreground">
        {title}
      </h2>

      {description && (
        <p className="body-copy">
          {description}
        </p>
      )}
    </div>
  );
}
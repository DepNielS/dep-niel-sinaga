import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/src/types";

interface ProjectMiniCardProps {
  project: Project;
}

export function ProjectMiniCard({
  project,
}: ProjectMiniCardProps) {
  return (
    <article className="group">
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="
          block
          overflow-hidden
          rounded-3xl
          border
          border-navy-700
          bg-navy-950
        "
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-navy-950/20
              via-transparent
              to-transparent
            "
            aria-hidden="true"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400">
          {project.number} — {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-navy-500">
          {project.description}
        </p>

        {/* Technology Line */}
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {project.technologies.map((technology, index) => (
            <span
              key={technology}
              className="text-sm text-foreground"
            >
              {technology}
              {index <
                project.technologies.length - 1 && (
                <span className="ml-3 text-navy-600">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        
      </div>
    </article>
  );
}
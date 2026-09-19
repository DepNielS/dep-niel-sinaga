import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/src/types";

interface ProjectShowcaseProps {
  project: Project;
}

export function ProjectShowcase({
  project,
}: ProjectShowcaseProps) {
  return (
    <article className="group">
      {/* Project Information */}
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-400">
            {project.number} — {project.category}
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            {project.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-navy-500 sm:text-base">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
            {project.technologies.map((technology, index) => (
              <span
                key={technology}
                className="text-sm text-foregorund"
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

          {/* CTA */}
          <Link
            href={`/projects/${project.slug}`}
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-foreground
              transition-colors
              duration-300
              hover:text-primary-400
            "
          >
            View Case Study
            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Large Project Preview */}
      <div
        className="
          relative
          mt-10
          overflow-hidden
          rounded-3xl
          border
          border-navy-700
          bg-navy-950
        "
      >
        <div className="relative aspect-[16/8.5]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 1400px"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.02]
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
      </div>
    </article>
  );
}
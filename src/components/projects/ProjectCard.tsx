import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/src/types";
import { cn } from "@/src/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border border-navy-700 bg-navy-900/60",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary-500/50 hover:bg-navy-900",
        featured && "lg:grid lg:grid-cols-[1.35fr_0.65fr]"
      )}
    >
      {/* Project Image */}
      <div
        className={cn(
          "relative overflow-hidden bg-navy-950",
          featured ? "aspect-[16/9] lg:aspect-auto lg:min-h-[430px]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 850px"
              : "(max-width: 1024px) 100vw, 500px"
          }
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
            absolute inset-0
            bg-gradient-to-t
            from-navy-950/30
            via-transparent
            to-transparent
          "
          aria-hidden="true"
        />

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            border border-white/10
            bg-navy-950/70
            px-3
            py-1.5
            text-xs
            font-medium
            text-white
            backdrop-blur-md
          "
        >
          {project.number}
        </span>
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-navy-500">
            {project.description}
          </p>

          {project.role && (
            <p className="mt-4 text-sm text-slate-300">
              <span className="font-semibold text-white">
                My Role:
              </span>{" "}
              {project.role}
            </p>
          )}

          {project.status && (
            <span
              className="
                mt-4
                inline-flex
                rounded-full
                border border-primary-500/20
                bg-primary-500/10
                px-3
                py-1.5
                text-xs
                font-medium
                text-primary-300
              "
            >
              {project.status}
            </span>
          )}
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border border-navy-700
                  bg-navy-800
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-300
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
           
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  text-navy-500
                  transition-colors
                  duration-300
                  hover:text-primary-400
                "
              >
                GitHub ↗
              </Link>
            )}

            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  text-navy-500
                  transition-colors
                  duration-300
                  hover:text-primary-400
                "
              >
                Live Demo ↗
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
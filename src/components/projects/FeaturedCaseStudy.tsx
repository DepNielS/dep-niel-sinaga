import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/src/data/projects";

export default function FeaturedCaseStudy() {
  const project = projects.find(
    (item) => item.slug === "iac",
  );

  if (!project) {
    return null;
  }

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-main">
        {/* Featured Project Header */}
        <div className="border-t border-[var(--border)] pt-8">
          <div className="grid gap-12 lg:grid-cols-[1.45fr_0.55fr] lg:gap-24">
            {/* Main Information */}
            <div>
              {/* Number + Label */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm font-medium tracking-[0.12em] text-[var(--accent)]">
                  {project.number}
                </p>

                <span className="text-sm text-[var(--muted)]">
                  Featured Case Study
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {project.title}
              </h2>

              {/* Category */}
              <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">
                {project.category}
              </p>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    {technology}

                    {index !== project.technologies.length - 1 && (
                      <span className="ml-3 text-[var(--muted)]">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* External Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-2.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    <span>Live Demo</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                  >
                    <span>GitHub</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Project Meta */}
            <div className="border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {project.role && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                    Role
                  </p>

                  <p className="mt-3 text-base font-medium text-[var(--foreground)]">
                    {project.role}
                  </p>
                </div>
              )}

              {project.status && (
                <div className="mt-8 border-t border-[var(--border)] pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                    Status
                  </p>

                  <p className="mt-3 text-base font-medium text-[var(--foreground)]">
                    {project.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="mt-14 lg:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)]">
            <Image
              src={project.image}
              alt={`${project.title} project interface`}
              fill
              sizes="(max-width: 768px) 100vw, 1440px"
              className="object-cover transition-transform duration-500 hover:scale-[1.015]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
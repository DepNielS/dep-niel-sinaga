import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/src/data/projects";

export default function ProjectArchive() {
  const archiveProjects = projects.filter(
    (project) => project.slug !== "iac",
  );

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-main">
        {/* Section Header */}
        <div className="border-t border-[var(--border)] pt-8">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
            Project Archive
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
            A selection of personal and team projects built across different
            stages of my development journey.
          </p>
        </div>

        {/* Archive */}
        <div className="mt-12">
          {archiveProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`border-t border-[var(--border)] py-10 lg:py-14 ${
                index === archiveProjects.length - 1
                  ? "border-b"
                  : ""
              }`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
                {/* Project Image */}
                <div className="overflow-hidden bg-[var(--surface)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} project interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  {/* Number + Category */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="text-sm font-medium tracking-[0.12em] text-[var(--accent)]">
                      {project.number}
                    </span>

                    <span className="text-sm text-[var(--muted)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2">
                    {project.technologies.map(
                      (technology, technologyIndex) => (
                        <span
                          key={technology}
                          className="text-sm font-medium text-[var(--foreground)]"
                        >
                          {technology}

                          {technologyIndex !==
                            project.technologies.length - 1 && (
                            <span className="ml-3 text-[var(--muted)]">
                              ·
                            </span>
                          )}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Role */}
                  {project.role && (
                    <p className="mt-6 text-sm text-[var(--muted)]">
                      <span className="font-medium text-[var(--foreground)]">
                        Role
                      </span>

                      <span className="mx-2 text-[var(--muted)]">
                        ·
                      </span>

                      {project.role}
                    </p>
                  )}

                  {/* External Actions */}
                  {(project.liveDemo || project.github) && (
                    <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                      {project.liveDemo &&
                        !project.liveDemo.startsWith("YOUR_") && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
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
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
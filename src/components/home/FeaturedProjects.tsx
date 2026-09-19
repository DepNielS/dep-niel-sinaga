import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "../ui/SectionHeading";
import { ProjectShowcase } from "../projects/ProjectShowcase";
import { ProjectMiniCard } from "../projects/ProjectMiniCard";
import { projects } from "@/src/data/projects";

export function FeaturedProjects() {
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="featured-projects-title"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Things I've built."
            description="A selection of personal and team projects that reflect my current focus on Web Development."
          />

          <Link
            href="/projects"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-semibold
              text-primary-400
              transition-colors
              duration-300
              hover:text-primary-300
            "
          >
            View All Projects
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Featured Project */}
        <div className="mt-14">
          <ProjectShowcase project={featuredProject} />
        </div>

        {/* Supporting Projects */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {supportingProjects.map((project) => (
            <ProjectMiniCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
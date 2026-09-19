import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "../ui/SectionHeading";

const focusAreas = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building practical web applications with modern JavaScript and TypeScript technologies.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Working across frontend, backend, APIs, authentication, and database integration.",
  },
  {
    number: "03",
    title: "Project-Based Learning",
    description:
      "Strengthening my skills through personal projects, team collaboration, and real-world inspired problems.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-title"
    >
      <div className="container-main">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* About Content */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="A developer focused on practical web applications."
            />

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-navy-500">
              <p>
                I&apos;m an Informatics graduate from Universitas Multi
                Data Palembang with a strong interest in Web Development.
              </p>

              <p>
                I have hands-on experience building applications through
                internship, team, and personal projects. My experience
                includes contributing to an Android inventory management
                application, a water meter reading system, and building
                web applications using modern technologies.
              </p>

              <p>
                Currently, I&apos;m focused on strengthening my skills in
                JavaScript, TypeScript, React, Next.js, NestJS, RESTful
                APIs, and PostgreSQL while continuing to learn through
                practical projects.
              </p>
            </div>

            <Link
              href="#experience"
              className="
                mt-8
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
              View My Experience
              <ArrowUpRight 
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Focus Areas */}
          <div className="lg:pt-16">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary-400
              "
            >
              Currently Focused On
            </p>

            <div className="mt-6 divide-y divide-navy-700/70">
              {focusAreas.map((area) => (
                <article
                  key={area.number}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex gap-5">
                    <span className="shrink-0 text-sm font-medium text-primary-400">
                      {area.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-navy-500">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
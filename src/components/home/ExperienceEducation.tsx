import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import { experience } from "@/src/data/experience";
import { education } from "@/src/data/education";

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-[var(--border)]"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Experience & Education
          </p>

          <h2 className="display-heading text-balance">
            From building applications to
            <span className="text-[var(--accent)]">
              {" "}
              focusing on web development.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-[var(--muted)]">
            A look at the experiences and academic background that shaped my
            development journey.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.45fr_0.85fr] lg:gap-24">
          {/* Experience */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <BriefcaseBusiness
                size={20}
                strokeWidth={1.8}
                className="text-[var(--accent)]"
              />

              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Experience
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-[var(--border)]">
              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.title}`}
                  className={`relative pl-8 ${
                    index !== experience.length - 1 ? "pb-14" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_0_4px_var(--surface)]"
                  />

                  {/* Period */}
                  <p className="mb-3 text-sm font-medium tracking-wide text-[var(--accent)]">
                    {item.period}
                  </p>

                  {/* Position + Type */}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="text-xl font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h4>

                    {item.type && (
                      <span className="text-sm text-[var(--muted)]">
                        · {item.type}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <p className="mt-1 text-base text-[var(--muted)]">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  {/* Relevant Skills */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                      Relevant Skills
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {item.relevantSkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm font-medium text-[var(--foreground)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education + Current Direction */}
          <div>
            {/* Education */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <GraduationCap
                  size={20}
                  strokeWidth={1.8}
                  className="text-[var(--accent)]"
                />

                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  Education
                </h3>
              </div>

              {education.map((item) => (
                <article
                  key={`${item.institution}-${item.period}`}
                  className="border-t border-[var(--border)] pt-6"
                >
                  {/* Period */}
                  <p className="text-sm font-medium tracking-wide text-[var(--accent)]">
                    {item.period}
                  </p>

                  {/* Degree */}
                  <h4 className="mt-5 text-2xl font-semibold leading-tight text-[var(--foreground)]">
                    {item.degree}
                  </h4>

                  {/* Field */}
                  <p className="mt-1 text-lg text-[var(--muted)]">
                    {item.field}
                  </p>

                  {/* Institution */}
                  <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                    {item.institution}
                  </p>

                  {/* Academic Result */}
                  {item.result && (
                    <div className="mt-8 border-t border-[var(--border)] pt-5">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                        Academic Result
                      </p>
                    
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                        {item.result.replace("CGPA ", "")}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Current Direction */}
            <div className="mt-16 border-t border-[var(--border)] pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Current Direction
              </p>

              <h4 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                Web Development
              </h4>

              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                Currently focused on building practical web applications while
                strengthening my frontend and backend development skills.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[var(--foreground)]">
                <span>Web Development</span>
                <span>Full-Stack Development</span>
                <span>Project-Based Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
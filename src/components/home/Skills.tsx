import { skillGroups, type SkillItem } from "@/src/data/skills";

function SkillIcon({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon;

  return (
    <span
      tabIndex={0}
      role="img"
      aria-label={skill.name}
      className="group relative flex h-14 w-14 cursor-default items-center justify-center outline-none"
    >
      {/* Technology Icon */}
      {Icon ? (
        <Icon
          size={38}
          color={skill.color ?? "currentColor"}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
        />
      ) : (
        <span
          aria-hidden="true"
          className="text-sm font-bold tracking-tight text-[var(--foreground)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
          style={{
            color: skill.color,
          }}
        >
          {skill.shortLabel}
        </span>
      )}

      {/* Tooltip */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 z-30 w-max max-w-40 -translate-x-1/2 translate-y-1 rounded-md bg-[var(--elevated)] px-3 py-2 text-xs font-medium text-[var(--foreground)] opacity-0 shadow-lg ring-1 ring-[var(--border)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        {skill.name}

        {/* Tooltip Arrow */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--elevated)] ring-1 ring-[var(--border)]"
        />
      </span>
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-t border-[var(--border)]"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Skills
          </p>

          <h2 className="display-heading text-balance">
            Technologies I&apos;ve used
            <span className="text-[var(--accent)]">
              {" "}
              across different projects.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-[var(--muted)]">
            A visual overview of the technologies and tools I have worked with
            across personal, team, academic, and internship projects.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[220px_1fr] md:gap-12"
            >
              {/* Group Title */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  {group.title}
                </p>
              </div>

              {/* Skill Icons */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-7">
                {group.skills.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { SectionHeading } from "../ui/SectionHeading";

const frontendStack = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

const backendStack = [
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "RESTful APIs",
    icon: null,
  },
];

const dataToolsStack = [
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];

interface StackItemProps {
  name: string;
  icon: React.ComponentType<{
    size?: string | number;
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }> | null;
}

function StackItem({ name, icon: Icon }: StackItemProps) {
  return (
    <div
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-xl
        border
        border-navy-700
        bg-navy-900/50
        px-4
        py-3
        transition-all
        duration-300
        hover:border-primary-500/50
        hover:bg-primary-500/5
      "
    >
      <span
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-navy-800
          text-primary-400
          transition-colors
          duration-300
          group-hover:bg-primary-500/10
        "
      >
        {Icon ? (
          <Icon
            size={18}
            aria-hidden="true"
          />
        ) : (
          <span
            className="
              text-xs
              font-bold
              text-primary-400
            "
            aria-hidden="true"
          >
            API
          </span>
        )}
      </span>

      <span
        className="
          text-sm
          font-medium
          text-slate-200
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {name}
      </span>
    </div>
  );
}

interface StackGroupProps {
  title: string;
  items: StackItemProps[];
}

function StackGroup({
  title,
  items,
}: StackGroupProps) {
  return (
    <div>
      <p
        className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-primary-400
        "
      >
        {title}
      </p>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <StackItem
            key={item.name}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="stack"
      className="section-padding"
      aria-labelledby="tech-stack-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Primary Stack"
          title="Technologies I currently use to build."
          description="A selection of technologies I use across personal, team, and web development projects."
        />

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-navy-700
            bg-navy-900/40
            p-6
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Frontend */}
            <StackGroup
              title="Frontend"
              items={frontendStack}
            />

            {/* Backend */}
            <StackGroup
              title="Backend"
              items={backendStack}
            />
          </div>

          <div
            className="
              my-10
              border-t
              border-navy-700/70
            "
          />

          {/* Data & Tools */}
          <StackGroup
            title="Data & Tools"
            items={dataToolsStack}
          />
        </div>
      </div>
    </section>
  );
}
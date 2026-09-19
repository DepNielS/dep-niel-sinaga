import type { IconType } from "react-icons";

import {
  SiCss,
  SiDocker,
  SiDrizzle,
  SiElectron,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon?: IconType;
  shortLabel?: string;
  color?: string;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "currentColor",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "Go",
        icon: SiGo,
        color: "#00ADD8",
      },
      {
        name: "RESTful APIs",
        shortLabel: "API",
        color: "currentColor",
      },
    ],
  },

  {
    title: "Database & ORM",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
      name: "Supabase",
      icon: SiSupabase,
      color: "#3FCF8E",
    },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        name: "Drizzle ORM",
        icon: SiDrizzle,
        color: "#C5F74F",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "currentColor",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "Swagger",
        icon: SiSwagger,
        color: "#85EA2D",
      },
      {
        name: "Electron",
        icon: SiElectron,
        color: "#47848F",
      },
    ],
  },
];
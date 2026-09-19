import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "iac",
    number: "01",
    title: "Indonesia Activity Center",
    category: "Full-Stack Web Application",
    description:
      "A personal full-stack project inspired by a real-world entertainment and lifestyle business case covering Padel, Food, Wellness, and Events.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Drizzle",
    ],
    image: "/images/projects/iac/IAC.png",
    role: "Full-Stack Development",
    status: "In Development",
    github:
      "https://github.com/DepNielS/Indonesia-Activity-Center.git",
  },

  {
    slug: "water-meter",
    number: "02",
    title: "Water Meter Reading System",
    category: "Team Project",
    description:
      "A desktop-based system designed to streamline water meter reading workflows and organize customer, field officer, scheduling, and reading recap management.",
    technologies: [
      "React.js",
      "Electron",
      "Go",
      "PostgreSQL",
      "Docker",
    ],
    image: "/images/projects/water-meter/SIMO.png",
    role: "Frontend & Database",
  },

  {
    slug: "my-task-manager",
    number: "03",
    title: "My Task Manager",
    category: "Personal Web Project",
    description:
      "A personal project built to strengthen React fundamentals, state management, event handling, task CRUD, search, filtering, and client-side persistence.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Fundamentals",
      "LocalStorage",
    ],
    image: "/images/projects/task-manager/task-manager.png",
    role: "Personal Project",
    status: "Completed",
    github:
      "https://github.com/DepNielS/MyTaskManage_StateEvent.git",
  },
];
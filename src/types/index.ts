export type ProjectCategory =
  | "Full-Stack Web Application"
  | "Team Project"
  | "Personal Web Project";

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  role?: string;
  status?: string;
  github?: string;
  liveDemo?: string;
}
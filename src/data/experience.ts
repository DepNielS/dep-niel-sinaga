export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  type?: string;
  description: string;
  relevantSkills: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2023 — Aug 2023",
    title: "Android Developer",
    company: "CV Wijaya Lesmana Sejahtera",
    type: "Internship",
    description:
      "Contributed to an Android inventory management application, including RESTful API integration, testing, bug fixing, maintenance, and application deployment at the client site.",
    relevantSkills: [
      "API Integration",
      "Testing & Debugging",
      "Application Maintenance",
      "Client Deployment",
    ],
  },
  {
    period: "Jan 2021 — Present",
    title: "Self-Employed",
    company: "Terang Stationery",
    type: "Transferable Experience",
    description:
      "Built transferable experience through customer communication, administrative work, document processing, daily transactions, and inventory support.",
    relevantSkills: [
      "Customer Communication",
      "Administrative & Document Management",
      "Operational Support",
      "Inventory Support",
    ],
  },
];
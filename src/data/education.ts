export interface EducationItem {
  period: string;
  degree: string;
  field: string;
  institution: string;
  result?: string;
}

export const education: EducationItem[] = [
  {
    period: "2021 — 2026",
    degree: "Bachelor's Degree",
    field: "Informatics",
    institution: "Universitas Multi Data Palembang",
    result: "CGPA 3.54",
  },
];
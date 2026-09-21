import type { Metadata } from "next";

import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Selected work, personal experiments, and team projects contributed to by Dep` Niel Sinaga, a Junior Web Developer.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description:
      "Selected work, personal experiments, and team projects contributed to by Dep` Niel Sinaga, a Junior Web Developer.",
    url: "/projects",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `Projects — ${siteConfig.name}`,
    description:
      "Selected work, personal experiments, and team projects contributed to by Dep` Niel Sinaga, a Junior Web Developer.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
import type { Metadata } from "next";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import FeaturedCaseStudy from "@/src/components/projects/FeaturedCaseStudy";
import ProjectArchive from "@/src/components/projects/ProjectArchive";
import ProjectsHeader from "@/src/components/projects/ProjectsHeader";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProjectsHeader />
        <FeaturedCaseStudy />
        <ProjectArchive />
      </main>

      <Footer />
    </>
  );
}
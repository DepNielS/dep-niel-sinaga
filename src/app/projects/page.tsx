import Footer from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import ProjectsHeader from "@/src/components/projects/ProjectsHeader";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProjectsHeader />
      </main>

      <Footer />
    </>
  );
}
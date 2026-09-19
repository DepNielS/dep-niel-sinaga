import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { TechStack } from "../components/home/TechStack";
import  Skills  from "../components/home/Skills";
import { About } from "../components/home/About";
import ExperienceEducation from "../components/home/ExperienceEducation";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import { FeaturedProjects } from "../components/home/FeaturedProjects";


export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <div className="background-glow" />

      <Navbar />
      <Hero />
      <Stats />
      <TechStack />
      <FeaturedProjects />
      <About />
      <Skills />
      <ExperienceEducation />
      <Contact />
      
    </main>

    <Footer />
    </>
  );
}
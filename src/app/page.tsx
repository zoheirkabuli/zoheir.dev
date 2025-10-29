import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";
import Projects from "@/components/projects/projects";
import {
  heroData,
  aboutData,
  skillsData,
  experienceData,
  contactData,
  projectsData,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero data={heroData} />
      <About data={aboutData} />
      <Skills data={skillsData} />
      <Experience data={experienceData} />
      <Projects data={projectsData} />
      <Contact data={contactData} />
    </>
  );
}

import React from "react";
import Hero from "../components/Hero/Hero";
// import ProjectSection from "../components/ProjectsSection/ProjectSection";
import SocialSection from "../components/SocialSection/SocialSection";
import ContactSection from "../components/ContactSection/ContactSection";
// import SkillsSection from "../components/SkillsSection/SkillsSection";


export default function Home() {
  return (
    <div>
      
      <Hero />
      {/* <ProjectSection /> */}
      {/* <SkillsSection /> */}
      <ContactSection />
      <SocialSection />
      
    </div>
  );
};



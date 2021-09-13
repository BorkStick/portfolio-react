import React from "react";
import Nav from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import SocialSection from "../components/SocialSection/SocialSection";
import ContactSection from "../components/ContactSection/ContactSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Home;

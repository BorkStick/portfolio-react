import React from 'react'
import Nav from './Header/Header'
import Hero from './Hero/Hero'
import ProjectSection from './ProjectsSection/ProjectSection'
import SocialSection from './SocialSection/SocialSection'
import ContactSection from './ContactSection/ContactSection'
import SkillsSection from './SkillsSection/SkillsSection'
import Footer from './Footer/Footer'



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
    )
}

export default Home

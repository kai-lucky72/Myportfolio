import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


const Home = () => {
  // Function to scroll to a specific section
  const scrollToSection = (id: string) => {
    console.log("Scrolling to section:", id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const yOffset = -navbarHeight;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with id ${id} not found`);
      }
    }, 100); // Small delay to ensure DOM is ready
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProjectsSection scrollToSection={scrollToSection} />
      <SkillsSection />
      <AboutSection scrollToSection={scrollToSection} />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;

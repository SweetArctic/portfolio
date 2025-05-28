'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import HomeSection from '@/components/HomeSection/HomeSection';
import WorksSection from '@/components/WorkSection/WorkSection';
import SkillsSection from '@/components/SkillsSection/skills';
import SkillsResponsive from '@/components/SkillsSection/SkillsResponsive';
import ContactSection from '@/components/ContactSection/ContacSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'skills', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-beige">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomeSection />
      <WorksSection />
      
      <section id="skills">
        {/* Escritorio */}
        <div className="hidden lg:block">
          <SkillsSection />
        </div>
        {/* Móvil */}
        <div className="block lg:hidden">
          <SkillsResponsive />
        </div>
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

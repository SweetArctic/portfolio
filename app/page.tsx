'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Skills from '@/components/skills';

const skills = [
  { name: 'React', description: 'Building modern user interfaces with React and its ecosystem' },
  { name: 'Next.js', description: 'Creating fast, SEO-friendly web applications' },
  { name: 'TypeScript', description: 'Writing type-safe, scalable JavaScript code' },
  { name: 'Node.js', description: 'Developing server-side applications and APIs' },
  { name: 'Tailwind CSS', description: 'Crafting beautiful, responsive designs' },
  { name: 'GraphQL', description: 'Building flexible and efficient APIs' },
  { name: 'PostgreSQL', description: 'Managing relational databases at scale' },
  { name: 'AWS', description: 'Cloud infrastructure and deployment' },
  { name: 'Docker', description: 'Containerization and deployment automation' },
  { name: 'Git', description: 'Version control and collaboration' },
  { name: 'Python', description: 'Data processing and automation' },
  { name: 'Java', description: 'Enterprise application development' },
  { name: 'MongoDB', description: 'NoSQL database management' },
  { name: 'Redis', description: 'In-memory data storage and caching' },
  { name: 'REST APIs', description: 'Building RESTful web services' }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const wheelElement = wheelRef.current;
    if (!wheelElement) return;

    const handleWheelScroll = () => {
      const scrollPercentage = wheelElement.scrollTop / (wheelElement.scrollHeight - wheelElement.clientHeight);
      setScrollPosition(scrollPercentage * 360);
      
      const itemHeight = wheelElement.scrollHeight / skills.length;
      const currentIndex = Math.round(wheelElement.scrollTop / itemHeight);
      setActiveSkillIndex(Math.min(currentIndex, skills.length - 1));
    };

    wheelElement.addEventListener('scroll', handleWheelScroll);
    return () => wheelElement.removeEventListener('scroll', handleWheelScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-beige">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-navy/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-white font-bold">Portfolio</span>
            <div className="flex space-x-4">
              {['home', 'works', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-skyblue
                    ${activeSection === section ? 'text-skyblue' : 'text-white'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <a
                href="/placeholder-cv.pdf"
                download
                className="bg-teal text-white px-4 py-1 rounded-full text-sm hover:bg-teal/90 transition-colors"
              >
                <Download className="w-4 h-4 inline-block mr-1" />
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold text-navy mb-4">
            Hi, I'm <span className="text-teal">John Doe</span>
          </h1>
          <p className="text-2xl text-navy/80 mb-8">Web Developer & Designer</p>
          <p className="text-lg text-navy/70 max-w-2xl mb-8">
            Passionate about creating beautiful, functional, and user-friendly websites.
            With expertise in modern web technologies and a keen eye for design.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="lg" className="bg-navy text-white hover:bg-navy/90">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-teal text-white hover:bg-teal/90">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-beige rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-skyblue"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Project {item}</h3>
                  <p className="text-navy/70 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <Button variant="outline" className="w-full bg-teal text-white hover:bg-teal/90">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Area para la rueda de skills */}

            <section id='skills'>
              <Skills />
            </section>

      <section id="contact" className="py-20 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/80 mb-8">
                Have a project in mind? Let's work together to create something amazing.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
                ></textarea>
              </div>
              <Button className="w-full bg-teal text-white hover:bg-teal/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
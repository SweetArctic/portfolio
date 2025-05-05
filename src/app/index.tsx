'use client';

import React, { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowDown, Code, Database, Palette, ExternalLink, ChevronRight, Instagram, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    home: false,
    works: false,
    skills: false,
    contact: false,
  });
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ["home", "works", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            
            if (!isVisible[section as keyof typeof isVisible]) {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    setTimeout(() => {
      setAnimationTriggered(true);
    }, 500);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInputFocus = (name: string) => {
    setFormFocus(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleInputBlur = (name: string) => {
    setFormFocus(prev => ({
      ...prev,
      [name]: false
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("¡Mensaje enviado correctamente! Me comunicaré contigo pronto.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <span className="flex flex-col min-h-screen scroll-smooth">
      {/* Header */}
      <span className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 backdrop-blur-md transition-all duration-300 ${scrollY > 50 ? "bg-dark-blue/95 shadow-lg" : "bg-dark-blue"}`}>
        <span className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-portfolio-white text-xl font-bold flex items-center">
            <span className="w-8 h-8 rounded-full bg-medium-blue/70 flex items-center justify-center mr-2">
              <Code size={16} />
            </span>
            Portfolio
          </span>
          
          <span className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "works", label: "Works" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer text-portfolio-white link-underline pb-1 transition-all ${
                  activeSection === item.id ? "font-bold" : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
            ))}
          </span>
          
          <span className="flex items-center">
            <span 
              className="bg-medium-blue text-portfolio-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-medium-blue/80 transition-all cursor-pointer hover:shadow-lg hover:translate-y-[-2px]"
            >
              <Download size={16} />
              <span className="hidden md:inline">Download CV</span>
            </span>
          </span>
        </span>
      </span>

      {/* Home Section with improved visuals */}
      <span id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background decoration */}
        <span className="absolute inset-0 bg-gradient-to-b from-beige to-light-blue/30 -z-10"></span>
        
        {/* Animated circles */}
        <span className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-light-blue/30 -z-5 ${animationTriggered ? 'animate-float' : ''}`}></span>
        <span className={`absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-medium-blue/10 -z-5 ${animationTriggered ? 'animate-float delay-300' : ''}`}></span>
        <span className={`absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-beige/80 -z-5 ${animationTriggered ? 'animate-spin-slow' : ''}`}></span>
        
        <span className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <span className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <span className={`opacity-0 ${isVisible.home ? 'animate-fade-up' : ''}`}>
              <span className="text-medium-blue text-xl md:text-2xl font-medium relative inline-block">
                Hi, I'm Juan Fernando
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-medium-blue/30 rounded-full"></span>
              </span>
            </span>
            
            <span className={`mt-3 opacity-0 ${isVisible.home ? 'animate-fade-up delay-100' : ''}`}>
              <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-dark-blue to-medium-blue text-gradient">
                Web Developer & Designer
              </span>
            </span>
            
            <span className={`mt-8 max-w-xl opacity-0 ${isVisible.home ? 'animate-fade-up delay-200' : ''}`}>
              <span className="text-lg text-dark-blue/80">
                I am a developer passionate about front-end programming and database management. 
                I like to listen to music while I program and learn programming things that will help me develop.
              </span>
            </span>
            
            <span className={`mt-8 opacity-0 ${isVisible.home ? 'animate-fade-up delay-250' : ''}`}>
              <span className="flex flex-wrap gap-3">
                <span className="bg-light-blue/50 text-dark-blue px-4 py-2 rounded-full flex items-center gap-2">
                  <Code size={16} />
                  <span>React</span>
                </span>
                <span className="bg-light-blue/50 text-dark-blue px-4 py-2 rounded-full flex items-center gap-2">
                  <Palette size={16} />
                  <span>UI/UX</span>
                </span>
                <span className="bg-light-blue/50 text-dark-blue px-4 py-2 rounded-full flex items-center gap-2">
                  <Database size={16} />
                  <span>SQL</span>
                </span>
              </span>
            </span>
            
            <span className={`mt-10 flex gap-4 opacity-0 ${isVisible.home ? 'animate-fade-up delay-300' : ''}`}>
              <span className="bg-dark-blue hover:bg-dark-blue/90 text-portfolio-white px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:translate-y-[-5px] hover:shadow-xl">
                <Github size={20} />
                <span>GitHub</span>
              </span>
              <span className="bg-medium-blue hover:bg-medium-blue/90 text-portfolio-white px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:translate-y-[-5px] hover:shadow-xl">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </span>
            </span>
            
            <span className={`mt-16 animate-bounce opacity-0 ${isVisible.home ? 'animate-fade-up delay-500' : ''}`}>
              <span 
                onClick={() => scrollToSection('works')} 
                className="cursor-pointer text-medium-blue hover:text-dark-blue transition-colors group"
              >
                <span className="flex flex-col items-center">
                  <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform">Discover my work</span>
                  <ArrowDown size={28} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </span>
            </span>
          </span>
          
          {/* Right content - profile image */}
          <span className={`mt-12 md:mt-0 md:w-2/5 flex justify-center opacity-0 ${isVisible.home ? 'animate-scale-in delay-400' : ''}`}>
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-radial from-light-blue/50 to-transparent rounded-full -z-10 animate-pulse"></span>
              <span className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Web Developer" 
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="absolute -bottom-4 -right-4 bg-dark-blue text-portfolio-white p-4 rounded-full shadow-lg animate-float">
                <Code size={24} />
              </span>
            </span>
          </span>
        </span>
      </span>

      {/* Works Section */}
      <span id="works" className="min-h-screen py-24 bg-portfolio-white">
        <span className="container mx-auto px-6 md:px-12">
          <span className="text-center mb-16">
            <span className="relative inline-block">
              <span className={`absolute -z-10 w-20 h-20 rounded-full bg-light-blue left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isVisible.works ? "animate-spin-slow" : ""}`}></span>
              <span className={`text-4xl md:text-5xl font-bold text-dark-blue opacity-0 ${isVisible.works ? "animate-scale-in" : ""}`}>
                Works
              </span>
            </span>
          </span>
          
          <span className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <span className={`opacity-0 order-2 md:order-1 ${isVisible.works ? "animate-scale-in delay-100" : ""}`}>
              <img src="/imagen1.png" alt="Programming" className="rounded-lg shadow-xl w-full h-auto" />
            </span>
            
            <span className="order-1 md:order-2">
              <span className="space-y-8">
                {[
                  { 
                    id: 1, 
                    title: "Cambridge web page", 
                    desc: "A website developed for the Cambridge Language Academy of Pasto" 
                  },
                  { 
                    id: 2, 
                    title: "Master Coffee web page", 
                    desc: "The Master Coffee 2023 contest page" 
                  },
                  { 
                    id: 3, 
                    title: "Web Seventh Bank personal Project", 
                    desc: "A personal project created in java whit SQL database and frontend using Maven" 
                  }
                ].map((work, index) => (
                  <span 
                    key={work.id} 
                    className={`block bg-beige p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px] cursor-pointer opacity-0 ${
                      isVisible.works ? `animate-fade-up delay-${(index + 2) * 100}` : ""
                    }`}
                  >
                    <span className="flex justify-between items-start">
                      <span>
                        <span className="text-xl font-semibold text-dark-blue">
                          Work {work.id} — {work.title}
                        </span>
                        <span className="block mt-2 text-medium-blue">
                          {work.desc}
                        </span>
                      </span>
                      <span className="bg-medium-blue text-portfolio-white p-2 rounded-full flex items-center justify-center">
                        <ExternalLink size={18} />
                      </span>
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </span>
        </span>
      </span>

      {/* Skills Section */}
      <span id="skills" className="py-24 bg-light-blue">
        <span className="container mx-auto px-6 md:px-12">
          <span className="text-center mb-16">
            <span className={`text-4xl md:text-5xl font-bold text-dark-blue opacity-0 ${isVisible.skills ? "animate-scale-in" : ""}`}>
              Skills
            </span>
          </span>
          
          <span className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Front-end Development", level: 90 },
              { name: "Back-end Development", level: 75 },
              { name: "UI/UX Design", level: 85 },
              { name: "Database Management", level: 80 },
              { name: "Responsive Design", level: 95 },
              { name: "API Integration", level: 85 }
            ].map((skill, index) => (
              <span 
                key={skill.name}
                className={`bg-portfolio-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl opacity-0 ${
                  isVisible.skills ? `animate-fade-up delay-${(index + 1) * 100}` : ""
                }`}
              >
                <span className="text-xl font-semibold text-dark-blue">{skill.name}</span>
                <span className="w-full h-3 bg-beige rounded-full mt-4 block">
                  <span 
                    className="h-full bg-medium-blue rounded-full block transition-all duration-1000" 
                    style={{
                      width: isVisible.skills ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease'
                    }}
                  ></span>
                </span>
                <span className="text-right block mt-1 text-medium-blue">{skill.level}%</span>
              </span>
            ))}
          </span>
        </span>
      </span>

      {/* Contact Section - Enhanced with better animations and interactivity */}
      <span id="contact" className="min-h-screen py-24 bg-beige">
        <span className="container mx-auto px-6 md:px-12">
          <span className="text-center mb-16">
            <span className={`text-4xl md:text-5xl font-bold text-dark-blue opacity-0 ${isVisible.contact ? "animate-scale-in" : ""}`}>
              Contactame
            </span>
            <span className={`block max-w-xl mx-auto mt-4 text-medium-blue opacity-0 ${isVisible.contact ? "animate-fade-up delay-100" : ""}`}>
              Have a project in mind? Let's work together to create something amazing.
            </span>
          </span>
          
          <span className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <span className={`opacity-0 ${isVisible.contact ? "animate-fade-up delay-200" : ""}`}>
              <span className="bg-portfolio-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center mb-6 text-medium-blue hover:text-dark-blue transition-colors">
                  <Mail className="mr-3 animate-bounce" size={24} />
                  <span className="font-medium">juanfer46934@gmail.com</span>
                </span>
                
                <span className="flex gap-4 mb-8">
                  <span className="bg-dark-blue hover:bg-dark-blue/90 text-portfolio-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:translate-y-[-5px] hover:shadow-xl">
                    <Github size={18} />
                    <span>GitHub</span>
                  </span>
                  <span className="bg-medium-blue hover:bg-medium-blue/90 text-portfolio-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:translate-y-[-5px] hover:shadow-xl">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </span>
                </span>
                
                <span className="relative overflow-hidden rounded-lg group">
                  <span className="absolute inset-0 bg-gradient-to-r from-medium-blue/30 to-light-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Programming" 
                    className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-4 left-4 bg-dark-blue/80 text-portfolio-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 z-20">
                    Let's build something together!
                  </span>
                </span>
              </span>
            </span>
            
            <span className={`opacity-0 ${isVisible.contact ? "animate-fade-up delay-300" : ""}`}>
              <span className="bg-portfolio-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <span className="relative">
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('name')}
                      onBlur={() => handleInputBlur('name')}
                      className={`w-full px-4 py-3 rounded-lg bg-beige border-2 transition-all duration-300 outline-none ${
                        formFocus.name ? 'border-medium-blue shadow-md shadow-medium-blue/20' : 'border-beige'
                      } ${formData.name ? 'pt-6' : ''}`}
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formFocus.name || formData.name 
                          ? 'text-xs text-medium-blue top-1' 
                          : 'text-base text-medium-blue/70 top-3'
                      }`}
                    >
                      Nombre
                    </label>
                  </span>
                  
                  <span className="relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('email')}
                      onBlur={() => handleInputBlur('email')}
                      className={`w-full px-4 py-3 rounded-lg bg-beige border-2 transition-all duration-300 outline-none ${
                        formFocus.email ? 'border-medium-blue shadow-md shadow-medium-blue/20' : 'border-beige'
                      } ${formData.email ? 'pt-6' : ''}`}
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formFocus.email || formData.email 
                          ? 'text-xs text-medium-blue top-1' 
                          : 'text-base text-medium-blue/70 top-3'
                      }`}
                    >
                      Correo
                    </label>
                  </span>
                  
                  <span className="relative">
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('message')}
                      onBlur={() => handleInputBlur('message')}
                      className={`w-full px-4 py-3 rounded-lg bg-beige border-2 resize-none transition-all duration-300 outline-none min-h-[150px] ${
                        formFocus.message ? 'border-medium-blue shadow-md shadow-medium-blue/20' : 'border-beige'
                      } ${formData.message ? 'pt-6' : ''}`}
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formFocus.message || formData.message 
                          ? 'text-xs text-medium-blue top-1' 
                          : 'text-base text-medium-blue/70 top-3'
                      }`}
                    >
                      Mensaje
                    </label>
                  </span>
                  
                  <span className="block">
                    <button 
                      type="submit" 
                      className="w-full bg-medium-blue hover:bg-medium-blue/90 text-portfolio-white py-3 px-6 rounded-lg transition-all hover:shadow-lg group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-dark-blue to-medium-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </span>
                </form>
              </span>
            </span>
          </span>
        </span>
      </span>

      {/* Footer - Enhanced with social media icons */}
      <span className="bg-dark-blue text-portfolio-white py-8">
        <span className="container mx-auto px-6 md:px-12">
          <span className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-lg mb-4 md:mb-0">Portfolio - Juan Fernando</span>
            
            <span className="flex space-x-4 items-center">
              <span className="text-sm text-portfolio-white/70 mr-2">Connect with me:</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-dark-blue/50 p-2 rounded-full hover:bg-dark-blue/80 transition-all hover:scale-110 hover:rotate-6"
                aria-label="GitHub"
              >
                <Github size={20} className="text-portfolio-white hover:text-light-blue transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-dark-blue/50 p-2 rounded-full hover:bg-dark-blue/80 transition-all hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-portfolio-white hover:text-light-blue transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-dark-blue/50 p-2 rounded-full hover:bg-dark-blue/80 transition-all hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-portfolio-white hover:text-light-blue transition-colors" />
              </a>
              <a 
                href="mailto:juanfer46934@gmail.com" 
                className="bg-dark-blue/50 p-2 rounded-full hover:bg-dark-blue/80 transition-all hover:scale-110 hover:rotate-6"
                aria-label="Email"
              >
                <Mail size={20} className="text-portfolio-white hover:text-light-blue transition-colors" />
              </a>
            </span>
          </span>
          
          <span className="block mt-4 pt-4 border-t border-portfolio-white/20 text-center">
            <span className="text-sm text-portfolio-white/70">&copy; {new Date().getFullYear()} All rights reserved</span>
            <span className="block mt-1 text-xs text-portfolio-white/50 hover:text-portfolio-white/70 transition-colors cursor-pointer">
              Designed with <span className="text-red-400 animate-pulse inline-block">&hearts;</span> by Juan Fernando
            </span>
          </span>
        </span>
      </span>
    </span>
  );
};

export default Index;
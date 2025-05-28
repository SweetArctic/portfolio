'use client';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-beige w-[100%]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-4">
            Hi, I'm <span className="text-teal">Juan Fernando</span>
          </h1>
          <p className="text-xl sm:text-2xl text-navy/80 mb-8">Software Developer Student</p>
          <p className="text-base sm:text-lg text-navy/70 max-w-xl mx-auto lg:mx-0 mb-8">
            Passionate about programming and technology. I focus on developing modern solutions with a combination of a creative frontend and a robust backend. I work with technologies like React, Django, AWS, and scalable databases. I'm always looking to optimize workflow and user experience.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
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

        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <img
              src="/img/profile.jpg"
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105 shadow-xl z-0"
            />
            <img
              src="/img/background_profile.jpeg"
              alt="Profile"
              className="absolute bottom-[100px] right-[100px] sm:bottom-[110px] sm:right-[110px] md:bottom-[120px] md:right-[120px] lg:bottom-[140px] lg:right-[140px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-110 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

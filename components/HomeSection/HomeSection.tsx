'use client';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-beige">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-navy mb-4">
          Hi, I'm <span className="text-teal">John Doe</span>
        </h1>
        <p className="text-2xl text-navy/80 mb-8">Web Developer & Designer</p>
        <p className="text-lg text-navy/70 max-w-2xl mb-8">
          Passionate about creating beautiful, functional, and user-friendly websites. With expertise in modern web technologies and a keen eye for design.
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
  );
}

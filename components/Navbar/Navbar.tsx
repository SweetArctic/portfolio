'use client';
import { Download } from 'lucide-react';

const sections = ['home', 'works', 'experience', 'skills', 'contact'];

export default function Navbar({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (id: string) => void }) {
  return (
    <nav className="fixed top-0 w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-bold text-lg">Portfolio</span>
          <div className="flex space-x-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-skyblue ${
                  activeSection === section ? 'text-skyblue' : 'text-white'
                }`}
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
  );
}

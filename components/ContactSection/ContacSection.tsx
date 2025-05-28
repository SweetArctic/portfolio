'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
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
            <input type="text" placeholder="Your Name" className="input-style" />
            <input type="email" placeholder="Your Email" className="input-style" />
            <textarea placeholder="Your Message" rows={4} className="input-style"></textarea>
            <Button className="w-full bg-teal text-white hover:bg-teal/90">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const email = 'juanfer46934@gmail.com';
  const formRef = useRef<HTMLFormElement>(null);

   const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      'service_tto9upo',
      'template_pcpttdx',
      formRef.current,
      '7TIMoGe-hrbB1jVwW'
    )
    .then(() => alert('Mensaje enviado'))
    .catch(() => alert('Error al enviar'));
  };

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
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
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

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" className="input-style" required />
          <input type="email" name="email" placeholder="Your Email" className="input-style" required />
          <input type="text" name="title" placeholder="Subject" className="input-style" required />
          <textarea name="message" placeholder="Your Message" rows={4} className="input-style" required />
          <Button type="submit" className="w-full bg-teal text-white hover:bg-teal/90">
            Send Message
          </Button>
        </form>
        </div>
      </div>
    </section>
  );
}

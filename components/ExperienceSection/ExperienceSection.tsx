'use client';
import { Users, GraduationCap, Briefcase, Code2, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-navy mb-6">My Experience</h2>
        <p className="text-lg text-navy/80 mb-12">
          Throughout my journey as a <strong>student and developer</strong>, I've grown immensely thanks to the collaboration, support, and inspiration of my classmates and teammates.
        </p>

        <div className="grid gap-10 md:grid-cols-2 text-left">
          {/* Academic Experience */}
          <div className="bg-beige rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-teal w-8 h-8" />
              <h3 className="text-2xl font-semibold text-navy">Academic Growth</h3>
            </div>
            <p className="text-navy/70">
              I've genuinely enjoyed <strong>attending classes</strong>, diving into new technologies, and learning side by side with amazing classmates. Together, we've faced challenges, <strong>resolved conflicts</strong>, and delivered remarkable projects, all while pushing each other to become better developers.
            </p>
          </div>

          {/* Team Projects */}
          <div className="bg-beige rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-teal w-8 h-8" />
              <h3 className="text-2xl font-semibold text-navy">Team Collaboration</h3>
            </div>
            <p className="text-navy/70">
              Working on team-based projects has taught me the value of <strong>communication, flexibility, and respect for different ideas</strong>. Under pressure, we’ve found ways to innovate and stay on track—always focused on learning and delivering meaningful solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="bg-beige rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Code2 className="text-teal w-8 h-8" />
              <h3 className="text-2xl font-semibold text-navy">Skill Development</h3>
            </div>
            <p className="text-navy/70">
              Thanks to shared experiences and guidance from peers, I've improved my skills in <strong>frontend, backend, databases, and cloud</strong> technologies. Every collaboration has left a mark and fueled my passion for development.
            </p>
          </div>

          {/* Freelance/Professional Experience */}
          <div className="bg-beige rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-teal w-8 h-8" />
              <h3 className="text-2xl font-semibold text-navy">Professional Experience</h3>
            </div>
            <p className="text-navy/70">
              I've had the chance to work on <strong>small freelance projects</strong> for respected institutions such as the <strong>Chamber of Commerce of Pasto</strong> and <strong>Cambridge Language Academy</strong>. These experiences helped me apply my skills in real-world scenarios while building trust and delivering valuable results.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Sparkles className="w-10 h-10 text-teal mx-auto mb-2" />
          <p className="text-navy font-medium">
            I'm proud of the path I've taken and excited for the opportunities ahead—always ready to keep learning, building, and evolving.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';
import { Button } from '@/components/ui/button';

export default function WorksSection() {
  return (
    <section id="works" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-navy mb-12">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-beige rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-skyblue"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">Project {item}</h3>
                <p className="text-navy/70 mb-4">A brief description of the project and the technologies used.</p>
                <Button variant="outline" className="w-full bg-teal text-white hover:bg-teal/90">View Project</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

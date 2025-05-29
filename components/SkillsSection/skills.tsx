'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiGraphql, SiPostgresql, SiDocker, SiTypescript
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    description: "Used for building dynamic interfaces",
    icon: SiJavascript,
    image: "/img/1.webp",
    caption: "Flexible and powerful frontend foundation"
  },
  {
    name: "React",
    description: "Frontend library for building UI",
    icon: SiReact,
    image: "/img/2.webp",
    caption: "Reusable components for dynamic apps"
  },
  {
    name: "Next.js",
    description: "React framework for SSR and SSG",
    icon: SiNextdotjs,
    image: "/img/5.png",
    caption: "Built-in routing and server rendering"
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    icon: SiNodedotjs,
    image: "/img/6.png",
    caption: "Event-driven and scalable backend logic"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: SiTailwindcss,
    image: "/img/7.png",
    caption: "Rapid styling with utility classes"
  },
  {
    name: "GraphQL",
    description: "API query language and runtime",
    icon: SiGraphql,
    image: "/img/3.png",
    caption: "Flexible data querying and fetching"
  },
  {
    name: "PostgreSQL",
    description: "Relational database system",
    icon: SiPostgresql,
    image: "/img/8.png",
    caption: "Reliable and powerful SQL database"
  },
  {
    name: "Docker",
    description: "Containerization platform",
    icon: SiDocker,
    image: "/img/d.png",
    caption: "Portable, consistent development environments"
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    icon: SiTypescript,
    image: "/img/9.png",
    caption: "Robust type safety for modern JavaScript"
  }
];

export default function SkillsWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wheelReady = useRef(true);

  const radius = 240;
  const centerX = 300;
  const centerY = 300;

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!wheelReady.current) return;
      wheelReady.current = false;

      setImageVisible(false);

      setTimeout(() => {
        setActiveIndex(prev => {
          const next = prev + (e.deltaY > 0 ? 1 : -1);
          return (next + skills.length) % skills.length;
        });
      }, 100);

      setTimeout(() => {
        setImageVisible(true);
        wheelReady.current = true;
      }, 600);
    };

    if (container) {
      container.focus();
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    skills.forEach(skill => {
      const img = new window.Image();
      img.src = skill.image;
    });
  }, []);

  return (
    <section className="w-full h-screen flex overflow-hidden bg-white">
      <div className="w-1/2 flex flex-col items-center justify-center text-center p-10 bg-skyblue">
        <Image
          src={skills[activeIndex].image}
          alt={skills[activeIndex].name}
          width={500}
          height={500}
          priority
          className={`w-[500px] h-[500px] object-cover rounded-xl mb-6 transition-opacity duration-500 ${
            imageVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <p className="text-xl text-navy font-semibold">{skills[activeIndex].caption}</p>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div
          ref={containerRef}
          className="w-[600px] h-[600px] relative outline-none"
          tabIndex={0}
        >
          {skills.map((skill, index) => {
            const angle = (index - activeIndex) * (Math.PI / (skills.length / 2));
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            const isActive = index === activeIndex;

            return (
              <div
                key={skill.name}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  willChange: 'transform',
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  className={`rounded-xl shadow-md transition-all duration-300 text-center ${
                    isActive
                      ? "bg-teal text-white w-[240px] p-6 scale-110"
                      : "bg-white text-navy w-[140px] p-3 scale-90"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <skill.icon className="text-2xl" />
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <p className={`text-sm mt-2 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

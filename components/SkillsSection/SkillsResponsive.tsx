'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiGraphql, SiPostgresql, SiDocker, SiTypescript
} from 'react-icons/si';

const skills = [
  {
    name: "JavaScript",
    description: "Used for building dynamic interfaces",
    icon: SiJavascript,
    image: "/img/1.webp"
  },
  {
    name: "React",
    description: "Frontend library for building UI",
    icon: SiReact,
    image: "/img/2.webp"
  },
  {
    name: "Next.js",
    description: "React framework for SSR and SSG",
    icon: SiNextdotjs,
    image: "/img/1.webp"
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    icon: SiNodedotjs,
    image: "/img/2.webp"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: SiTailwindcss,
    image: "/img/1.webp"
  },
  {
    name: "GraphQL",
    description: "API query language and runtime",
    icon: SiGraphql,
    image: "/img/2.webp"
  },
  {
    name: "PostgreSQL",
    description: "Relational database system",
    icon: SiPostgresql,
    image: "/img/1.webp"
  },
  {
    name: "Docker",
    description: "Containerization platform",
    icon: SiDocker,
    image: "/img/2.webp"
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    icon: SiTypescript,
    image: "/img/1.webp"
  }
];

export default function SkillsResponsive() {
  const [active, setActive] = useState(0);
  const Icon = skills[active].icon;

  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center gap-6 lg:hidden">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">{skills[active].name}</h2>
        <p className="text-navy/80 mb-6">{skills[active].description}</p>
        <div className="flex justify-center">
          <Icon className="text-5xl text-teal mb-4" />
        </div>
        <Image
          src={skills[active].image}
          alt={skills[active].name}
          width={300}
          height={300}
          priority
          className="rounded-xl shadow-lg object-cover mx-auto aspect-square"
        />
      </div>

      <div className="flex overflow-x-auto gap-4 py-4 w-full scrollbar-hide">
        {skills.map((skill, i) => (
          <button
            key={skill.name}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 px-4 py-2 border rounded-full transition-colors ${
              active === i
                ? "bg-teal text-white border-teal"
                : "bg-white text-navy border-navy hover:bg-navy/10"
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import {
  Gamepad2, Code, Brain, Smartphone, Book, Music, Guitar,
  Cpu, Headphones, Plane, Laugh, TimerReset
} from 'lucide-react';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

export default function AboutSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const timeline: TimelineItem[] = [
    {
      year: '2015',
      title: 'Love for Games',
      description: 'My journey began with video games. I got curious about how they worked behind the scenes and started exploring source code.',
      icon: <Gamepad2 className="text-teal w-6 h-6" />
    },
    {
      year: '2018',
      title: 'Game Development',
      description: 'Started experimenting with indie game development using platforms like Unity and Roblox Studio with JavaScript and Lua.',
      icon: <Code className="text-teal w-6 h-6" />
    },
    {
      year: '2020',
      title: 'First Steps in Programming',
      description: 'Learned Boo, C#, HTML, CSS, and especially JavaScript with its frameworks—my favorite language to this day.',
      icon: <Brain className="text-teal w-6 h-6" />
    },
    {
      year: '2021',
      title: 'Mobile Development',
      description: 'Built my first Android app using Kotlin and Android Studio—a simple ToDo app that taught me a lot.',
      icon: <Smartphone className="text-teal w-6 h-6" />
    },
    {
      year: '2022',
      title: 'Python & AI Exploration',
      description: 'Started learning Python and playing with AI tools like Claude, Bolt, ChatGPT and Cursor.',
      icon: <Book className="text-teal w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Java + Databases',
      description: 'Explored Java and built apps with MariaDB and PostgreSQL, practicing APIs with Postman and using Eclipse IDE.',
      icon: <Cpu className="text-teal w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Cloud & Backend',
      description: 'Dove into cloud technologies, backend development, and database deployments.',
      icon: <TimerReset className="text-teal w-6 h-6" />
    },
    {
      year: 'Now',
      title: 'On a Mission',
      description: 'Currently exploring AWS and Azure. Looking forward to mastering modern cloud and backend technologies.',
      icon: <Code className="text-teal w-6 h-6" />
    }
  ];

  const hobbies = [
    {
      icon: <Music className="w-6 h-6 text-teal" />,
      title: 'Music Lover',
      description: 'Learning to play guitar, know some piano. I listen to music every day—rock, indie, salsa and more.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-teal" />,
      title: 'Tech & PCs',
      description: 'Love building gaming setups and repairing PCs. Tinkering with hardware is one of my favorite hobbies.'
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-teal" />,
      title: 'Gaming (Single Player)',
      description: 'Big fan of casual and story-driven games. I avoid competitive gaming... because I’m way too competitive 😅.'
    },
    {
      icon: <Plane className="w-6 h-6 text-teal" />,
      title: 'Travel & Food',
      description: 'Not the most social person, but I enjoy discovering new places, eating good food, and having deep conversations.'
    },
    {
      icon: <Book className="w-6 h-6 text-teal" />,
      title: 'Reading & Writing',
      description: 'I enjoy reading and used to write short stories (never published). Words fuel my creativity.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-navy mb-12 text-center">About Me</h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-teal pl-6 space-y-12">
          {timeline.map((item, index) => {
            const isActive = index === selected;
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelected(isActive ? null : index)}
              >
                <div className="absolute -left-[42px] top-0 bg-white border-2 border-teal rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-teal transition-colors duration-200">
                  {item.year} — {item.title}
                </h3>
                <p
                  className={`text-navy/70 text-sm max-w-prose transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hobbies */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-navy mb-6 text-center">Outside of Code</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                <div className="mt-1">{hobby.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">{hobby.title}</h4>
                  <p className="text-navy/70 text-sm">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

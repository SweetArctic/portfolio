'use client';
import { Github, ExternalLink, CircleCheck, CircleAlert, CircleX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: 'SDK-Api for Spotify',
    description: 'API SDK creada con Spotify for Developers para consultar estadísticas desde una página estática.',
    image: '/works/spotify.png',
    github: 'https://github.com/SweetArctic/spotify-sdk-player.git',
    status: 'En desarrollo',
    openSource: true
  },
  {
    name: 'HealthSys2',
    description: 'Sistema de gestión de usuarios y citas médicas en una clínica. Java + Maven + MariaDB.',
    image: '/works/HealSys2.svg',
    github: 'https://github.com/SweetArctic/healthsys23.git',
    status: 'Completado',
    openSource: true
  },
  {
    name: 'Python IA Desk',
    description: 'Proyecto personal con inteligencia artificial para escritorio.',
    image: '/works/IAPython.svg',
    github: '',
    status: 'En desarrollo',
    openSource: false
  },
  {
    name: 'Seminario 2023',
    description: 'Desarrollo frontend de la página oficial del seminario académico 2023.',
    image: '/works/seminario.png',
    github: '',
    status: 'Dado de baja',
    openSource: false
  },
  {
    name: 'Cambridge Academy',
    description: 'Sitio web institucional para la academia Cambridge (Pasto).',
    image: '/works/Cambridge.png',
    github: 'https://www.cambridgeacademy.edu.co/',
    status: 'Completado',
    openSource: false
  },
  {
    name: 'MasterCoffee',
    description: 'Landing page para el concurso MasterCoffee 2023, organizado por Cámara de Comercio de Pasto.',
    image: '/works/MasterCoffee(2).jpeg',
    github: '',
    status: 'Dado de baja',
    openSource: false
  }
];

const getStatusIcon = (status: string) => {
  if (status === 'Completado') return <CircleCheck className="text-green-600" />;
  if (status === 'En desarrollo') return <CircleAlert className="text-yellow-500" />;
  return <CircleX className="text-red-600" />;
};

export default function WorksSection() {
  return (
    <section id="works" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-navy mb-12 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-beige rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{project.name}</h3>
                  <p className="text-navy/70 mb-4 text-sm">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    {getStatusIcon(project.status)}
                    <span>{project.status}</span>
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal hover:underline flex items-center gap-1"
                    >
                      {project.openSource ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      Ver
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

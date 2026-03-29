// src/components/Portfolio.jsx
import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import proj1Img from '../assets/img/Captura de tela 2025-06-01 175549.png';
import proj2Img from '../assets/img/Captura de tela 2025-06-01 235338.png';
import proj3Img from '../assets/img/img.png';

const projectsData = [
  {
    imageSrc: proj1Img,
    alt: 'Preview do projeto HouseTech',
    title: 'HouseTech',
    description:
      'Site institucional desenvolvido para apresentar serviços de suporte e manutenção de computadores, com foco em clareza, responsividade e conversão.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    aosDelay: '0',
    demoUrl: 'https://wilki205.github.io/HouseTech/',
    repoUrl: 'https://github.com/Wilki205/HouseTech',
  },
  {
    imageSrc: proj2Img,
    alt: 'Preview do projeto Meu E-book Store',
    title: 'Meu E-book Store',
    description:
      'Aplicação front-end para uma loja de e-books, com interface moderna, vídeo de fundo e navegação entre seções usando Vue.js e Tailwind CSS.',
    tags: ['Vue.js', 'Tailwind CSS'],
    aosDelay: '200',
    demoUrl: 'https://wilki205.github.io/meu-novo-ebookstore/',
    repoUrl: 'https://github.com/Wilki205/meu-novo-ebookstore',
  },
  {
    imageSrc: proj3Img,
    alt: 'Preview do projeto Painel de Gestão',
    title: 'Painel de Gestão',
    description:
      'Sistema web voltado à gestão pedagógica, centralizando acompanhamento de turmas, alunos, frequência e atividades em uma interface prática.',
    tags: ['Java', 'Spring Boot', 'Thymeleaf'],
    aosDelay: '400',
    demoUrl: null,
    repoUrl: 'https://github.com/Wilki205/controle-alunos',
  },
];

function Portfolio() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollToProject = (index) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const card = track.children[index];

    if (!card) return;

    setCurrent(index);

    track.scrollTo({
      left: card.offsetLeft,
      behavior: 'smooth',
    });
  };

  const goToPrevious = () => {
    if (current > 0) {
      scrollToProject(current - 1);
    }
  };

  const goToNext = () => {
    if (current < projectsData.length - 1) {
      scrollToProject(current + 1);
    } else {
      scrollToProject(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = current === projectsData.length - 1 ? 0 : current + 1;
      scrollToProject(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="portfolio-section" aria-label="Portfólio">
      <h3 className="section-title portfolio-title" data-aos="fade-up">
        Projetos em Destaque
      </h3>

      <p className="portfolio-description" data-aos="fade-up">
        Alguns dos projetos que desenvolvi com foco em interface, experiência do
        usuário e construção de aplicações funcionais.
      </p>

      <div className="carousel-container">
        <button
          className="carousel-btn prev"
          onClick={goToPrevious}
          disabled={current === 0}
          aria-label="Projeto anterior"
        >
          &#8249;
        </button>

        <div className="carousel-track" ref={trackRef}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              imageSrc={project.imageSrc}
              alt={project.alt}
              title={project.title}
              description={project.description}
              tags={project.tags}
              aosDelay={project.aosDelay}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={goToNext}
          aria-label="Próximo projeto"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
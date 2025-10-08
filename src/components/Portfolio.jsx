// src/components/Portfolio.jsx
import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import proj1Img from '../assets/img/Captura de tela 2025-06-01 175549.png';
import proj2Img from '../assets/img/Captura de tela 2025-06-01 235338.png';
import proj3Img from '../assets/img/img.png';

const projectsData = [
  {
    imageSrc: proj1Img,
    alt: "Projeto 1",
    title: "HouseTech",
    description: "Este é o site institucional da HouseTech, um projeto criado para apresentar os serviços de suporte e manutenção de computadores em Recife e região. O objetivo é oferecer aos clientes uma plataforma clara, profissional e de fácil acesso para solicitar orçamentos e conhecer nosso trabalho.",
    tags: ["HTML", "CSS", "JavaScript"],
    aosDelay: "0",
    demoUrl: "https://wilki205.github.io/HouseTech/",
    repoUrl: "https://github.com/Wilki205/HouseTech.git"
  },
  {
    imageSrc: proj2Img,
    alt: "Projeto 2",
    title: "Meu E-book Store",
    description: "Projeto de frontend para uma loja de e-books desenvolvido com Vue.js e estilizado com Tailwind CSS. A aplicação apresenta uma interface moderna com um vídeo de fundo dinâmico e navegação entre diferentes seções da loja.",
    tags: ["Vue.js", "Tailwind CSS"],
    aosDelay: "200",
    demoUrl: "https://wilki205.github.io/meu-novo-ebookstore/",
    repoUrl: "https://github.com/Wilki205/meu-novo-ebookstore.git"
  },
  {
    imageSrc: proj3Img,
    alt: "Projeto 3",
    title: "Painel de Gestão",
    description: "Painel de Gestão de Curso Um sistema web completo para gestão pedagógica, desenvolvido para tutores e analistas educacionais. A plataforma centraliza o acompanhamento de turmas, alunos, frequência, atividades e diários de aula em uma interface intuitiva e rica em informações.",
    tags: ["Java", "Springboot", "Thymeleaf"],
    aosDelay: "200",
    demoUrl: "#",
    repoUrl: "https://github.com/Wilki205/controle-alunos.git"
  }
];

function Portfolio() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = idx => {
    setCurrent(idx);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: idx * 670,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % projectsData.length;
      scrollTo(next);
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="portfolio-section" aria-label="Portfólio">
      <h3 className="section-title portfolio-title" data-aos="fade-up">Portfólio</h3>
      <div className="carousel-container">
        <button 
          className="carousel-btn prev" 
          onClick={() => scrollTo(Math.max(current - 1, 0))}
          disabled={current === 0}
        >&#8249;</button>
        <div className="carousel-track" ref={trackRef}>
          {projectsData.map((project, idx) => (
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
          onClick={() => scrollTo(Math.min(current + 1, projectsData.length - 1))}
          disabled={current === projectsData.length - 1}
        >&#8250;</button>
      </div>
    </section>
  );
}
export default Portfolio;
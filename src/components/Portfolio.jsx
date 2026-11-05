import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'SYNCRO',
    imageSrc: '/projects/Syncro.png',
    liveUrl: 'https://syncro.forged-apps.com/',
    liveLabel: 'Acessar projeto',
    type: 'Sistema digital de controle de ponto',
    description:
      'Sistema digital para gestão de ponto, controle de registros de frequência e relatórios operacionais.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    highlight:
      'Registro e controle digital de ponto com foco em integridade, rastreabilidade e simplicidade operacional.',
    status: 'Online',
  },
  {
    title: 'WFIGHT',
    imageSrc: '/projects/physiq-pro.png',
    liveUrl: 'https://physiq.forged-apps.com/',
    liveLabel: 'Acessar projeto',
    type: 'Plataforma de gestão de treinos e acompanhamento físico',
    description:
      'Plataforma para gestão de treinos, avaliações físicas e acompanhamento contínuo da evolução corporal.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    highlight:
      'Estruturação de rotinas de treino, métricas de evolução e acompanhamento físico detalhado.',
    status: 'Online',
  },
  {
    title: 'FORGED SENTINEL',
    imageSrc: '/projects/api-gestao.png',
    liveUrl: 'https://monitor.forged-apps.com/',
    liveLabel: 'Acessar painel',
    type: 'Aplicação desktop de monitoramento e automação',
    description:
      'Aplicação desktop desenvolvida para monitoramento de sistemas, supervisão de integridade e automação de rotinas.',
    stack: ['Python', 'Linux', 'Docker', 'APIs REST'],
    highlight:
      'Monitoramento contínuo de recursos e automação de fluxos operacionais com alta confiabilidade.',
    status: 'Online',
  },
  {
    title: 'GENT Analytics',
    type: 'Dashboard interativo para análise de dados',
    description:
      'Dashboard interativo para consolidação de dados, acompanhamento de indicadores e suporte à tomada de decisão.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQL'],
    highlight:
      'Visualização interativa de indicadores analíticos com dados consolidados e estruturados.',
    status: 'Em desenvolvimento',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section" aria-label="Portfólio">
      <h3 className="section-title portfolio-title" data-aos="fade-up">
        Projetos
      </h3>

      <p className="portfolio-description" data-aos="fade-up">
        Projetos desenvolvidos com foco em controle de ponto, saúde, monitoramento e análise de dados.
      </p>

      <div className="projects-grid" data-aos="fade-up">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

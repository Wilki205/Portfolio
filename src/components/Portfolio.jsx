import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Syncro',
    type: 'Plataforma de gestão educacional',
    description:
      'Plataforma para acompanhamento de turmas, alunos, entregas, frequência e indicadores de desempenho em tempo real.',
    stack: [
      'React',
      'Vue.js',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'Google Classroom API',
      'Apps Script',
    ],
    highlight:
      'Integra dados educacionais e transforma informações de entregas, presença e desempenho em indicadores visuais para tomada de decisão.',
    status: 'Em desenvolvimento',
  },
  {
    title: 'DentalCare',
    type: 'Sistema de gestão clínica',
    description:
      'Sistema para gerenciamento de pacientes, agenda, financeiro, autenticação e dashboard administrativo.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    highlight:
      'Aplicação full stack com autenticação, banco de dados relacional, rotas protegidas e painel administrativo.',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Portal Educacional',
    type: 'Portal web para ensino',
    description:
      'Portal próprio para gerenciar turmas, conteúdos, atividades, presença e participação dos alunos, com áreas separadas para professor e aluno.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Docker'],
    highlight:
      'Centraliza fluxos educacionais em uma plataforma própria, reduzindo dependência de ferramentas externas.',
    status: 'Em desenvolvimento',
  },
  {
    title: 'PhysiQ Pro',
    type: 'Plataforma de avaliação física',
    description:
      'Sistema para cadastro de alunos, avaliações físicas, evolução corporal, relatórios, agenda e dashboard para profissionais de educação física.',
    stack: ['React', 'Node.js', 'API própria', 'PostgreSQL', 'Prisma', 'Docker'],
    highlight:
      'Produto com foco em gestão fitness, relatórios visuais e acompanhamento de evolução dos alunos.',
    status: 'Em desenvolvimento',
  },
  {
    title: 'API de Gestão',
    type: 'Back-End / API REST',
    description:
      'API para autenticação, gestão de usuários, unidades, permissões e controle operacional.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Prisma', 'Docker'],
    highlight:
      'Back-end com autenticação, regras de acesso, endpoints organizados e estrutura preparada para integração com diferentes front-ends.',
    status: 'Em desenvolvimento',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section" aria-label="Portfólio">
      <h3 className="section-title portfolio-title" data-aos="fade-up">
        Projetos Reais e Atuais
      </h3>

      <p className="portfolio-description" data-aos="fade-up">
        Sistemas e plataformas com foco em gestão, educação, back-end, dados e
        automação de processos.
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

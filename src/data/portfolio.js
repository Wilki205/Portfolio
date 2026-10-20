/** @typedef {{ title: string, type: string, description: string, image: string, stack: string[], repository: string, focus: string }} Project */

export const social = {
  github: "https://github.com/Wilki205",
  linkedin: "https://www.linkedin.com/in/wilkisonb",
};

/** @type {Project[]} */
export const projects = [
  {
    title: "Portal Educacional",
    type: "Educação & tecnologia",
    description:
      "Uma interface dedicada à jornada de aprendizagem, com conteúdos, avisos, atividades e suporte em um só lugar.",
    image: "portal-educacional.webp",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repository: "https://github.com/Wilki205/talent-bloom-portal",
    focus:
      "Organização de conteúdo e navegação por componentes, aproximando desenvolvimento web e educação.",
  },
  {
    title: "PhysiQ Pro",
    type: "Saúde & bem-estar",
    description:
      "Aplicação web voltada à avaliação física e ao acompanhamento da evolução corporal, com apresentação dedicada aos profissionais da área.",
    image: "physiq-pro.webp",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repository: "https://github.com/Wilki205/shape-shift-pro-94",
    focus:
      "Interface componentizada para apresentar avaliações, relatórios e acompanhamento de alunos.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    symbol: "</>",
    description: "Interfaces e experiências",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Backend",
    symbol: "{ }",
    description: "Lógica e integrações",
    items: ["Node.js", "Express", "APIs REST", "Prisma"],
  },
  {
    title: "Banco de dados",
    symbol: "▤",
    description: "Dados bem estruturados",
    items: ["PostgreSQL", "SQL", "Modelagem de dados"],
  },
  {
    title: "Cloud & infraestrutura",
    symbol: "⌘",
    description: "Da aplicação à operação",
    items: ["AWS", "Docker", "Git", "Automação"],
  },
];

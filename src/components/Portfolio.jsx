import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { projects, social } from "../data/portfolio";
export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="section-title-row">
        <SectionHeading
          number="03"
          label="Projetos selecionados"
          title="Ideias que viraram código."
        >
          Uma seleção de projetos que conectam desenvolvimento web, educação e
          saúde.
        </SectionHeading>
        <a
          className="text-link"
          href={`${social.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais no GitHub <Icon size={16} />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

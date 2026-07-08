function ProjectCard({
  title,
  type,
  description,
  stack,
  highlight,
  status,
}) {
  return (
    <article className="project-card">
      <div className="project-info">
        <span className="project-type">{type}</span>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-highlight">
          <strong>Destaque técnico</strong>
          <p>{highlight}</p>
        </div>

        <div className="tags">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          <span className="project-link project-status">{status}</span>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

function ProjectCard({
  imageSrc,
  alt,
  title,
  description,
  tags,
  demoUrl,
  repoUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img src={imageSrc} alt={alt} className="project-image" />
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {demoUrl && demoUrl !== '#' && (
            <a
              className="project-link"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}

          <a
            className="project-link"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Código <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
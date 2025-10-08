// src/components/ProjectCard.jsx
function ProjectCard({ imageSrc, alt, title, description, tags, demoUrl, repoUrl }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageSrc} alt={alt} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a className="project-link" href={demoUrl} target="_blank" rel="noopener noreferrer">
            Ver Site <i className="fa fa-external-link"></i>
          </a>
          <a className="project-link" href={repoUrl} target="_blank" rel="noopener noreferrer">
            Ver Código <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

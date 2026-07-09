import { useState } from 'react';

function ProjectCard({
  title,
  type,
  description,
  stack,
  highlight,
  status,
  imageSrc,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = imageSrc && !imageFailed;

  return (
    <article className="project-card">
      <div className="project-media" aria-hidden="true">
        {hasImage ? (
          <img
            src={imageSrc}
            alt=""
            className="project-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

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

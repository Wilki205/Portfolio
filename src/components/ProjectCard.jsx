import { useState } from "react";
import Icon from "./Icon";
export default function ProjectCard({
  title,
  type,
  description,
  stack,
  focus,
  image,
  repository,
  index,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="project-card">
      <div className="project-media">
        <div className="project-browser" aria-hidden="true">
          <span />
          <span />
          <span />
          <span className="browser-label">{title}</span>
          <Icon name="code" size={14} />
        </div>
        {imageFailed ? (
          <div className="project-placeholder">{title}</div>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}projects/${image}`}
            alt={`Página de apresentação do ${title}`}
            width="1918"
            height="1030"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="project-info">
        <div className="project-category">
          <span>{type}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <details>
          <summary>Sobre a implementação</summary>
          <p>{focus}</p>
        </details>
        <ul className="tags" aria-label="Tecnologias">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          className="project-source"
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Icon name="github" size={17} /> Explorar código
          </span>
          <Icon size={19} />
          <span className="sr-only"> de {title} (nova aba)</span>
        </a>
      </div>
    </article>
  );
}

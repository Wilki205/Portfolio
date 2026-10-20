import SectionHeading from "./SectionHeading";
import { stackGroups } from "../data/portfolio";
export default function Skills() {
  return (
    <section id="stack" className="section">
      <SectionHeading
        number="04"
        label="Ferramentas de trabalho"
        title="Uma stack. Muitas possibilidades."
      >
        Tecnologias que conectam as diferentes camadas de uma aplicação.
      </SectionHeading>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article className="stack-card" key={group.title}>
            <span className="stack-symbol" aria-hidden="true">
              {group.symbol}
            </span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

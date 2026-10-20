import SectionHeading from "./SectionHeading";
export default function Education() {
  return (
    <section id="formacao" className="section">
      <SectionHeading
        number="05"
        label="Formação & certificações"
        title="Aprender faz parte do processo."
      />
      <div className="education-grid">
        <article className="education-card">
          <span className="education-icon" aria-hidden="true">
            ⌁
          </span>
          <div>
            <span className="eyebrow">Graduação · em andamento</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>FICR · Faculdade Católica Imaculada Conceição do Recife</p>
          </div>
        </article>
        <article className="education-card certification">
          <span className="aws-logo" aria-hidden="true">
            aws<span>⌣</span>
          </span>
          <div>
            <span className="eyebrow">Certificação</span>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Amazon Web Services · Fundamentos de computação em nuvem</p>
          </div>
          <span className="certificate-check" aria-hidden="true">
            ✓
          </span>
        </article>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
export default function Organizations() {
  return (
    <section id="experiencia" className="section">
      <SectionHeading
        number="02"
        label="Trajetória"
        title="Experiência que conecta."
      />
      <div className="experience-list">
        <article className="experience-card">
          <div className="company-logo pad">
            P<span>+</span>
          </div>
          <div className="experience-body">
            <div className="experience-top">
              <span className="company-name">PAD Saúde</span>
              <span className="current-badge">Atual</span>
            </div>
            <h3>Desenvolvedor Full Stack</h3>
            <p>
              Atuação no desenvolvimento de software, conectando interfaces e
              serviços web no contexto da saúde.
            </p>
            <div className="tags">
              <span>Desenvolvimento Full Stack</span>
              <span>Saúde & tecnologia</span>
            </div>
          </div>
          <p className="experience-date">
            <time dateTime="2026-08">Ago. 2026</time> — presente
          </p>
        </article>
        <article className="experience-card">
          <div className="company-logo cesar">
            c<span>.</span>
          </div>
          <div className="experience-body">
            <span className="company-name">CESAR School</span>
            <h3>Tutor de Programação</h3>
            <p>
              Projeto Florescendo Talentos. Orientação em lógica de programação
              e desenvolvimento web, com acompanhamento de atividades e do
              aprendizado dos alunos.
            </p>
            <div className="tags">
              <span>Educação</span>
              <span>Programação</span>
              <span>Mentoria</span>
            </div>
          </div>
          <p className="experience-date">Experiência anterior</p>
        </article>
      </div>
    </section>
  );
}

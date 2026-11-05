function Organizations() {
  return (
    <div
      className="glowing-card-wrapper static-card-wrapper color-blue"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <section className="organization-section" aria-label="Experiência">
        <h3 className="section-title organization-title">Experiência</h3>

        <div className="organization-list-content">
          <div className="organization-item">
            <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
            <div>
              <h4>PAD Saúde — Desenvolvedor Júnior</h4>
              <p>Agosto de 2026 — Atual</p>
              <p>
                Atuação no desenvolvimento, manutenção e evolução de aplicações
                corporativas, APIs, integrações e soluções digitais.
              </p>
            </div>
          </div>

          <div className="organization-item">
            <i className="fa-solid fa-chalkboard-user" aria-hidden="true"></i>
            <div>
              <h4>CESAR School / Projeto Florescendo Talentos — Tutor de Programação</h4>
              <p>Experiência anterior</p>
              <p>
                Atuação no ensino de lógica de programação, HTML, CSS,
                JavaScript e fundamentos de desenvolvimento web.
              </p>
            </div>
          </div>

          <div className="organization-item">
            <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
            <div>
              <h4>Desenvolvedor Freelancer</h4>
              <p>
                Desenvolvimento de aplicações web, dashboards, sistemas de
                gestão, automação de processos e soluções personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organizations;

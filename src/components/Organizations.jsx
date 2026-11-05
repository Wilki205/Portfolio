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
              <h4>Tutor de Programação — Projeto Florescendo Talentos</h4>
              <p>Orientação em HTML, CSS, JavaScript e desenvolvimento web.</p>
            </div>
          </div>

          <div className="organization-item">
            <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
            <div>
              <h4>Freelancer</h4>
              <p>Desenvolvimento de projetos web pessoais, acadêmicos e sob demanda.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organizations;

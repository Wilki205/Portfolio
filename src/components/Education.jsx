function Education() {
  return (
    <div className="glowing-card-wrapper static-card-wrapper color-purple" data-aos="fade-up">
      <section className="education-section" aria-label="Educação">
        <h3 className="section-title education-title">Educação</h3>

        <div className="education-list-content">
          <div className="education-item">
            <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
            <div>
              <h4>Análise e Desenvolvimento de Sistemas</h4>
              <p>Faculdade Católica Imaculada Conceição do Recife • Em andamento</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            <div>
              <h4>CDD 4.0 - Formação em Back-End</h4>
              <p>Instituto Aliança em parceria com a Universidade Federal do Ceará</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-cloud" aria-hidden="true"></i>
            <div>
              <h4>AWS re/Start</h4>
              <p>Formação em Computação em Nuvem pelo Instituto Aliança</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-certificate" aria-hidden="true"></i>
            <div>
              <h4>AWS Certified Cloud Practitioner</h4>
              <p>Certificação AWS em fundamentos de Cloud Computing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;

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
              <p>Faculdade Católica Imaculada Conceição do Recife (FIC) • Conclusão prevista: 2027</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-certificate" aria-hidden="true"></i>
            <div>
              <h4>AWS Certified Cloud Practitioner</h4>
              <p>Certificação obtida em fundamentos de Computação em Nuvem</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-cloud" aria-hidden="true"></i>
            <div>
              <h4>AWS re/Start</h4>
              <p>Formação em computação em nuvem</p>
            </div>
          </div>

          <div className="education-item">
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            <div>
              <h4>CDD 4.0 - Formação Back-End</h4>
              <p>Formação em desenvolvimento Back-End com Python, Java e SQL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;

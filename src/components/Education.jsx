// src/components/Education.jsx

function Education() {
  return (
    // Componente "embrulhado" com a div do efeito
    <div className="glowing-card-wrapper color-purple"> 
      <section className="education-section" data-aos="fade-up" aria-label="Educação">
        <h3 className="section-title education-title">Educação</h3>
        <div className="education-list-content"> {/* Adicionado para possível scroll */}
          <div className="education-item">
            <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
            <div>
              <h4>Análise e Desenvolvimento de Sistemas</h4>
              <p>Faculdade Católica Imaculada Conceição do Recife - Em andamento</p>
            </div>
          </div>
          <div className="education-item">
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            <div>
              <h4>CDD 4.0 - Formação em Backend</h4>
              <p>Instituto Aliança - Universidade Federal do Ceará</p>
            </div>
          </div>
          <div className="education-item">
            <i className="fa-solid fa-cloud" aria-hidden="true"></i>
            <div>
              <h4>AWS re/Start</h4>
              <p>Instituto Aliança</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
// src/components/Organizations.jsx

function Organizations() {
  return (
    // Componente "embrulhado" com a div do efeito
    <div className="glowing-card-wrapper color-blue">
      <section className="organization-section" data-aos="fade-up" data-aos-delay="200" aria-label="Organizações">
        <h3 className="section-title organization-title">Organizações</h3>
        <div className="organization-list-content"> {/* Adicionado para consistência e possível scroll */}
          <div className="organization-item">
            <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
            <div>
              <h4>Tutor no Projeto Florescendo Talentos</h4>
              <p>Instrutor de HTML, CSS e JavaScript</p>
            </div>
          </div>
          <div className="organization-item">
            <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
            <div>
              <h4>Freelancer</h4>
              <p>Projetos pessoais e acadêmicos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organizations;
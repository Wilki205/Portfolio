import profileImage from '../assets/img/will.png';

function Profile() {
  return (
    <section className="center-profile-area" aria-label="Perfil">
      <div
        className="glowing-card-wrapper profile-picture-wrapper"
        data-aos="zoom-in"
        tabIndex="0"
      >
        <img
          src={profileImage}
          alt="Foto de perfil de Wilkison Bruno"
          className="profile-picture"
        />
      </div>

      <div className="profile-info" data-aos="fade-up">
        <span className="profile-location">Recife-PE</span>
        <h1>Wilkison Bruno Barbosa de Souza</h1>
        <p className="profile-role">
          Desenvolvedor em formação com foco em Back-End, Dados, Cloud e
          Segurança da Informação.
        </p>

        <p className="profile-summary">
          Estudante de Análise e Desenvolvimento de Sistemas e tutor de
          programação, com experiência prática em projetos web, automações,
          bancos de dados e acompanhamento pedagógico. Tenho desenvolvido
          soluções com React, Node.js, Python, Java, PostgreSQL, Docker,
          Supabase e AWS, unindo tecnologia, organização e impacto real.
        </p>

        <div className="profile-badges">
          <span>ADS • conclusão prevista para 2026</span>
          <span>Tutor de Programação • CESAR School</span>
          <span>Back-End • Dados • Cloud • Segurança</span>
        </div>

        <div className="profile-actions">
          <a href="#portfolio" className="primary-action">
            Ver projetos
          </a>

          <a
            href="https://github.com/Wilki205"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wilkisonb"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="/curriculo/" target="_blank" rel="noopener noreferrer">
            Currículo
          </a>

          <a href="#contato">Contato</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;

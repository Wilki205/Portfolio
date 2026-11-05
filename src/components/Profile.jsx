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
          Desenvolvedor Full Stack Júnior | Back-End • Cloud • Segurança
        </p>

        <p className="profile-summary">
          Sou desenvolvedor de software com experiência prática na construção e
          manutenção de aplicações web, APIs REST, integrações e bancos de dados.
          Atualmente atuo como Desenvolvedor Júnior na PAD Saúde, participando do
          desenvolvimento e evolução de soluções corporativas. Tenho experiência
          com React, Next.js, Node.js, TypeScript, Python, PostgreSQL e Docker,
          além de conhecimentos em infraestrutura, computação em nuvem e segurança
          de aplicações. Busco desenvolver soluções eficientes, seguras e
          sustentáveis, combinando boas práticas de engenharia de software com
          necessidades reais de negócio.
        </p>

        <div className="profile-badges">
          <span>ADS • Conclusão prevista para 2027</span>
          <span>Desenvolvedor Júnior • PAD Saúde</span>
          <span>Back-End • Cloud • Segurança</span>
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

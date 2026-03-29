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
        <h2>Wilkison Bruno</h2>
        <p className="profile-role">
          Desenvolvedor Back-End • Cloud • Segurança de Aplicações
        </p>

        <div className="profile-badges">
          <span>AWS Certified Cloud Practitioner</span>
          <span>Tutor de Programação</span>
          <span>Estudante de ADS</span>
        </div>

        <div className="profile-actions">
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
        </div>
      </div>
    </section>
  );
}

export default Profile;
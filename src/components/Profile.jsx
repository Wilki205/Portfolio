// src/components/Profile.jsx

import profileImage from '../assets/img/will.png';

function Profile() {
  return (
    <section className="center-profile-area" aria-label="Perfil">
      {/* Adicione a classe do efeito de brilho aqui */}
      <div className="glowing-card-wrapper profile-picture-wrapper" data-aos="zoom-in" tabIndex="0">
        <img 
          src={profileImage} 
          alt="Foto de perfil Wilkison Bruno" 
          className="profile-picture" 
        />
      </div>
      <div className="profile-info" data-aos="fade-up">
        <h2>Wilkison Bruno</h2>
        <p>Desenvolvedor FullStack</p>
      </div>
      <div className="age-card" data-aos="fade-left">
        <span>27</span>
        <p>Anos</p>
      </div>
    </section>
  );
}

export default Profile;
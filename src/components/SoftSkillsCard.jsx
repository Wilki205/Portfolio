// src/components/SoftSkillsCard.jsx

// Lista com os dados de cada skill
const softSkillsData = [
  { name: 'Comunicação', iconClass: 'fa-solid fa-comments', bgClass: 'orange-bg' },
  { name: 'Trabalho em Equipe', iconClass: 'fa-solid fa-people-group', bgClass: 'light-blue-bg' },
  { name: 'Criatividade', iconClass: 'fa-solid fa-lightbulb', bgClass: 'purple-bg' },
  { name: 'Resiliência', iconClass: 'fa-solid fa-heart', bgClass: 'pink-bg' },
  { name: 'Organização', iconClass: 'fa-solid fa-list-check', bgClass: 'green-bg' }
];

function SoftSkillsCard() {
  return (
    // Adicionamos o wrapper do efeito de brilho aqui
    <div className="glowing-card-wrapper color-orange"> {/* Sugestão de cor */}
      <section className="about-user-card" data-aos="fade-right" data-aos-delay="200">
        <header className="card-header">
          <div className="card-icon"><i className="fa-solid fa-lightbulb"></i></div>
          <h3>Soft Skills</h3>
        </header>
        <div className="soft-skills-grid">
          {softSkillsData.map((skill) => (
            <div key={skill.name} className={`skill-item ${skill.bgClass}`}>
              <i className={skill.iconClass}></i> {skill.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SoftSkillsCard;
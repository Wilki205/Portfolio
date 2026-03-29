// src/components/SoftSkillsCard.jsx

const softSkillsData = [
  {
    name: 'Comunicação',
    iconClass: 'fa-solid fa-comments',
    bgClass: 'orange-bg',
  },
  {
    name: 'Trabalho em Equipe',
    iconClass: 'fa-solid fa-people-group',
    bgClass: 'light-blue-bg',
  },
  {
    name: 'Criatividade',
    iconClass: 'fa-solid fa-lightbulb',
    bgClass: 'purple-bg',
  },
  {
    name: 'Resiliência',
    iconClass: 'fa-solid fa-heart',
    bgClass: 'pink-bg',
  },
  {
    name: 'Organização',
    iconClass: 'fa-solid fa-list-check',
    bgClass: 'green-bg',
  },
];

function SoftSkillsCard() {
  return (
    <div
      className="glowing-card-wrapper color-orange"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <section
        className="about-user-card"
        aria-label="Competências comportamentais"
      >
        <header className="card-header">
          <div className="card-icon">
            <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
          </div>
          <h3>Competências Comportamentais</h3>
        </header>

        <div className="soft-skills-grid">
          {softSkillsData.map((skill) => (
            <div
              key={skill.name}
              className={`skill-item ${skill.bgClass}`}
              tabIndex="0"
              aria-label={skill.name}
            >
              <i className={skill.iconClass} aria-hidden="true"></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SoftSkillsCard;
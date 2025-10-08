// src/components/Skills.jsx
import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', delay: '0' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', delay: '100' },
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', delay: '200' },
  { name: 'React', iconClass: 'fa-brands fa-react', delay: '300' },
  { name: 'Vue.js', iconClass: 'fa-brands fa-vuejs', delay: '400' },
  { name: 'Java', iconClass: 'fa-brands fa-java', delay: '500' },
  { name: 'Python', iconClass: 'fa-brands fa-python', delay: '600' },
  { name: 'Firebase', iconClass: 'fa-brands fa-google', delay: '700' },
  { name: 'Node.js', iconClass: 'fa-brands fa-node-js', delay: '800' },
  { name: 'PHP', iconClass: 'fa-brands fa-php', delay: '900' },
  { name: 'SQL', iconClass: 'fa-solid fa-database', delay: '1000' },
  { name: 'Spring Boot', iconClass: 'fa-solid fa-leaf', delay: '1100' },
  { name: 'MariaDB', iconClass: 'fa-solid fa-database', delay: '1200' },
  { name: 'AWS', iconClass: 'fa-brands fa-aws', delay: '1300' },
  { name: 'Kotlin', iconClass: 'fa-solid fa-k', delay: '1400' },
  { name: 'Flutter', iconClass: 'fa-solid fa-feather-pointed', delay: '1500' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt', delay: '1600' },
  { name: 'GitHub', iconClass: 'fa-brands fa-github', delay: '1700' },
];

// src/components/Skills.jsx

function Skills() {
  return (
    <section className="skills-section" aria-label="Habilidades Técnicas">
      <h3 className="section-title" data-aos="fade-up">
        Habilidades Técnicas
      </h3>

      {/* Adicionamos o "embrulho" do efeito de brilho aqui */}

        <div className="skills-container">
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <SkillIcon
                key={skill.name}
                name={skill.name}
                iconClass={skill.iconClass}
                aosDelay={skill.delay}
              />
            ))}
          </div>
        </div>
    </section>
  );
}

export default Skills;

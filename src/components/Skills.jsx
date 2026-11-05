import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', delay: '0' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', delay: '100' },
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', delay: '200' },
  { name: 'React', iconClass: 'fa-brands fa-react', delay: '300' },
  { name: 'Vue.js', iconClass: 'fa-brands fa-vuejs', delay: '400' },
  { name: 'Java', iconClass: 'fa-brands fa-java', delay: '500' },
  { name: 'Spring Boot', imgKey: 'spring', delay: '600' },
  { name: 'Python', iconClass: 'fa-brands fa-python', delay: '700' },
  { name: 'Node.js', iconClass: 'fa-brands fa-node-js', delay: '800' },
  { name: 'SQL', iconClass: 'fa-solid fa-database', delay: '900' },
  { name: 'MariaDB', imgKey: 'mariadb', delay: '1000' },
  { name: 'AWS', imgKey: 'aws', delay: '1100' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt', delay: '1200' },
  { name: 'GitHub', iconClass: 'fa-brands fa-github', delay: '1300' },
  { name: 'Kotlin', imgKey: 'kotlin', delay: '1400' },
  { name: 'Flutter', imgKey: 'flutter', delay: '1500' },
  { name: 'Firebase', iconClass: 'fa-brands fa-google', delay: '1600' },
  { name: 'PHP', iconClass: 'fa-brands fa-php', delay: '1700' },
];

function Skills() {
  return (
    <section className="skills-section" aria-label="Habilidades Técnicas">
      <h3 className="section-title" data-aos="fade-up">
        Habilidades Técnicas
      </h3>

      <p className="skills-description" data-aos="fade-up">
        Tecnologias que fazem parte da minha trajetória em desenvolvimento web,
        back-end, banco de dados e computação em nuvem.
      </p>

      <div className="skills-frame" data-aos="fade-up">
        <div className="skills-container">
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <SkillIcon
                key={skill.name}
                name={skill.name}
                iconClass={skill.iconClass}
                imgKey={skill.imgKey}
                aosDelay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
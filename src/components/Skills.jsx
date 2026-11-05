import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'React', iconClass: 'fa-brands fa-react', delay: '0' },
  { name: 'Next.js', iconClass: 'fa-solid fa-code', delay: '100' },
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', delay: '200' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code', delay: '300' },
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', delay: '400' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', delay: '500' },
  { name: 'Tailwind CSS', iconClass: 'fa-solid fa-wind', delay: '600' },
  { name: 'Node.js', iconClass: 'fa-brands fa-node-js', delay: '700' },
  { name: 'Express', iconClass: 'fa-solid fa-server', delay: '800' },
  { name: 'Python', iconClass: 'fa-brands fa-python', delay: '900' },
  { name: 'Java', iconClass: 'fa-brands fa-java', delay: '1000' },
  { name: 'APIs REST', iconClass: 'fa-solid fa-network-wired', delay: '1100' },
  { name: 'PostgreSQL', iconClass: 'fa-solid fa-database', delay: '1200' },
  { name: 'SQL', iconClass: 'fa-solid fa-table', delay: '1300' },
  { name: 'Prisma', iconClass: 'fa-solid fa-gem', delay: '1400' },
  { name: 'Drizzle ORM', iconClass: 'fa-solid fa-droplet', delay: '1500' },
  { name: 'Docker', iconClass: 'fa-brands fa-docker', delay: '1600' },
  { name: 'Linux', iconClass: 'fa-brands fa-linux', delay: '1700' },
  { name: 'AWS', imgKey: 'aws', delay: '1800' },
  { name: 'Coolify', iconClass: 'fa-solid fa-cloud-arrow-up', delay: '1900' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt', delay: '2000' },
  { name: 'GitHub', iconClass: 'fa-brands fa-github', delay: '2100' },
];

function Skills() {
  return (
    <section className="skills-section" aria-label="Habilidades Técnicas">
      <h3 className="section-title" data-aos="fade-up">
        Habilidades Técnicas
      </h3>

      <p className="skills-description" data-aos="fade-up">
        Competências práticas em desenvolvimento Frontend, Backend, Bancos de Dados e
        Infraestrutura Cloud. Interesses e estudos contínuos em segurança de aplicações
        (OWASP Top 10) e arquitetura de software.
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

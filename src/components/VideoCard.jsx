function VideoCard() {
  const projectStats = [
    '5 projetos publicados',
    'Sistemas reais em gestão, educação, saúde e automação',
    'Deploy próprio com domínio forged-apps.com',
  ];

  const stack = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Supabase'];

  return (
    <div className="glowing-card-wrapper static-card-wrapper color-green" data-aos="fade-up">
      <section
        className="about-user-card online-projects-card"
        aria-label="Projetos online"
      >
        <header className="card-header">
          <div className="card-icon">
            <i className="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i>
          </div>
          <h3>Projetos online</h3>
        </header>

        <div className="online-projects-content">
          <ul className="online-projects-list">
            {projectStats.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="online-projects-stack" aria-label="Stack principal">
            <strong>Stack</strong>
            <div className="online-projects-tags">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoCard;

function AboutCard() {
  return (
    <div className="glowing-card-wrapper static-card-wrapper" data-aos="fade-right">
      <section className="about-user-card">
        <header className="card-header">
          <div className="card-icon">
            <i className="fa-solid fa-user" aria-hidden="true"></i>
          </div>
          <h3>Sobre Mim</h3>
        </header>

        <p className="card-text-content">
          Sou estudante de Análise e Desenvolvimento de Sistemas, com conclusão
          prevista para 2026, e atuo como Tutor de Programação no Projeto
          Florescendo Talentos, da CESAR School.
          <br /><br />
          Minha experiência envolve ensino de lógica de programação, Python, HTML,
          CSS, JavaScript, Google Sheets, Looker Studio e SQL, além do
          acompanhamento de alunos, atividades, entregas e evolução pedagógica.
          <br /><br />
          Tenho direcionado minha formação e meus projetos para desenvolvimento
          Back-End, dados, Cloud e Segurança da Informação, buscando construir
          soluções organizadas, confiáveis e com impacto real para pessoas e
          negócios.
        </p>
      </section>
    </div>
  );
}

export default AboutCard;

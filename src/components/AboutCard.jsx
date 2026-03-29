function AboutCard() {
  return (
    <div className="glowing-card-wrapper">
      <section className="about-user-card" data-aos="fade-right">
        <header className="card-header">
          <div className="card-icon"><i className="fa-solid fa-user"></i></div>
          <h3>Sobre Mim</h3>
        </header>

        <p className="card-text-content">
          Sou estudante de Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento Front-End e Back-End e interesse crescente em Computação em Nuvem e Cibersegurança.
          <br /><br />
          Tenho certificação AWS Certified Cloud Practitioner, o que fortalece minha base em serviços de nuvem, arquitetura básica e boas práticas dentro do ecossistema AWS.
          <br /><br />
          Também atuo como Tutor no programa Florescendo Talentos, da CESAR School, contribuindo na formação de novos estudantes em tecnologia. Busco unir desenvolvimento, Cloud e segurança para construir soluções modernas, escaláveis e confiáveis.
        </p>
      </section>
    </div>
  );
}

export default AboutCard;
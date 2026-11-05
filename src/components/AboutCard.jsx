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
          Sou desenvolvedor de software com experiência prática na construção e
          manutenção de aplicações web, APIs REST, integrações e bancos de
          dados. Atualmente atuo como Desenvolvedor Júnior na PAD Saúde,
          participando do desenvolvimento e evolução de soluções corporativas.
          <br /><br />
          Tenho experiência com React, Next.js, Node.js, TypeScript, Python,
          PostgreSQL e Docker, além de conhecimentos em infraestrutura, computação
          em nuvem e segurança de aplicações.
          <br /><br />
          Graduando em Análise e Desenvolvimento de Sistemas pela Faculdade
          Católica Imaculada Conceição do Recife (previsão 2027), busco
          desenvolver soluções eficientes, seguras e sustentáveis, unindo boas
          práticas de engenharia a necessidades reais de negócio.
        </p>
      </section>
    </div>
  );
}

export default AboutCard;

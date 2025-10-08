function AboutCard() {
  return (
    <div className="glowing-card-wrapper">
      <section className="about-user-card" data-aos="fade-right">
        <header className="card-header">
          <div className="card-icon"><i className="fa-solid fa-user"></i></div>
          <h3>Sobre Mim</h3>
        </header>
        
        <p className="card-text-content">
         Minha paixão por tecnologia me guiou por uma jornada que começou no desenvolvimento de aplicações e hoje se aprofunda na infraestrutura que as torna possíveis. Como estudante de Análise e Desenvolvimento de Sistemas, construí uma base robusta como desenvolvedor, atuando do Front-End ao Back-End, o que me ensinou não apenas a criar, mas a entender como a tecnologia realmente funciona.
          <br/><br/>
          Essa busca por um conhecimento mais profundo me levou naturalmente para a nuvem. Através do programa AWS re/Start, estou direcionando minha carreira para a Computação em Nuvem e Cibersegurança, com o objetivo de obter a certificação Cloud Practitioner. Paralelamente, tenho a satisfação de contribuir com a comunidade como Tutor no programa Florescendo Talentos da CESAR School, onde ajudo a formar a próxima geração de tecnólogos. Agora, estou pronto para unir minha visão de desenvolvedor com as melhores práticas de Cloud para construir soluções seguras e escaláveis.
        </p>
      </section>
    </div>
  );
}

export default AboutCard;
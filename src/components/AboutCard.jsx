import SectionHeading from "./SectionHeading";
export default function AboutCard() {
  return (
    <section id="sobre" className="section about-section">
      <SectionHeading
        number="01"
        label="Sobre mim"
        title="Tecnologia, com um olhar humano."
      />
      <div className="about-layout">
        <div className="about-copy">
          <p>
            Sou <strong>Wilkison Bruno Barbosa de Souza</strong>, Desenvolvedor
            Full Stack na PAD Saúde e estudante de Análise e Desenvolvimento de
            Sistemas na FICR.
          </p>
          <p>
            Minha trajetória também passa pela educação: como tutor de
            programação na CESAR School, no projeto Florescendo Talentos,
            acompanhei o aprendizado de desenvolvimento web e lógica de
            programação.
          </p>
          <p>
            Hoje, meu foco está em conectar o frontend ao backend, aprofundando
            conhecimentos em engenharia de software, cloud, infraestrutura,
            segurança e automação.
          </p>
        </div>
        <div className="about-principles">
          <article>
            <span>01</span>
            <div>
              <h3>Visão de ponta a ponta</h3>
              <p>Da experiência na interface à organização dos dados.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Clareza para construir</h3>
              <p>Código legível, comunicação e aprendizado contínuo.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Curiosidade para evoluir</h3>
              <p>Entender os fundamentos e explorar novas soluções.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

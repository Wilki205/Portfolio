function Contact() {
  return (
    <section id="contato" className="contact-section" aria-label="Contato">
      <h3 className="section-title contact-title" data-aos="fade-up">
        Contato
      </h3>

      <p className="contact-description" data-aos="fade-up">
        Estou disponível para oportunidades, projetos e conexões na área de tecnologia.
        Envie uma mensagem ou fale comigo pelas redes abaixo.
      </p>

      <div className="contact-form-full">
        <div className="glowing-card-wrapper" data-aos="fade-up">
          <form
            className="contact-form-card"
            tabIndex="0"
            action="https://formspree.io/f/xblzknwv"
            method="POST"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>

            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" placeholder="Sua mensagem" required />

            <button type="submit" className="email-send-btn">
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="social-circle-row" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.linkedin.com/in/wilkisonb"
            className="circle-icon linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://github.com/Wilki205"
            className="circle-icon github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>

          <a
            href="mailto:seuemail@exemplo.com"
            className="circle-icon email"
            aria-label="E-mail"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

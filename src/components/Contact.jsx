// src/components/Contact.jsx

function Contact() {
  return (
    <section className="contact-section" aria-label="Contato">
      <h3 className="section-title contact-title" data-aos="fade-up">Contato</h3>
      <div className="contact-form-full">

        {/* Adicionamos o "embrulho" do efeito de brilho aqui */}
        <div className="glowing-card-wrapper">
          <form
            className="contact-form-card"
            data-aos="fade-up"
            tabIndex="0"
            action="https://formspree.io/f/xblzknwv"
            method="POST"
          >
            <i className="fa-solid fa-envelope"></i>
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" placeholder="Sua mensagem" required />
            <button type="submit" className="email-send-btn">Enviar</button>
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
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Wilki205"
            className="circle-icon github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://instagram.com/programadordepadaria"
            className="circle-icon instagram"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
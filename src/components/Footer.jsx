// src/components/Footer.jsx

function Footer() {

  // Função para rolagem suave até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Efeito de rolagem suave
    });
  };

  return (
 <footer className="portfolio-footer">
  <div className="footer-content">
    <div className="footer-spacer"></div>
    <p className="footer-text">
      &copy; {new Date().getFullYear()} Wilkison Bruno. Todos os direitos reservados.
    </p>
    <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Voltar ao topo">
      Voltar ao Topo <i className="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</footer>

  );
}

export default Footer;
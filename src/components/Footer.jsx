function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-spacer"></div>

        <div className="footer-info">
          <p className="footer-text">
            © {new Date().getFullYear()} Wilkison Bruno
          </p>
          <span className="footer-subtext">
            Desenvolvedor • Cloud • AWS Certified Cloud Practitioner
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Voltar ao topo"
        >
          Topo <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
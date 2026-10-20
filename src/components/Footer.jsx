export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#inicio">
        <span className="brand-mark">
          w<span>.</span>
        </span>
        <span>Wilkison Bruno</span>
      </a>
      <p>© {new Date().getFullYear()} · Feito com atenção aos detalhes.</p>
      <a className="back-top" href="#inicio">
        Voltar ao topo <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}

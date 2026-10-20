import { useEffect, useState } from "react";
import Icon from "./Icon";
const links = [
  ["sobre", "Sobre"],
  ["experiencia", "Experiência"],
  ["portfolio", "Projetos"],
  ["stack", "Stack"],
  ["formacao", "Formação"],
];
export default function TopInfoBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Wilkison Bruno, início"
        >
          <span className="brand-mark">
            w<span>.</span>
          </span>
          <span>
            Wilkison<span className="wordmark-light"> Bruno</span>
          </span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-controls="main-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Navegação principal"
        >
          {links.map(([id, title]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Vamos conversar <Icon size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

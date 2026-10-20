import Icon from "./Icon";
import { social } from "../data/portfolio";
export default function Profile() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="status-label">
          <span className="status-dot" /> Desenvolvedor Full Stack · PAD Saúde
        </p>
        <p className="hero-greeting">Olá, eu sou Wilkison Bruno</p>
        <h1 id="hero-title">
          Código com propósito.
          <br />
          <span>
            Soluções de ponta
            <br className="desktop-break" /> a ponta.
          </span>
        </h1>
        <p className="hero-description">
          Conecto interfaces, APIs e infraestrutura para construir soluções web.
          Full Stack com atenção aos detalhes e curiosidade pelo que acontece
          por trás da tela.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#portfolio">
            Explorar projetos <Icon name="right" size={18} />
          </a>
          <a className="button secondary" href="#contato">
            Entrar em contato <Icon name="mail" size={18} />
          </a>
        </div>
        <div className="hero-social">
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={18} /> GitHub <Icon size={13} />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={18} /> LinkedIn <Icon size={13} />
          </a>
          <a href={`${import.meta.env.BASE_URL}curriculo/`}>
            Currículo <Icon size={13} />
          </a>
          <span>Recife, PE · Brasil</span>
        </div>
      </div>
      <div
        className="hero-visual"
        role="img"
        aria-label="Especialidades: frontend, backend e cloud"
      >
        <div className="visual-grid" />
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <span className="visual-cross cross-one">+</span>
        <span className="visual-cross cross-two">+</span>
        <div className="code-window">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.ts</span>
            <Icon name="code" size={16} />
          </div>
          <div className="code-content">
            <div>
              <span className="line-number">01</span>
              <span className="syntax-purple">const</span> developer = {"{"}
            </div>
            <div>
              <span className="line-number">02</span> name:{" "}
              <span className="syntax-green">'Wilkison Bruno'</span>,
            </div>
            <div>
              <span className="line-number">03</span> role:{" "}
              <span className="syntax-green">'Full Stack Developer'</span>,
            </div>
            <div>
              <span className="line-number">04</span> stack: [
            </div>
            <div>
              <span className="line-number">05</span>{" "}
              <span className="syntax-green">'React', 'TypeScript'</span>,
            </div>
            <div>
              <span className="line-number">06</span>{" "}
              <span className="syntax-green">'Node.js', 'PostgreSQL'</span>
            </div>
            <div>
              <span className="line-number">07</span> ],
            </div>
            <div>
              <span className="line-number">08</span> mindset:{" "}
              <span className="syntax-green">'Sempre evoluindo'</span>
            </div>
            <div>
              <span className="line-number">09</span>
              {"};"}
            </div>
          </div>
          <div className="window-footer">
            <span>
              <span className="status-dot" /> building with purpose
            </span>
            <span>TypeScript</span>
          </div>
        </div>
        <div className="floating-label frontend-label">
          <span>⌁</span> Frontend{" "}
          <span className="small-muted">+ experiência</span>
        </div>
        <div className="floating-label backend-label">
          <span>{"{ }"}</span> Backend{" "}
          <span className="small-muted">+ arquitetura</span>
        </div>
        <div className="cloud-label">
          <span className="cloud-symbol">☁</span>
          <span>
            AWS Certified<small>Cloud Practitioner</small>
          </span>
          <span className="verified-mark">✓</span>
        </div>
        <span className="visual-caption">
          INTERFACE → LÓGICA → INFRAESTRUTURA
        </span>
      </div>
      <a className="scroll-cue" href="#sobre">
        <span>↓</span> Conheça minha trajetória
      </a>
    </section>
  );
}

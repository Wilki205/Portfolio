import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { social } from "../data/portfolio";
import { sendMessage, CONTACT_ENDPOINT } from "../lib/contact";
export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await sendMessage(new FormData(form));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-copy">
        <SectionHeading
          number="06"
          label="Vamos conversar"
          title={
            <>
              O próximo projeto
              <br />
              começa com um olá<span className="accent">.</span>
            </>
          }
        >
          Tem uma ideia, um desafio técnico ou quer trocar experiências? Minha
          caixa de entrada está aberta.
        </SectionHeading>
        <div className="contact-links">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" />
            <span>
              Conecte-se no LinkedIn<small>Vamos ampliar essa conversa</small>
            </span>
            <Icon />
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            <span>
              Acompanhe no GitHub<small>Projetos e código por aqui</small>
            </span>
            <Icon />
          </a>
        </div>
      </div>
      <form
        className="contact-form"
        action={CONTACT_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        aria-label="Enviar mensagem"
        aria-busy={status === "sending"}
      >
        <div className="form-row">
          <div className="field">
            <label htmlFor="contact-name">Seu nome</label>
            <input
              id="contact-name"
              name="nome"
              autoComplete="name"
              placeholder="Como posso chamar você?"
              required
              maxLength={120}
            />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Seu e-mail</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              required
              maxLength={254}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="contact-message">Sua mensagem</label>
          <textarea
            id="contact-message"
            name="mensagem"
            rows={5}
            placeholder="Conte um pouco sobre sua ideia…"
            required
            minLength={10}
            maxLength={5000}
          />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-company">Deixe este campo vazio</label>
          <input
            id="contact-company"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <p className="form-note">
          Ao enviar, seus dados serão encaminhados pelo Formspree para responder
          ao seu contato.
        </p>
        <button
          className="button primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando…" : "Enviar mensagem"}
          <Icon name="right" size={18} />
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">
          {status === "success"
            ? "Mensagem enviada! Obrigado pelo contato."
            : status === "error"
              ? "Não foi possível enviar. Tente novamente ou fale comigo pelo LinkedIn."
              : status === "sending"
                ? "Enviando sua mensagem…"
                : ""}
        </p>
      </form>
    </section>
  );
}

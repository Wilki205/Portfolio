// src/components/VideoCard.jsx

function VideoCard() {
  const videoFileName = "apresentacao.mp4";

  return (
    // Componente "embrulhado" com a div do efeito
    <div className="glowing-card-wrapper color-green">
      <section className="about-user-card video-card-section" data-aos="fade-up">
        <header className="card-header">
          <div className="card-icon"><i className="fa-solid fa-video"></i></div>
          <h3>Bem-vindo(a) ao Meu Portfólio:</h3>
        </header>
        <div className="video-local-container">
          <video
            width="100%"
            autoPlay
            loop
            muted
            playsInline // Boa prática adicionar para melhor compatibilidade mobile
            src={`/videos/${videoFileName}`}
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </section>
    </div>
  );
}

export default VideoCard;
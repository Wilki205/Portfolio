// src/components/VideoCard.jsx

function VideoCard() {
  const videoFileName = 'apresentacao.mp4';

  return (
    <div className="glowing-card-wrapper color-green">
      <section
        className="about-user-card video-card-section"
        data-aos="fade-up"
        aria-label="Vídeo de apresentação"
      >
        <header className="card-header">
          <div className="card-icon">
            <i className="fa-solid fa-video" aria-hidden="true"></i>
          </div>
          <h3>Apresentação</h3>
        </header>

        <div className="video-local-container">
          <video
            className="portfolio-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src={`/videos/${videoFileName}`}
          >
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      </section>
    </div>
  );
}

export default VideoCard;
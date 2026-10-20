import TopInfoBar from "./components/TopInfoBar";
import Profile from "./components/Profile";
import AboutCard from "./components/AboutCard";
import Organizations from "./components/Organizations";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <TopInfoBar />
      <main id="conteudo" tabIndex={-1} className="page-container">
        <Profile />
        <div className="tech-strip" aria-label="Stack principal">
          <span>DO FRONT AO BACK.</span>
          <p>
            React <i>✦</i> TypeScript <i>✦</i> Node.js <i>✦</i> PostgreSQL{" "}
            <i>✦</i> Docker <i>✦</i> AWS
          </p>
        </div>
        <AboutCard />
        <Organizations />
        <Portfolio />
        <Skills />
        <Education />
        <Contact />
      </main>
      <div className="page-container">
        <Footer />
      </div>
    </>
  );
}

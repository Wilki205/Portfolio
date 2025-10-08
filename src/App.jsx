// src/App.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TopInfoBar from './components/TopInfoBar';
import AboutCard from './components/AboutCard';
import SoftSkillsCard from './components/SoftSkillsCard';
import Profile from './components/Profile';
import Education from './components/Education';
import Organizations from './components/Organizations';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import VideoCard from './components/VideoCard'; // <-- 1. IMPORTE O VIDEO CARD AQUI
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="portfolio-page-container">
      <TopInfoBar />

      {/* A estrutura do grid precisa de 3 filhos diretos */}
      <div className="main-grid-layout">

        {/* --- Filho 1: Coluna da Esquerda --- */}
        <div className="left-column">
          <AboutCard />
          <SoftSkillsCard />
        </div>

        {/* --- Filho 2: Coluna Central --- */}
        <div className="center-column">
          <Profile />
          <VideoCard />
        </div>

        {/* --- Filho 3: Coluna da Direita --- */}
        <div className="right-column">
          <Education />
          <Organizations />
        </div>

      </div>

      <Portfolio />
      <Skills />
      <Contact />
      <Footer /> {/* <-- 2. ADICIONE O COMPONENTE AQUI */}
    </div>
  );
}

export default App;
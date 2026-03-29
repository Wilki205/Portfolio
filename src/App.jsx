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
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="portfolio-page-container">
      <TopInfoBar />

      <div className="main-grid-layout">
        <div className="left-column">
          <AboutCard />
          <SoftSkillsCard />
        </div>

        <div className="center-column">
          <Profile />
          <VideoCard />
        </div>

        <div className="right-column">
          <Education />
          <Organizations />
        </div>
      </div>

      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
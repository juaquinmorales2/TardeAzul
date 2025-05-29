import { useState } from 'react';
import './animations.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramSchedule from './components/ProgramSchedule';
import LatestEpisodes from './components/LatestEpisodes';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import WhatsAppButton from './components/whatsappButton';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="relative">
      <Header isPlaying={isPlaying} togglePlay={togglePlay} />
      <Hero isPlaying={isPlaying} togglePlay={togglePlay} />
      <AboutSection />
      <ProgramSchedule />
      <LatestEpisodes />
      <Newsletter />
      <ContactSection />
      <WhatsAppButton/>
      <Footer />
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
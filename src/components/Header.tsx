import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, Volume2 } from 'lucide-react';

interface HeaderProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const Header: React.FC<HeaderProps> = ({ isPlaying, togglePlay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-blue-900/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Radio className="h-8 w-8 text-blue-300 animate-float" />
            <a href="#" className="text-white font-bold text-2xl group">
              <span className="mr-1 group-hover:text-blue-300 transition-colors">93.5</span>
              <span className="text-blue-300 group-hover:text-white transition-colors">FM</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="text-white/80 text-sm border-l border-white/20 pl-8">
              <span className="animate-pulse-slow">{currentTime.toLocaleTimeString()}</span>
            </div>
            <a href="#" className="text-white hover:text-blue-300 transition-colors relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors relative group">
              Sobre Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#schedule" className="text-white hover:text-blue-300 transition-colors relative group">
              Programación
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#episodes" className="text-white hover:text-blue-300 transition-colors relative group">
              Episodios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={togglePlay}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 animate-glow ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 shadow-red-500/50' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/50'
              }`}
            >
              <span className={`block h-2 w-2 rounded-full ${isPlaying ? 'animate-pulse bg-white' : 'bg-white'}`}></span>
              <span className="text-white font-medium">{isPlaying ? 'EN VIVO' : 'ESCUCHAR'}</span>
              <Volume2 className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-blue-800/50 rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-blue-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#" 
              className="text-white text-2xl font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#about" 
              className="text-white text-2xl font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </a>
            <a 
              href="#schedule" 
              className="text-white text-2xl font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programación
            </a>
            <a 
              href="#episodes" 
              className="text-white text-2xl font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Episodios
            </a>
            <a 
              href="#contact" 
              className="text-white text-2xl font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            
            <button 
              onClick={() => {
                togglePlay();
                setIsOpen(false);
              }}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <span className={`block h-2 w-2 rounded-full ${isPlaying ? 'animate-pulse bg-white' : 'bg-white'}`}></span>
              <span className="text-white font-medium">{isPlaying ? 'EN VIVO' : 'ESCUCHAR'}</span>
              <Volume2 className="h-4 w-4 text-white" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
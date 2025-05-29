import React, { useEffect, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import logo93 from '../assets/b13.jpg';

interface HeroProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const Hero: React.FC<HeroProps> = ({ isPlaying, togglePlay }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        const width = canvas?.width ?? window.innerWidth;
        const height = canvas?.height ?? window.innerHeight;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width ?? window.innerWidth)) this.x = 0;
        else if (this.x < 0) this.x = canvas?.width ?? window.innerWidth;

        if (this.y > (canvas?.height ?? window.innerHeight)) this.y = 0;
        else if (this.y < 0) this.y = canvas?.height ?? window.innerHeight;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    init();
    animate();

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={logo93}
          alt="Fondo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Canvas de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Oscurecimiento en gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in">
            <span className="block">Tarde Azul</span>
            <span className="text-3xl md:text-6xl font-light block mt-2">
              con Benjamin Castro
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto opacity-90">
            Tu compañía perfecta en las tardes, con la mejor música y las
            conversaciones más interesantes.
          </p>

          <div className="mt-12 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition duration-300 group"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Escuchar en vivo</span>
                </>
              )}
            </button>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

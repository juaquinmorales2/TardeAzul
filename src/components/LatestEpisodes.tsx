import React from 'react';
import { Play } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: string;
  image: string;
  description: string;
}

const LatestEpisodes: React.FC = () => {
  const episodes: Episode[] = [
    {
      id: 1,
      title: "Entrevista con Marina Suárez",
      date: "10 Mayo, 2025",
      duration: "45 min",
      image: "https://images.pexels.com/photos/4472279/pexels-photo-4472279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "La reconocida cantautora nos habla de su nuevo álbum y sus próximos proyectos."
    },
    {
      id: 2,
      title: "Especial música de los 80's",
      date: "5 Mayo, 2025",
      duration: "60 min",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Un recorrido por los éxitos que marcaron una década dorada de la música."
    },
    {
      id: 3,
      title: "Bandas emergentes locales",
      date: "28 Abril, 2025",
      duration: "50 min",
      image: "https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Descubre las nuevas propuestas musicales que están surgiendo en nuestra ciudad."
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-black text-white" id="episodes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Episodios Recientes</h2>
          <p className="text-blue-300 max-w-2xl mx-auto">
            Revive los mejores momentos de nuestro programa. Episodios completos disponibles para que no te pierdas nada.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map(episode => (
            <div 
              key={episode.id} 
              className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="relative">
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-300 text-sm">{episode.date}</span>
                  <span className="bg-blue-700 text-xs text-white px-2 py-1 rounded">{episode.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                <p className="text-blue-200 mb-4">{episode.description}</p>
                
                <button className="text-blue-300 hover:text-white transition-colors font-medium flex items-center">
                  Escuchar episodio
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Ver todos los episodios
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisodes;
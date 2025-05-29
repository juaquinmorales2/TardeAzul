import React from 'react';
import logo93 from '../assets/93.5.webp';
import benja from '../assets/b5.jpeg'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={benja} 
                  alt="Benjamin Castro en el estudio" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <img src={logo93} alt="" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Sobre Tarde Azul</h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <span className="text-blue-600 font-semibold">Tarde Azul</span> es un programa radiofónico 
                que nace con el objetivo de acompañar tus tardes con la mejor selección musical, 
                conversaciones interesantes y un ambiente relajado.
              </p>
              
              <p>
                Conducido por <span className="font-semibold">Benjamin Castro</span>, con más de 5 años 
                de experiencia en la radio, el programa se ha convertido en un referente cultural y 
                musical para la audiencia.
              </p>
              
              <p>
                Cada tarde, de lunes a viernes, nos sumergimos en un viaje sonoro donde la música, 
                las entrevistas y las historias se entrelazan para crear una experiencia única para 
                nuestros oyentes.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-1">+1000</h3>
                <p className="text-blue-600">Programas emitidos</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-1">+100</h3>
                <p className="text-blue-600">Artistas entrevistados</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-1">5</h3>
                <p className="text-blue-600">Años en antena</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 text-lg mb-1">+20K</h3>
                <p className="text-blue-600">Oyentes mensuales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
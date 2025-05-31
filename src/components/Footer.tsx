import React from 'react';
import {  Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-1">93.5 FM</h2>
              <h3 className="text-xl font-light text-blue-300">Tarde Azul</h3>
            </div>
            
            <p className="mb-6 text-blue-200">
              Tu compañía perfecta en las tardes, con la mejor música y las conversaciones más interesantes.
            </p>
            
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#schedule" className="text-blue-200 hover:text-white transition-colors">Programación</a></li>
              <li><a href="#episodes" className="text-blue-200 hover:text-white transition-colors">Episodios</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-300" />
                <span>+598 94 178 936</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 mb-8">
          <p>© {new Date().getFullYear()} <b>Vos Marketing S.A</b>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
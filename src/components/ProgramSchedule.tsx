import React, { useState } from 'react';

interface Program {
  id: number;
  time: string;
  title: string;
  host: string;
  description: string;
  day: string;
}

const ProgramSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Lunes');
  
  const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  const programs: Program[] = [
    {
      id: 1,
      time: '14:00 - 16:00',
      title: 'Tarde Azul',
      host: 'Benjamin Castro',
      description: 'Un viaje musical con las mejores canciones y entrevistas exclusivas.',
      day: 'Lunes'
    },
    {
      id: 2,
      time: '16:00 - 18:00',
      title: 'Conexión Musical',
      host: 'Laura Mendoza',
      description: 'Descubre nuevos artistas y las tendencias musicales del momento.',
      day: 'Lunes'
    },
    {
      id: 3,
      time: '14:00 - 16:00',
      title: 'Tarde Azul',
      host: 'Benjamin Castro',
      description: 'Un viaje musical con las mejores canciones y entrevistas exclusivas.',
      day: 'Martes'
    },
    {
      id: 4,
      time: '16:00 - 18:00',
      title: 'Voces del Mundo',
      host: 'Carlos Ruiz',
      description: 'Un recorrido por los sonidos y culturas musicales internacionales.',
      day: 'Martes'
    },
    {
      id: 5,
      time: '14:00 - 16:00',
      title: 'Tarde Azul',
      host: 'Benjamin Castro',
      description: 'Un viaje musical con las mejores canciones y entrevistas exclusivas.',
      day: 'Miércoles'
    },
    {
      id: 6,
      time: '14:00 - 16:00',
      title: 'Tarde Azul',
      host: 'Benjamin Castro',
      description: 'Un viaje musical con las mejores canciones y entrevistas exclusivas.',
      day: 'Jueves'
    },
    {
      id: 7,
      time: '14:00 - 16:00',
      title: 'Tarde Azul',
      host: 'Benjamin Castro',
      description: 'Un viaje musical con las mejores canciones y entrevistas exclusivas.',
      day: 'Viernes'
    },
    {
      id: 8,
      time: '14:00 - 16:00',
      title: 'Lo Mejor de la Semana',
      host: 'Benjamin Castro',
      description: 'Recopilación de los mejores momentos de Tarde Azul de la semana.',
      day: 'Sábado'
    },
    {
      id: 9,
      time: '14:00 - 16:00',
      title: 'Especial de Domingo',
      host: 'Varios',
      description: 'Programación especial con temas variados y música seleccionada.',
      day: 'Domingo'
    },
  ];
  
  const filteredPrograms = programs.filter(program => program.day === activeDay);
  
  return (
    <section className="py-20 bg-blue-50" id="schedule">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Programación</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Descubre nuestra programación semanal y no te pierdas ninguno de tus programas favoritos.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          {weekDays.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 mx-1 mb-2 rounded-full transition-all duration-300 ${
                activeDay === day 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-blue-800 hover:bg-blue-100'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map(program => (
            <div 
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-blue-600 text-white py-3 px-4">
                <p className="font-semibold">{program.time}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-blue-700 mb-3">Presentado por: {program.host}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
          
          {filteredPrograms.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-blue-800 text-lg">No hay programas registrados para este día.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
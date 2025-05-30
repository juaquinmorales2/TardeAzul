import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  facebook?: string;
}

const members: TeamMember[] = [
    {
    id: 1,
    name: 'Benjamín Castro',
    role: 'Locutor',
    image: 'https://pbs.twimg.com/profile_images/964144672816943105/TfOing-I_400x400.jpg',
    bio: '',
  },
  {
    id: 2,
    name: 'Taiza',
    role: 'Producción y Co-Producción',
    image: '',
    instagram:"",
    bio: '',
  },
  {
    id: 3,
    name: 'Jorge Baldano',
    role: 'Columna - Vida Contemporáneas',
    image: 'https://uyartistas.uy/wp-content/uploads/2022/10/jorge-bafico-0.jpg',
    bio: '',
  },
  {
    id: 4,
    name: 'Juan Pablo Taborda',
    role: 'Segmento deportivo "Una vuelta al Pasado"',
    image: 'https://pbs.twimg.com/profile_images/1869144603456086016/Z6wiSpGu_400x400.jpg',
    bio: '',
    instagram: 'https://www.instagram.com/tabordajp/?__pwa=1',
    facebook: 'https://www.facebook.com/juan.p.taborda.3/'
  },
  {
    id: 5,
    name: 'Maricel Spini',
    role: 'Editora en Jefe Columna "Ámbito Financiero"',
    image: 'https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/465781962_10234052352761178_8669447156328881990_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=BsBhQLn49XwQ7kNvwFtzbeF&_nc_oc=Adljc1XBxpl3LuziCcRgxkdKMsCD3iMOhXfrmvGL6GJWmqL72IeTbcvBBAqOksVK98naFEh7FzrI-iabFQznnDkF&_nc_zt=23&_nc_ht=scontent.fmvd4-1.fna&_nc_gid=mA6roFYCKP4VOD5ERiK4pg&oh=00_AfJHsQV6A-ZjJOIOx0-5NdtKey2WJN3_Ij-gtlU6beS1dg&oe=683F9B64',
    instagram:"https://www.instagram.com/maricelspini/?__pwa=1",
    facebook: 'https://www.facebook.com/maricel.spini',
    bio: '',
  },
  {
    id: 6,
    name: 'Mike Grosso',
    role: 'Columna "Escuela Musical"',
    image: 'https://via.placeholder.com/400x400?text=Mike+Grosso',
    bio: '',
  },
  {
    id: 7,
    name: 'El Matto',
    role: 'Controles y Musicalización',
    image: 'https://via.placeholder.com/400x400?text=El+Matto',
    bio: '',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const RadioTeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-black text-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Conoce a Nuestro Equipo de Radio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre las voces y mentes que dan vida a tu radio, con contenidos únicos que no querrás perderte.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {members.map(member => (
            <motion.div
              key={member.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 md:h-96 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <span className="text-indigo-400 text-sm font-medium mb-4 block">
                  {member.role}
                </span>
                <p className="text-gray-300 mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  {member.instagram && (
                    <a href={member.instagram} aria-label="Instagram profile" className="hover:text-pink-500 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} aria-label="Facebook profile" className="hover:text-blue-600 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RadioTeamSection;

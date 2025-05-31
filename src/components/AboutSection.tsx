import React from 'react';
import { motion } from 'framer-motion';
import benja from '../assets/b5.jpeg';

const sponsorLogos = [
  { name: 'Adidas', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png' },
  { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/BurgerKingLogoDileo.png' },
  { name: 'Airbnb', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
  { name: 'Spotify', url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png' },
  { name: 'Coca-Cola', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Coca-Cola_bottle_cap.svg' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={benja} alt="Benjamin Castro en el estudio" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Sobre Tarde Azul</h2>

            <div className="space-y-6 text-base sm:text-lg text-gray-700">
              <p>
                <span className="text-blue-600 font-semibold">Tarde Azul</span> es un programa radiofónico que nace con el objetivo de acompañar tus tardes con la mejor selección musical, conversaciones interesantes y un ambiente relajado.
              </p>
              <p>
                Conducido por <span className="font-semibold">Benjamin Castro</span>, con más de 5 años de experiencia en la radio, el programa se ha convertido en un referente cultural y musical para la audiencia.
              </p>
              <p>
                Cada tarde, de lunes a viernes, nos sumergimos en un viaje sonoro donde la música, las entrevistas y las historias se entrelazan para crear una experiencia única para nuestros oyentes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md">
              {[
                ['+1000', 'Programas emitidos'],
                ['+100', 'Artistas entrevistados'],
                ['5', 'Años en antena'],
                ['+20K', 'Oyentes mensuales'],
              ].map(([stat, label], i) => (
                <motion.div
                  key={i}
                  className="bg-blue-50 p-4 rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.4 + i * 0.1}
                  variants={fadeInUp}
                >
                  <h3 className="font-bold text-blue-800 text-lg mb-1">{stat}</h3>
                  <p className="text-blue-600">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">Con el apoyo de</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {sponsorLogos.map((sponsor, index) => (
              <motion.img
                key={index}
                src={sponsor.url}
                alt={sponsor.name}
                className="h-10 sm:h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

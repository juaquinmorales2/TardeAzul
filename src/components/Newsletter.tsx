import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Activa antes de que esté completamente visible

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-600 text-white p-12">
              <h2 className="text-3xl font-bold mb-4">Mantente Conectado</h2>
              <p className="mb-6">Suscríbete a nuestro boletín y recibe:</p>

              <ul className="space-y-3">
                {[
                  'Noticias sobre próximos episodios',
                  'Entrevistas exclusivas',
                  'Eventos y promociones especiales',
                  'Acceso anticipado a contenido',
                ].map((item, index) => (
                  <li className="flex items-center" key={index}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 p-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Suscríbete Ahora</h3>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded"
                >
                  ¡Gracias por suscribirte! Pronto recibirás nuestro boletín.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Tu correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ejemplo@correo.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" required />
                      <span className="ml-2 text-gray-700 text-sm">
                        Acepto recibir comunicaciones y el tratamiento de mis datos de acuerdo a la política de privacidad.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Suscribirme
                  </button>
                </form>
              )}

              <p className="mt-6 text-sm text-gray-600 text-center">
                Nunca compartiremos tu correo electrónico con terceros. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
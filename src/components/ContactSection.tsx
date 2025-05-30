import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  // Hook para detectar si el título está visible en pantalla
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Hook para el grid principal (contact info + form)
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    });
    
    setFormData({
      name: '',
      email: '',
      message: '',
      subject: ''
    });
    
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Animar el título y texto cuando entren en viewport */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contáctanos</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-sm sm:text-base">
            ¿Tienes alguna pregunta o sugerencia? ¿Quieres participar en el programa? Estamos aquí para escucharte.
          </p>
        </motion.div>
        
        {/* Animar el grid principal al entrar en viewport */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          {/* Información de contacto */}
          <div>
            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Teléfono</h4>
                      <p className="text-blue-700 leading-tight">+598 94 178 936</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                      <p className="text-blue-700 leading-tight">info@tardeazul.com</p>
                      <p className="text-blue-700 leading-tight">benjamin@tardeazul.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Dirección</h4>
                      <p className="text-blue-700 leading-tight">
                         Torre Triágulo Brava Parada 2, <br /> Punta del Este, 
                         <br /> Maldonado, Uruguay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus && (
                <div className={`p-4 rounded ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-blue-900 font-medium mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-900 font-medium mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-blue-900 font-medium mb-2">Asunto</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="general">Consulta general</option>
                  <option value="advertising">Publicidad</option>
                  <option value="suggestion">Sugerencia de música</option>
                  <option value="participation">Participación en el programa</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-900 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                Enviar mensaje
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mafagrowthdigital@gmail.com',
      link: 'mailto:mafagrowthdigital@gmail.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+56 9 4015 6689',
      link: 'tel:+56940156689'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Chile',
      link: null
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
      link: null
    }
  ];

  const services = [
    'Desarrollo Web Frontend',
    'Trafficker Digital',
    'Consultoría Digital',
    'Análisis y Optimización',
    'Otro'
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#eef3ff] to-[#dfe9ff]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6">
            Conversemos sobre el próximo gran paso de tu marca
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda una reunión o escríbeme directamente. Respondo en menos de 24 horas y puedo ayudarte a priorizar el roadmap ideal para tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] border border-white/70 bg-white p-10 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center space-x-2 rounded-2xl border border-[#0cf08f]/30 bg-[#0cf08f]/10 p-4"
                >
                  <CheckCircle className="h-5 w-5 text-[#0b9e68]" />
                  <p className="font-medium text-[#0b9e68]">
                    ¡Mensaje enviado exitosamente! Te contactaré pronto.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] py-6 text-base font-semibold text-white shadow-lg hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Enviar mensaje</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-white/70 bg-white p-10 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 rounded-2xl border border-muted/60 bg-gradient-to-r from-white via-white to-[#f5f7ff] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#190cff] to-[#00b3ff] text-white">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-primary hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/70 bg-white p-10 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0cf08f]/15 text-[#0b9e68]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Respuesta rápida</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Me comprometo a responder todos los mensajes en menos de 24 horas. Para urgencias puedes escribirme directo a WhatsApp y agendamos una llamada express.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open('tel:+56940156689', '_self')}
                    className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar ahora
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


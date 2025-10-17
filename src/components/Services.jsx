import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  TrendingUp,
  Smartphone,
  BarChart3,
  Target,
  Zap,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Sitios web & landings',
      description: 'Interfaces premium desarrolladas en React / Next.js con velocidad, SEO y narrativa de marca pensada para convertir.',
      bullets: ['Arquitectura de información estratégica', 'Integración con CRM y automatizaciones', 'Microinteracciones y animaciones suaves']
    },
    {
      icon: TrendingUp,
      title: 'Funnels de adquisición',
      description: 'Campañas de performance conectadas con funnels optimizados y nurturing automático para escalar ventas.',
      bullets: ['Estrategia de medios + creatividades', 'Automatización de leads con IA', 'Dashboards con métricas clave en tiempo real']
    },
    {
      icon: Smartphone,
      title: 'Branding & contenido',
      description: 'Identidad visual adaptable, guías de comunicación y contenido multiplataforma alineado a objetivos comerciales.',
      bullets: ['Diseño de sistemas visuales', 'Copys persuasivos basados en data', 'Paquetes de contenido para campañas']
    },
    {
      icon: BarChart3,
      title: 'Automatización & analítica',
      description: 'Implementamos flujos automatizados, dashboards y modelos predictivos para decisiones ágiles.',
      bullets: ['Integraciones con Make, Zapier o nativas', 'Alertas automáticas y reportes inteligentes', 'Testing continuo y optimización basada en datos']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Exploración',
      description: 'Workshop de descubrimiento, auditoría digital y mapeo de oportunidades.',
      icon: Target
    },
    {
      step: '02',
      title: 'Blueprint estratégico',
      description: 'Roadmap con prioridades, tácticas de marketing y stack tecnológico recomendado.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Producción & lanzamientos',
      description: 'Diseño, desarrollo e implementación ágil con retroalimentación constante.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimización continua',
      description: 'Análisis semanal, experimentos y automatizaciones para escalar resultados.',
      icon: BarChart3
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6">
            Equipo creativo + estratégico que ejecuta de principio a fin
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Desde el concepto hasta la optimización post-lanzamiento. El objetivo es claro: que tu negocio crezca con un sistema de marketing integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#190cff]/15 via-[#7200ff]/10 to-transparent blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#190cff] via-[#7200ff] to-[#00b3ff] text-white shadow-lg">
                  <service.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="relative mt-8 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[#190cff] to-[#00b3ff]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Metodología colaborativa
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos como una extensión de tu equipo para diseñar y ejecutar proyectos con visión de negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-left"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white p-6 shadow-lg">
                <div className="absolute -top-16 right-4 h-28 w-28 rounded-full bg-gradient-to-br from-[#190cff]/10 via-[#7200ff]/10 to-[#00b3ff]/10 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#190cff] to-[#00b3ff] text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                </div>
                <h4 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


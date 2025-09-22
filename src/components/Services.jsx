import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Smartphone, 
  BarChart3, 
  Target, 
  Globe,
  Zap,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web Frontend Moderno',
      description: 'Sitios web y aplicaciones con tecnologías de vanguardia, IA integrada y rendimiento superior.',
      features: [
        'React Server Components y Next.js 15 para SEO superior',
        'Integración de IA para personalización automática',
        'Progressive Web Apps (PWA) con capacidades nativas',
        'Optimización automática con herramientas de IA'
      ],
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital con IA',
      description: 'Campañas inteligentes que se optimizan automáticamente para maximizar el ROI.',
      features: [
        'Automatización de campañas con algoritmos de IA',
        'Personalización en tiempo real basada en comportamiento',
        'Marketing conversacional y chatbots inteligentes',
        'Análisis predictivo para optimización continua'
      ],
      color: 'text-accent'
    },
    {
      icon: BarChart3,
      title: 'Análisis Inteligente y Automatización',
      description: 'Sistemas que analizan, aprenden y optimizan tus métricas automáticamente.',
      features: [
        'Dashboards inteligentes con insights automáticos',
        'Predicción de tendencias con machine learning',
        'Automatización de reportes y alertas',
        'Optimización continua basada en datos'
      ],
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Consultoría en Transformación Digital',
      description: 'Estrategias integrales para aprovechar las tecnologías emergentes de 2025.',
      features: [
        'Implementación de IA en procesos de marketing',
        'Migración a arquitecturas web modernas',
        'Estrategias de automatización personalizada',
        'Capacitación en herramientas de IA y automatización'
      ],
      color: 'text-accent'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis',
      description: 'Evaluamos tu situación actual y definimos objetivos claros.',
      icon: Target
    },
    {
      step: '02',
      title: 'Estrategia',
      description: 'Desarrollamos un plan personalizado para alcanzar tus metas.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Ejecutamos la solución con las mejores prácticas del mercado.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimización',
      description: 'Monitoreamos y optimizamos continuamente los resultados.',
      icon: BarChart3
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales que combinan desarrollo web y marketing digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Mi Proceso de Trabajo
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado que garantiza resultados excepcionales
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
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


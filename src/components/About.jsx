import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Database, 
  Globe, 
  GitBranch, 
  Smartphone,
  BarChart3,
  Target
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: Code, level: 95 },
    { name: 'CSS3 / Tailwind', icon: Code, level: 90 },
    { name: 'JavaScript (ES6+)', icon: Code, level: 85 },
    { name: 'React.js', icon: Code, level: 80 },
    { name: 'Node.js', icon: Database, level: 70 },
    { name: 'MySQL', icon: Database, level: 75 },
    { name: 'Git & Github', icon: GitBranch, level: 85 },
    { name: 'Marketing Digital', icon: TrendingUp, level: 90 },
    { name: 'Google Ads', icon: Target, level: 85 },
    { name: 'Analytics', icon: BarChart3, level: 80 }
  ];

  const pillars = [
    {
      title: 'Performance con propósito',
      description: 'Cada decisión parte de la data. Diseñamos funnels y experiencias para generar crecimiento sostenible.'
    },
    {
      title: 'Tecnología centrada en personas',
      description: 'Integraciones con IA que potencian a tu equipo: automatizaciones, asistentes y reportes accionables.'
    },
    {
      title: 'Diseño que inspira confianza',
      description: 'Branding coherente, interfaces limpias y contenido estratégico para convertir visitas en clientes fieles.'
    }
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#eef3ff] to-[#f7f9ff]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
            Sobre mí
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6">
            Estratega digital y desarrollador obsesionado con los resultados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Combino la visión de un trafficker digital con la ejecución de un desarrollador frontend. Los proyectos se construyen con procesos claros, automatizaciones inteligentes y métricas que importan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12 items-stretch">
          {/* Historia y pilares */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl border border-white/70">
              <div className="absolute -top-20 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#190cff]/20 to-[#00b3ff]/10 blur-3xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Miguel Ángel Fuentes Alvis</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Más de cuatro años acompañando a marcas y emprendedores en su transformación digital. Diseñé procesos que integran tráfico pago, funnels, CRM y sitios web de alto rendimiento con stack moderno (React, Next.js, Node.js) y automatizaciones con IA.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mt-4">
                    Hoy lidero equipos pequeños y ágiles donde el foco está en escalar resultados, no sólo entregar piezas. Me involucro desde la estrategia hasta la optimización continua.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#190cff]/20 bg-primary/5 p-5">
                      <Globe className="h-6 w-6 text-primary mb-3" />
                      <p className="text-sm font-semibold text-foreground">Frontend Specialist</p>
                      <p className="text-xs text-muted-foreground">UX + velocidad + SEO técnico</p>
                    </div>
                    <div className="rounded-2xl border border-[#0cf08f]/30 bg-[#0cf08f]/5 p-5">
                      <TrendingUp className="h-6 w-6 text-[#0cf08f] mb-3" />
                      <p className="text-sm font-semibold text-foreground">Marketing Performance</p>
                      <p className="text-xs text-muted-foreground">Funnels, Ads y analítica</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/80 shadow-lg">
                    <img
                      src="/images/about-image-new.png"
                      alt="Miguel Fuentes trabajando"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xs rounded-2xl bg-white px-6 py-4 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">stack favorito</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["React", "Next.js", "Tailwind", "Node.js", "GA4", "Make"].map((item) => (
                        <span key={item} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills y pilares */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Habilidades clave</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white p-8 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Cómo trabajo</h3>
              <div className="space-y-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="relative rounded-2xl border border-muted/80 bg-gradient-to-r from-white via-white to-[#f4f7ff] p-5">
                    <div className="absolute -top-3 left-5 h-6 w-6 rounded-full bg-gradient-to-r from-[#190cff] to-[#7200ff]" />
                    <div className="relative">
                      <h4 className="text-lg font-semibold text-foreground">{pillar.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Launch ecommerce eco-friendly',
      description: 'Rediseño de marca, tienda online headless y funnel de adquisición omnicanal. Se integró CRM, automatización de correos y publicidad pagada en Meta + Google.',
      image: '/src/assets/portfolio-web-dev.jpg',
      category: 'web',
      technologies: ['Next.js', 'Shopify', 'Meta Ads', 'Klaviyo'],
      results: ['+312% ROI', '3.2x tasa de conversión', 'Automatizaciones IA para atención'],
      featured: true
    },
    {
      id: 2,
      title: 'Fintech B2B inbound machine',
      description: 'Desarrollo de sitio corporativo, materiales de apoyo y pipeline automatizado para captar leads calificados en LATAM.',
      image: '/src/assets/portfolio-marketing.jpg',
      category: 'marketing',
      technologies: ['HubSpot', 'Make', 'LinkedIn Ads', 'GA4'],
      results: ['+148% leads SQL', '-35% CPL', 'Nurturing automatizado'],
      featured: true
    },
    {
      id: 3,
      title: 'Landing con agenda automática',
      description: 'Landing page minimalista con storytelling, formulario calificador y agenda sincronizada con calendly + CRM.',
      image: '/src/assets/portfolio-web-dev.jpg',
      category: 'web',
      technologies: ['React', 'Tailwind', 'Calendly', 'Make'],
      results: ['70% tasa de cierre en demos', 'PageSpeed 96/100'],
      featured: false
    },
    {
      id: 4,
      title: 'Programa educativo evergreen',
      description: 'Funnel evergreen con webinars automatizados, secuencias de email y optimización de anuncios con creatividades dinámicas.',
      image: '/src/assets/portfolio-marketing.jpg',
      category: 'marketing',
      technologies: ['Meta Ads', 'YouTube Ads', 'ActiveCampaign', 'Notion'],
      results: ['+4200 leads', '+185% en ventas recurrentes'],
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: Globe },
    { id: 'web', label: 'Desarrollo Web', icon: Code },
    { id: 'marketing', label: 'Marketing Digital', icon: TrendingUp }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef2ff] via-[#f6f9ff] to-white" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
            Casos de éxito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6">
            Resultados tangibles para marcas que apuestan por crecer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Proyectos 360° que combinan estrategia, diseño y tecnología. Desde lanzamientos de e-commerce hasta funnels automatizados para empresas B2B.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'border-transparent bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] text-white shadow-lg'
                  : 'border-primary/20 text-primary hover:bg-primary/10'
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-3 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/80" />
              <div className="relative p-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      {project.category === 'web' ? 'Desarrollo' : 'Marketing'}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <span className="rounded-full bg-gradient-to-r from-[#190cff] to-[#00b3ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg">
                      Top
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.results && (
                  <div className="mt-6 rounded-2xl border border-[#0cf08f]/30 bg-[#0cf08f]/5 p-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-[#0b9e68]">Impacto</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#0cf08f]" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md hover:opacity-90"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Ver proyecto
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="h-3 w-3" />
                      Repositorio
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/60 bg-white p-12 shadow-xl">
            <p className="text-lg text-muted-foreground">
              ¿Listo para construir algo a la altura de tu marca? Diseñemos juntos un plan que acelere tus resultados.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-8 bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] px-10 py-6 text-base font-semibold text-white shadow-lg hover:opacity-90"
            >
              Reservar sesión estratégica
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;


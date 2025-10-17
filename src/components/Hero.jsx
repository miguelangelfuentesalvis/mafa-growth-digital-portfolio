import React from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles,
  Rocket,
  Wand2
} from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      icon: Sparkles,
      label: 'Estrategias digitales a medida'
    },
    {
      icon: Rocket,
      label: 'Automatizaciones con IA'
    },
    {
      icon: Wand2,
      label: 'Sitios web que convierten'
    }
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#edf2ff] to-[#dfe9ff]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#190cff]/30 via-[#7200ff]/20 to-[#00b3ff]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] bg-gradient-to-r from-[#aff0aa]/40 via-transparent to-[#0ce1ff]/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-36 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
              Agencia boutique · IA & Marketing
            </span>
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mt-6 leading-tight">
              Diseñamos experiencias digitales que <span className="bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] bg-clip-text text-transparent">conquistan clientes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Alineamos estrategia, creatividad y tecnología para que tu marca destaque. Sitios web, funnels y campañas conectadas por automatizaciones inteligentes listas para convertir.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 hover:opacity-90"
              >
                Agendar diagnóstico
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="border-primary/40 text-primary hover:bg-primary/10"
              >
                Ver casos de éxito
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-left shadow-sm backdrop-blur"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </li>
              ))}
            </motion.ul>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground mb-4">Sígueme</p>
              <div className="flex gap-3 justify-center lg:justify-start">
                {[{
                  href: 'https://www.facebook.com/mafagrowthdigital/',
                  icon: Facebook,
                  label: 'Facebook'
                }, {
                  href: 'https://www.instagram.com/mafagrowthdigital/',
                  icon: Instagram,
                  label: 'Instagram'
                }, {
                  href: 'https://x.com/MafaGrowth',
                  icon: Twitter,
                  label: 'Twitter'
                }, {
                  href: 'https://www.linkedin.com/in/mafagrowthdigital',
                  icon: Linkedin,
                  label: 'LinkedIn'
                }].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center h-12 w-12 rounded-full bg-white/80 text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#190cff] hover:via-[#7200ff] hover:to-[#00b3ff] hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen / mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#190cff]/20 via-[#7200ff]/20 to-[#00b3ff]/20 blur-2xl" />
              <div className="relative rounded-[2rem] bg-white shadow-2xl overflow-hidden border border-white/70">
                <img
                  src="/images/logo-optimized.png"
                  alt="Mafa Growth Digital Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 grid grid-cols-3 gap-4">
                {[{
                  value: '+300%',
                  label: 'ROI promedio',
                  icon: TrendingUp,
                  color: 'from-[#190cff]/10 to-[#00b3ff]/20'
                }, {
                  value: '1.1K',
                  label: 'Comunidad',
                  icon: Users,
                  color: 'from-[#0cf08f]/10 to-[#aff0aa]/30'
                }, {
                  value: '+150%',
                  label: 'Conversiones',
                  icon: Award,
                  color: 'from-[#7200ff]/10 to-[#190cff]/20'
                }].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl bg-gradient-to-br ${stat.color} px-4 py-3 shadow-lg backdrop-blur`}
                  >
                    <stat.icon className="h-5 w-5 text-primary" />
                    <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
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

export default Hero;


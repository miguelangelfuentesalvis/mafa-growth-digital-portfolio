import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo-optimized.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/miguelangelfuentesalvis',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/miguel-angel-fuentes-alvis-944067106/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mafagrowthdigital@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+56940156689',
      label: 'Teléfono'
    }
  ];

  const quickLinks = [
    { label: 'Inicio', href: 'hero' },
    { label: 'Sobre Mí', href: 'about' },
    { label: 'Servicios', href: 'services' },
    { label: 'Portafolio', href: 'portfolio' },
    { label: 'Contacto', href: 'contact' }
  ];

  const services = [
    'Desarrollo Web Frontend',
    'Trafficker Digital',
    'Consultoría Digital',
    'Análisis y Optimización'
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-[#eef2ff] to-[#dde6ff]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#190cff]/20 via-[#7200ff]/15 to-[#00b3ff]/15 blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src="/images/mafalogo-1.png" alt="Mafa Growth Digital" className="h-14 w-auto" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Mafa Growth Digital</span>
                <p className="text-xs text-muted-foreground">Marketing · Desarrollo · Automatización</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Diseñamos ecosistemas digitales que conectan estrategia, creatividad y tecnología para marcas que quieren crecer con propósito. IA + data + ejecución impecable.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#190cff] hover:via-[#7200ff] hover:to-[#00b3ff] hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.32em] text-foreground">Enlaces rápidos</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/40 transition-transform group-hover:scale-150" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.32em] text-foreground">Servicios</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/40" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-xl">
            <h3 className="font-display text-sm uppercase tracking-[0.32em] text-foreground">Contacto</h3>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary">Email</p>
                <a
                  href="mailto:mafagrowthdigital@gmail.com"
                  className="mt-1 block font-semibold text-foreground transition-colors hover:text-primary"
                >
                  mafagrowthdigital@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary">Teléfono</p>
                <a
                  href="tel:+56940156689"
                  className="mt-1 block font-semibold text-foreground transition-colors hover:text-primary"
                >
                  +56 9 4015 6689
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary">Ubicación</p>
                <p className="mt-1 font-semibold text-foreground">Chile</p>
              </div>
            </div>
            <Button
              onClick={scrollToTop}
              className="mt-8 w-full bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] text-white shadow-lg hover:opacity-90"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Volver arriba
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/60 pt-8 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mafa Growth Digital. Todos los derechos reservados.</p>
          <p className="text-xs">Diseñado y desarrollado por Miguel Ángel Fuentes Alvis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


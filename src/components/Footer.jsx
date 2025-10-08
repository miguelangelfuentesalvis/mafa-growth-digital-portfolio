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
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/mafalogo-1.png" alt="Mafa Growth Digital" className="h-16 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Impulso tu negocio con soluciones digitales que generan resultados. 
              Combino desarrollo web y marketing digital para crear experiencias que convierten.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href="mailto:mafagrowthdigital@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  mafagrowthdigital@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Teléfono</p>
                <a
                  href="tel:+56940156689"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +56 9 4015 6689
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Ubicación</p>
                <p className="text-muted-foreground text-sm">Chile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Mafa Growth Digital. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Desarrollado con ❤️ por Miguel Ángel Fuentes Alvis
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Volver Arriba</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


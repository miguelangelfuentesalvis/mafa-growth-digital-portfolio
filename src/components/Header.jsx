import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-white/40 shadow-[0_10px_30px_-20px_rgba(16,21,51,0.6)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/mafalogo-1.png" alt="Mafa Growth Digital" className="h-16 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Agencia digital</span>
              <span className="text-sm text-muted-foreground">Crecimiento impulsado por IA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Portafolio
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] hover:opacity-90 shadow-lg shadow-primary/30"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                Portafolio
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#190cff] via-[#7200ff] to-[#00b3ff] hover:opacity-90 w-fit shadow-md shadow-primary/30"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Award, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen del logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="/images/logo-optimized.png" 
                alt="Mafa Growth Digital Logo" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Contenido de texto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Impulsa tu negocio con{' '}
                <span className="text-primary">IA y soluciones digitales</span>{' '}
                que generan resultados exponenciales
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Especialista en tecnologías emergentes que combina inteligencia artificial, 
                marketing digital avanzado y desarrollo web moderno para crear soluciones 
                automatizadas que generan resultados medibles y escalables.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Ver Portafolio
                </Button>
              </motion.div>

              {/* Redes sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-sm text-muted-foreground mb-4">Sígueme en mis redes sociales:</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://www.facebook.com/mafagrowthdigital/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/mafagrowthdigital/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://x.com/MafaGrowth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mafagrowthdigital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center bg-card p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">+300%</h3>
              <p className="text-muted-foreground">ROI Promedio</p>
            </div>
            <div className="text-center bg-card p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">1,156</h3>
              <p className="text-muted-foreground">Seguidores Instagram</p>
            </div>
            <div className="text-center bg-card p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">+150%</h3>
              <p className="text-muted-foreground">Conversiones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


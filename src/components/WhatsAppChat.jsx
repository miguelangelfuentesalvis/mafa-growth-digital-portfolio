import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '+56940156689';
  const defaultMessage = '¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web y marketing digital.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-gradient-to-br from-[#0cf08f] via-[#00b3ff] to-[#190cff] p-4 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          aria-label="Abrir chat de WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </motion.div>

      {/* WhatsApp Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#0cf08f] via-[#00b3ff] to-[#190cff] p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Mafa Growth Digital</h3>
                  <p className="text-xs opacity-90">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="min-h-[200px] bg-[#f4f8ff] p-4">
              <div className="space-y-3">
                {/* Bot Message */}
                <div className="flex items-start space-x-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0cf08f] to-[#00b3ff]">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="max-w-[220px] rounded-2xl bg-white p-3 text-sm text-gray-800 shadow-sm">
                    <p>
                      ¡Hola! 👋 Soy Miguel de Mafa Growth Digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0cf08f] to-[#00b3ff]">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="max-w-[220px] rounded-2xl bg-white p-3 text-sm text-gray-800 shadow-sm">
                    <p>
                      ¿En qué puedo ayudarte hoy? Especializo en desarrollo web y marketing digital con IA.
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2 mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Respuestas rápidas</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full rounded-xl bg-white p-2 text-left text-sm text-gray-700 shadow-sm transition-colors hover:bg-primary/5"
                  >
                    💻 Desarrollo Web Frontend
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full rounded-xl bg-white p-2 text-left text-sm text-gray-700 shadow-sm transition-colors hover:bg-primary/5"
                  >
                    📈 Marketing Digital & IA
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full rounded-xl bg-white p-2 text-left text-sm text-gray-700 shadow-sm transition-colors hover:bg-primary/5"
                  >
                    🚀 Consultoría Digital
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-primary/10 bg-white p-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-br from-[#0cf08f] via-[#00b3ff] to-[#190cff] px-4 py-2 text-white shadow-lg transition-all hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Iniciar conversación</span>
              </button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Respuesta habitual en menos de 1 hora
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;


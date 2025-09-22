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
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
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
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
            <div className="p-4 bg-gray-50 min-h-[200px]">
              <div className="space-y-3">
                {/* Bot Message */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[220px]">
                    <p className="text-sm text-gray-800">
                      ¡Hola! 👋 Soy Miguel de Mafa Growth Digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[220px]">
                    <p className="text-sm text-gray-800">
                      ¿En qué puedo ayudarte hoy? Especializo en desarrollo web y marketing digital con IA.
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-gray-500 font-medium">Respuestas rápidas:</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm text-gray-700"
                  >
                    💻 Desarrollo Web Frontend
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm text-gray-700"
                  >
                    📈 Marketing Digital & IA
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm text-gray-700"
                  >
                    🚀 Consultoría Digital
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Iniciar conversación</span>
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Respuesta típica en menos de 1 hora
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;


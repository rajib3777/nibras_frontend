import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+8801909995555"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#C89B3C] text-white p-4 rounded-full shadow-lg shadow-[#C89B3C]/40 flex items-center justify-center"
      style={{
        boxShadow: "0 0 0 0 rgba(200, 155, 60, 1)",
        animation: "pulse-amber 2s infinite"
      }}
    >
      <Phone size={28} className="fill-current" />
      <style>{`
        @keyframes pulse-amber {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(200, 155, 60, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px rgba(200, 155, 60, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(200, 155, 60, 0);
          }
        }
      `}</style>
    </motion.a>
  );
};

export default FloatingCallButton;

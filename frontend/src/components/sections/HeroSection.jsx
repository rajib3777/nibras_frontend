import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../../api/client';
import { useTranslation } from 'react-i18next';
import defaultHeroImage from '../../assets/hero.png';

const HeroSection = () => {
  const { i18n } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);

  const { data: slidersData, isLoading } = useQuery({
    queryKey: ['sliders'],
    queryFn: async () => {
      const response = await apiClient.get('/core/sliders/');
      return response.data;
    }
  });

  const sliders = slidersData?.results || slidersData || [];

  useEffect(() => {
    if (sliders.length > 1) {
      const timer = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % sliders.length);
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [sliders.length]);

  if (isLoading) return (
    <div className="w-full h-[80vh] bg-[#0A3A23] flex items-center justify-center text-white font-serif text-2xl">
      Loading...
    </div>
  );

  const activeSlider = sliders.length > 0 ? sliders[currentIdx] : {
    title: "Nibras Foundation",
    subtitle: "Lighting hearts with knowledge",
    button_text: "Our Programs",
    image: defaultHeroImage
  };

  const heroImage = activeSlider.image.startsWith('http') || activeSlider.image.startsWith('data:') || activeSlider.image.startsWith('/')
    ? activeSlider.image 
    : `${API_BASE_URL}${activeSlider.image}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    },
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A3A23]">
      
      {/* Background Image with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
             animate={{ scale: 1.1 }}
             transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
             className="w-full h-full"
          >
            <img 
              src={heroImage} 
              alt={activeSlider.title} 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A23]/80 via-[#0A3A23]/40 to-[#0A3A23]/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A3A23]/60 to-transparent z-10" />
      
      {/* Floating Light Particles */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C89B3C] rounded-full blur-[100px] opacity-30 z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#115E39] rounded-full blur-[120px] opacity-40 z-10"
      />

      {/* Content */}
      <div className="relative z-20 container-custom text-center px-4 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="overflow-hidden mb-4">
               <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
                 {activeSlider.title}
               </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-2">
               <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
                 {activeSlider.subtitle}
               </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-12">
               <p className="font-serif text-3xl md:text-5xl text-[#C89B3C] drop-shadow-md" dir="rtl">
                 إرساء القلوب بالبصائر
               </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.a 
                href={activeSlider.button_link || "#"}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/40 text-white px-10 py-3.5 rounded-full text-[15px] font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-white inline-block"
              >
                {activeSlider.button_text}
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(200,155,60,0.6)" }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ["0px 0px 0px 0px rgba(200,155,60,0)", "0px 0px 15px 5px rgba(200,155,60,0.3)", "0px 0px 0px 0px rgba(200,155,60,0)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-[#C89B3C] to-[#B8860B] border border-[#D4AF60] text-white px-10 py-3.5 rounded-full text-[15px] font-bold tracking-wide transition-all"
              >
                Donate Now
              </motion.button>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

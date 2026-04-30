import React from 'react';
import { motion } from 'framer-motion';
import studentsImg from '../../assets/hero.png';
import { useSettings } from '../../hooks/useSettings';

const AboutMission = () => {
  const { data: settings } = useSettings();
  
  const siteName = settings?.site_name || 'Nibras Foundation';
  const aboutText = settings?.about_short || 'Dedicated to lighting hearts with knowledge. We provide quality education, memorization of the Quran, and social welfare programs to build a better future for our community.';
  return (
    <section className="section-padding bg-gradient-to-b from-[#FDFBF7] to-[#F2F0E6]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#115E39]">
            About {siteName}
          </h2>
          <div className="w-24 h-1 bg-[#C89B3C] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl font-semibold text-[#115E39] mb-4">
                Our Mission & Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {aboutText}
              </p>
            </div>
            
            <button className="btn-primary">
              Learn More About Us
            </button>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-[#115E39]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={studentsImg} 
                alt="Students learning" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C89B3C] rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#115E39] rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;

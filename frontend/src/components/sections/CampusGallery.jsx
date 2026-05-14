import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';
import img1 from '../../assets/home/1.1.JPG';
import img2 from '../../assets/home/1.2.jpeg';
import img3 from '../../assets/home/1.3.jpg';

const CampusGallery = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const images = [
    { src: img1, className: "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" },
    { src: img2, className: "col-span-1 row-span-1 aspect-square" },
    { src: img3, className: "col-span-1 row-span-1 aspect-square" },
  ];

  return (
    <section className="py-20 bg-[#FAFAF8] relative">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-label mb-4">
                <ImageIcon size={12} /> {t('gallery_label')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-black text-[#0A3A23] mb-4"
            >
              {t('gallery_title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              {t('gallery_desc')}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <button className="flex items-center gap-2 text-[#115E39] font-bold group hover:text-[#C89B3C] transition-colors">
              {t('gallery_view_all')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3A23]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img.src} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;

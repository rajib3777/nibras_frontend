import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import chairmanImg from '../../assets/home/1390699_206186186231543_378466272_n.jpg'; // We'll use this existing image

const ChairmanMessage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FAFAF8] to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#115E39]/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto group">
              <div className="absolute inset-0 bg-[#0A3A23]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={chairmanImg} 
                alt="Chairman" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute top-8 -left-6 w-full h-full border-2 border-[#C89B3C]/30 rounded-2xl -z-10" />
            
            {/* Arabic Calligraphy decoration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-2 z-20"
            >
              <div className="w-full h-full border border-dashed border-[#C89B3C] rounded-full flex items-center justify-center">
                <span className="font-arabic text-2xl text-[#115E39]">ن</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C89B3C]" />
              <span className="text-[#C89B3C] font-bold text-sm uppercase tracking-widest">{t('chairman_label')}</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0A3A23] mb-8 leading-tight">
              {t('chairman_title')}
            </h2>

            <div className="relative">
              <Quote size={60} className="absolute -top-6 -left-4 text-[#115E39]/10 rotate-180" />
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed relative z-10 font-medium italic">
                "{t('chairman_quote')}"
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#115E39] to-[#C89B3C] rounded-full" />
              <div>
                <h4 className="font-serif text-xl font-bold text-[#0A3A23]">{t('chairman_name')}</h4>
                <p className="text-sm text-gray-500 font-semibold">{t('chairman_designation')}</p>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;

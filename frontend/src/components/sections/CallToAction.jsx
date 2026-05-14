import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A3A23] via-[#115E39] to-[#0A3A23]" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[20px] border-[#C89B3C]/20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[20px] border-[#1A8B54]/30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 text-center max-w-4xl mx-auto shadow-2xl" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-black text-white mb-6"
          >
            {t('cta_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            {t('cta_desc')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/admission" className="w-full sm:w-auto">
              <button className="w-full btn-gold py-4 px-8 text-base shadow-[0_0_20px_rgba(200,155,60,0.4)]">
                {t('cta_btn')} <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> {t('cta_contact')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

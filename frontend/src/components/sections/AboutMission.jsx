import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';
import studentsImg from '../../assets/home/1.2.jpeg';

const pillars = [
  { en: 'Quranic Excellence', bn: 'কুরআনিক শ্রেষ্ঠত্ব', ar: 'التميز القرآني' },
  { en: 'Academic Rigor', bn: 'একাডেমিক কঠোরতা', ar: 'الصرامة الأكاديمية' },
  { en: 'Character Building', bn: 'চরিত্র গঠন', ar: 'بناء الشخصية' },
  { en: 'Community Service', bn: 'কমিউনিটি সেবা', ar: 'خدمة المجتمع' },
];

const AboutMission = () => {
  const { t, i18n } = useTranslation();
  const { data: settings } = useSettings();
  const aboutText = settings?.about_short || t('about_desc');

  const getPillar = (p) => {
    if (i18n.language === 'bn') return p.bn;
    if (i18n.language === 'ar') return p.ar;
    return p.en;
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F0EDE4] relative overflow-hidden">
      {/* BG geometric pattern */}
      <div className="absolute inset-0 geo-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #115E39, transparent)' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3A23]/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img src={studentsImg} alt="Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 right-6 z-20 glass-dark rounded-2xl px-5 py-4 text-white"
              >
                <div className="text-3xl font-black font-sans-ui text-[#C89B3C]">2006</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">
                  {i18n.language === 'bn' ? 'প্রতিষ্ঠিত' : i18n.language === 'ar' ? 'تأسست' : 'Established'}
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#C89B3C]/30 rounded-2xl rotate-12 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#115E39]/8 rounded-full blur-xl pointer-events-none" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="order-1 lg:order-2 space-y-6"
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Label */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <span className="section-label">
                <Sparkles size={12} />
                {t('about_label')}
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#0A3A23] leading-tight">
              {t('about_title')}
            </h2>

            {/* Gold bar */}
            <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #C89B3C, #E5C167)' }} />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {aboutText}
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 group hover:border-[#115E39]/20 hover:shadow-md transition-all"
                >
                  <CheckCircle size={16} className="text-[#115E39] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-700">{getPillar(p)}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2"
              >
                {t('learn_more')} <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline flex items-center gap-2"
              >
                {t('history')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trophy, BookOpen, GraduationCap, Users } from 'lucide-react';

const AchievementsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    { icon: BookOpen, value: '500+', label: t('ach_hafiz'), color: 'from-[#115E39] to-[#0A3A23]' },
    { icon: GraduationCap, value: '12K+', label: t('ach_graduates'), color: 'from-[#C89B3C] to-[#E5C167]' },
    { icon: Trophy, value: '25+', label: t('ach_awards'), color: 'from-[#1A8B54] to-[#115E39]' },
    { icon: Users, value: '98%', label: t('ach_satisfaction'), color: 'from-[#A38634] to-[#C89B3C]' },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 geo-grid opacity-30 pointer-events-none" />
      <div className="container-custom relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label mb-4">
              <Trophy size={12} className="text-[#115E39]" /> {t('achievements_label')}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-black text-[#0A3A23] mb-4"
          >
            {t('achievements_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            {t('achievements_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(17,94,57,0.08)] hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon size={30} className="text-white" />
              </div>
              <h3 className="font-sans-ui text-4xl md:text-5xl font-black text-[#0A3A23] mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

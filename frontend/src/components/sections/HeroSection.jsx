import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../../api/client';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import defaultHeroImage from '../../assets/home/1.1.JPG';
import slide2 from '../../assets/home/1.2.jpeg';
import slide3 from '../../assets/home/1.3.jpg';
import heroVideo from '../../assets/home/4. Nibras Vedio Adv..mp4';

const LOCAL_SLIDERS = [
  { video: heroVideo, titleKey: 'hero_title', subtitleKey: 'hero_subtitle' },
  { image: slide2, titleKey: 'quran_learning', subtitleKey: 'about_label' },
  { image: slide3, titleKey: 'academic_info', subtitleKey: 'programs_label' },
];

const STATS = [
  { key: 'stat_students', value: '2,400+', icon: '🎓' },
  { key: 'stat_teachers', value: '120+', icon: '👨‍🏫' },
  { key: 'stat_years', value: '18+', icon: '⭐' },
  { key: 'stat_branches', value: '4', icon: '🏛️' },
];



const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [statCounts, setStatCounts] = useState([0, 0, 0, 0]);

  const { data: slidersData } = useQuery({
    queryKey: ['sliders'],
    queryFn: async () => { const r = await apiClient.get('/core/sliders/'); return r.data; },
    retry: false,
  });

  const sliders = slidersData?.results?.length > 0 ? slidersData.results : LOCAL_SLIDERS;

  const activeSlider = sliders[currentIdx] || LOCAL_SLIDERS[0];

  let heroImage = defaultHeroImage;
  if (activeSlider?.image) {
    if (typeof activeSlider.image === 'string' && activeSlider.image.startsWith('/media/')) {
       heroImage = `${API_BASE_URL}${activeSlider.image}`;
    } else {
       heroImage = activeSlider.image;
    }
  }



  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0A3A23] mt-2" style={{ marginTop: '5rem' }}>

      {/* BG Image / Video */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {activeSlider.video ? (
            <video
              src={activeSlider.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center opacity-80"
            />
          ) : (
            <img src={heroImage} alt="hero" className="w-full h-full object-cover object-top opacity-80" />
          )}
        </motion.div>
      </AnimatePresence>





      {/* Main Content */}
      <div className="relative z-10 container-custom w-full h-full pt-10 pb-0 flex flex-col justify-between min-h-[90vh]" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="flex-1 flex flex-col justify-center py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIdx}-${i18n.language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="p-4 md:p-8 relative">
                
                {/* Arabic Calligraphy Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C89B3C]" />
                  <span className="font-arabic text-xl md:text-2xl text-[#C89B3C]" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C89B3C]" />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 drop-shadow-2xl"
                >
                  {activeSlider.title || t(activeSlider.titleKey || 'hero_title')}
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="mb-4"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-[#C89B3C] mb-2">
                    {activeSlider.subtitle || t(activeSlider.subtitleKey || 'hero_subtitle')}
                  </h2>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                    {t('hero_desc')}
                  </p>
                </motion.div>

                {/* Arabic Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="my-5 py-2 border-l-2 border-[#C89B3C] pl-4"
                >
                  <p className="font-arabic text-xl md:text-2xl text-[#E5C167] drop-shadow-md" dir="rtl">
                    {t('hero_arabic')}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <motion.a
                    href="#programs"
                    whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(200,155,60,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-gold flex items-center gap-2 text-sm px-7 py-3.5"
                  >
                    {t('explore_programs')}
                    <ArrowRight size={16} />
                  </motion.a>
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/10 flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:bg-white/20 border border-white/20"
                  >
                    <Play size={14} className="fill-white" />
                    {t('learn_more')}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 max-w-4xl w-full relative z-10"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.key}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.6)' }}
              className="stat-card"
            >
              <div className="text-2xl mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-black text-white font-sans-ui leading-none mb-2 drop-shadow-md">{stat.value}</div>
              <div className="text-sm lg:text-[15px] text-white font-bold tracking-wide drop-shadow-sm">{t(stat.key)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slider Controls */}
      {sliders.length > 1 && (
        <div className="absolute bottom-1/2 right-4 md:right-8 z-30 flex flex-col gap-2 translate-y-1/2">
          <button
            onClick={() => setCurrentIdx(p => (p - 1 + sliders.length) % sliders.length)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentIdx(p => (p + 1) % sliders.length)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-md"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20 md:h-24">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

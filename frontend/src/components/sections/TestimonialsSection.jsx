import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import t1 from '../../assets/home/1.1.JPG';
import t2 from '../../assets/home/1.2.jpeg';
import t3 from '../../assets/home/1.3.jpg';

const testimonials = [
  { id: 1, name: 'Ahmed Raza', nameBn: 'আহমেদ রেজা', nameAr: 'أحمد رضا', role: 'Parent', roleBn: 'অভিভাবক', roleAr: 'ولي الأمر', content: 'Nibras Foundation has completely transformed my son\'s approach to learning. The blend of Hifz and general education is exactly what we were looking for.', contentBn: 'নিবরাস ফাউন্ডেশন আমার ছেলের পড়াশোনার পদ্ধতিকে সম্পূর্ণরূপে পরিবর্তন করেছে। হিফজ এবং সাধারণ শিক্ষার সমন্বয় ঠিক যা আমরা খুঁজছিলাম।', contentAr: 'غيّرت مؤسسة نبراس كليًا نهج ابني في التعلم. إن مزج الحفظ مع التعليم العام هو بالضبط ما كنا نبحث عنه.', image: t1, rating: 5 },
  { id: 2, name: 'Mariam Siddiqua', nameBn: 'মরিয়ম সিদ্দিকা', nameAr: 'مريم صديقة', role: 'Student', roleBn: 'শিক্ষার্থী', roleAr: 'طالبة', content: 'The teachers here are incredibly supportive. I feel like I\'m growing not just academically, but spiritually and personally too.', contentBn: 'এখানকার শিক্ষকরা অবিশ্বাস্যভাবে সহায়ক। আমি অনুভব করছি যে আমি শুধু একাডেমিকভাবে নয়, আধ্যাত্মিকভাবে এবং ব্যক্তিগতভাবেও বিকশিত হচ্ছি।', contentAr: 'المعلمون هنا داعمون بشكل لا يصدق. أشعر أنني أنمو ليس فقط أكاديميًا، بل روحيًا وشخصيًا أيضًا.', image: t2, rating: 5 },
  { id: 3, name: 'Dr. Salman Farsi', nameBn: 'ড. সালমান ফারসি', nameAr: 'د. سلمان فارسي', role: 'Community Member', roleBn: 'কমিউনিটি সদস্য', roleAr: 'عضو المجتمع', content: 'A beacon of light for our community. Their social welfare projects are as impressive as their educational standards.', contentBn: 'আমাদের সম্প্রদায়ের জন্য আলোর প্রদীপ। তাদের সামাজিক কল্যাণ প্রকল্পগুলি তাদের শিক্ষাগত মানের মতোই চিত্তাকর্ষক।', contentAr: 'منارة للمجتمع. مشاريعهم الخيرية رائعة بقدر مستواهم التعليمي.', image: t3, rating: 5 },
];

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);

  const getName = (item) => i18n.language === 'bn' ? item.nameBn : i18n.language === 'ar' ? item.nameAr : item.name;
  const getRole = (item) => i18n.language === 'bn' ? item.roleBn : i18n.language === 'ar' ? item.roleAr : item.role;
  const getContent = (item) => i18n.language === 'bn' ? item.contentBn : i18n.language === 'ar' ? item.contentAr : item.content;

  const prev = () => setActiveIdx(p => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx(p => (p + 1) % testimonials.length);

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A3A23 0%, #115E39 50%, #0f4a2d 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C89B3C, transparent)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#C89B3C] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} /> {t('testimonials_label')}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-white mt-2">
            {t('testimonials_title')}
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveIdx(i)}
              className={`relative p-7 rounded-3xl cursor-pointer transition-all duration-500 ${
                activeIdx === i
                  ? 'bg-[#C89B3C] shadow-2xl shadow-[#C89B3C]/30 scale-105'
                  : 'glass hover:bg-white/10'
              }`}
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            >
              {/* Quote icon */}
              <Quote size={36} className={`absolute top-6 right-6 ${activeIdx === i ? 'text-white/30' : 'text-white/10'} fill-current`} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(item.rating).fill(0).map((_, s) => (
                  <Star key={s} size={13} className={`${activeIdx === i ? 'text-white' : 'text-[#C89B3C]'} fill-current`} />
                ))}
              </div>

              {/* Content */}
              <p className={`text-sm leading-relaxed mb-6 ${activeIdx === i ? 'text-white' : 'text-white/80'}`}>
                "{getContent(item)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img src={item.image} alt={getName(item)} className={`w-11 h-11 rounded-full object-cover border-2 ${activeIdx === i ? 'border-white/50' : 'border-[#C89B3C]/50'}`} />
                <div>
                  <p className={`font-bold text-sm ${activeIdx === i ? 'text-white' : 'text-white'}`}>{getName(item)}</p>
                  <p className={`text-xs font-bold uppercase tracking-widest ${activeIdx === i ? 'text-white/70' : 'text-[#C89B3C]'}`}>{getRole(item)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3">
          <button onClick={prev} className="w-10 h-10 rounded-full glass text-white flex items-center justify-center hover:bg-white/20 transition-all">
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIdx ? 'w-8 h-3 bg-[#C89B3C]' : 'w-3 h-3 bg-white/30 hover:bg-white/50'}`} />
          ))}
          <button onClick={next} className="w-10 h-10 rounded-full glass text-white flex items-center justify-center hover:bg-white/20 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

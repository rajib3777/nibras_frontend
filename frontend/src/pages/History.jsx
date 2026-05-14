import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History as HistoryIcon, MapPin, GraduationCap, Trophy } from 'lucide-react';
import campusImg from '../assets/generated/madrasah_campus_1778701296088.png';

const History = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const timelineEvents = [
    {
      year: '2006',
      title: i18n.language === 'bn' ? 'যাত্রা শুরু' : i18n.language === 'ar' ? 'بداية الرحلة' : 'The Beginning',
      desc: t('history_desc_1'),
      icon: HistoryIcon,
      color: 'from-[#115E39] to-[#0A3A23]',
    },
    {
      year: '2006',
      title: i18n.language === 'bn' ? 'নেতৃত্ব প্রতিষ্ঠা' : i18n.language === 'ar' ? 'تأسيس القيادة' : 'Leadership Established',
      desc: t('history_desc_2'),
      icon: MapPin,
      color: 'from-[#C89B3C] to-[#E5C167]',
    },
    {
      year: '2015',
      title: i18n.language === 'bn' ? 'একাডেমিক শ্রেষ্ঠত্ব' : i18n.language === 'ar' ? 'التميز الأكاديمي' : 'Academic Excellence',
      desc: i18n.language === 'bn' ? 'অসংখ্য শিক্ষার্থী সাফল্যের সাথে হাফেজ-এ-কুরআন সম্পন্ন করে।' : i18n.language === 'ar' ? 'أكمل العديد من الطلاب بنجاح حفظ القرآن الكريم.' : 'Numerous students successfully completed Hifz-e-Quran alongside their academic studies.',
      icon: GraduationCap,
      color: 'from-[#1A8B54] to-[#115E39]',
    },
    {
      year: '2020+',
      title: i18n.language === 'bn' ? 'আধুনিকায়ন ও প্রসার' : i18n.language === 'ar' ? 'التحديث والتوسع' : 'Modernization & Expansion',
      desc: i18n.language === 'bn' ? 'নতুন ক্যাম্পাস, ডিজিটাল ক্লাসরুম এবং বিশ্বমানের সুযোগ-সুবিধার সংযোজন।' : i18n.language === 'ar' ? 'إضافة حرم جامعي جديد وفصول دراسية رقمية ومرافق عالمية المستوى.' : 'Addition of new campuses, digital classrooms, and world-class facilities.',
      icon: Trophy,
      color: 'from-[#A38634] to-[#C89B3C]',
    }
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A23]">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <img src={campusImg} alt="History" className="w-full h-full object-cover object-center opacity-40" />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAF8" />
          </svg>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 text-center px-4"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/50 text-[#C89B3C] text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            {t('history_title')}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-white drop-shadow-lg">
            {t('history')}
          </h1>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="container-custom py-24 relative z-10">
        <div className="max-w-4xl mx-auto relative" dir={isRTL ? 'rtl' : 'ltr'}>
          
          {/* Vertical Line */}
          <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#115E39]/20 via-[#C89B3C]/40 to-[#115E39]/10 hidden md:block ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`} />

          <div className="space-y-16">
            {timelineEvents.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? (isRTL ? 'md:flex-row-reverse' : 'md:flex-row') : (isRTL ? 'md:flex-row' : 'md:flex-row-reverse')}`}
              >
                
                {/* Content Box */}
                <div className="flex-1 w-full text-center md:text-start relative">
                  <div className={`bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(17,94,57,0.08)] hover:-translate-y-2 transition-all duration-500 relative z-10 ${index % 2 === 0 ? (isRTL ? 'md:text-right' : 'md:text-right') : (isRTL ? 'md:text-left' : 'md:text-left')}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    <span className="text-[#C89B3C] font-black text-4xl font-serif block mb-3">{item.year}</span>
                    <h3 className="text-2xl font-bold text-[#0A3A23] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl items-center justify-center border-4 border-[#FAFAF8] z-20">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default History;

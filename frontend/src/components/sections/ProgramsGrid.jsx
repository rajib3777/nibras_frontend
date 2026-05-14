import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import apiClient, { API_BASE_URL } from '../../api/client';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import p1 from '../../assets/home/1.1.JPG';
import p2 from '../../assets/home/1.2.jpeg';
import p3 from '../../assets/home/1.3.jpg';
import p4 from '../../assets/generated/madrasah_campus_1778701296088.png';
import p5 from '../../assets/home/1.3.jpg';
import p6 from '../../assets/home/1.1.JPG';

const fallbackPrograms = [
  {
    id: 'f1', name: 'Tahfizul Quran', namebn: 'তাহফিজুল কুরআন', namear: 'تحفيظ القرآن',
    description: 'Comprehensive Quran memorization program with proper Tajweed and Qira\'at.',
    descbn: 'সঠিক তাজবীদ ও কিরাতসহ ব্যাপক কুরআন মুখস্থকরণ প্রোগ্রাম।',
    descar: 'برنامج شامل لحفظ القرآن الكريم مع التجويد الصحيح والقراءات.',
    image: p1,
    badge: '3-7 Years', badgeColor: 'from-[#115E39] to-[#1A8B54]',
  },
  {
    id: 'f2', name: 'Islamic Studies', namebn: 'ইসলামিক স্টাডিজ', namear: 'الدراسات الإسلامية',
    description: 'In-depth study of Hadith, Fiqh, Aqeedah, and Islamic History.',
    descbn: 'হাদিস, ফিকহ, আকীদা ও ইসলামী ইতিহাসের গভীর অধ্যয়ন।',
    descar: 'دراسة معمقة في الحديث والفقه والعقيدة والتاريخ الإسلامي.',
    image: p2,
    badge: 'All Levels', badgeColor: 'from-[#C89B3C] to-[#E5C167]',
  },
  {
    id: 'f3', name: 'General Education', namebn: 'সাধারণ শিক্ষা', namear: 'التعليم العام',
    description: 'Modern curriculum including Science, Mathematics, English and Computer Science.',
    descbn: 'বিজ্ঞান, গণিত, ইংরেজি ও কম্পিউটার বিজ্ঞান সহ আধুনিক পাঠ্যক্রম।',
    descar: 'منهج حديث يشمل العلوم والرياضيات والإنجليزية وعلوم الحاسوب.',
    image: p3,
    badge: 'Class 1-12', badgeColor: 'from-[#0A3A23] to-[#115E39]',
  },
  {
    id: 'f4', name: 'Arabic Language', namebn: 'আরবি ভাষা', namear: 'اللغة العربية',
    description: 'Master Arabic language for Quran understanding and Islamic scholarship.',
    descbn: 'কুরআন বোঝার জন্য এবং ইসলামী জ্ঞানের জন্য আরবি ভাষায় দক্ষতা অর্জন।',
    descar: 'إتقان اللغة العربية لفهم القرآن والعلم الإسلامي.',
    image: p4,
    badge: 'Beginner to Advanced', badgeColor: 'from-[#6B4C1E] to-[#C89B3C]',
  },
  {
    id: 'f5', name: 'Girls Education', namebn: 'মেয়েদের শিক্ষা', namear: 'تعليم البنات',
    description: 'Dedicated girls campus with separate faculty and Islamic environment.',
    descbn: 'পৃথক অনুষদ ও ইসলামী পরিবেশ সহ মেয়েদের জন্য নিবেদিত ক্যাম্পাস।',
    descar: 'حرم جامعي مخصص للبنات مع كادر تعليمي منفصل وبيئة إسلامية.',
    image: p5,
    badge: 'Separate Campus', badgeColor: 'from-[#6D28D9] to-[#7C3AED]',
  },
  {
    id: 'f6', name: 'Online Learning', namebn: 'অনলাইন শিক্ষা', namear: 'التعلم الإلكتروني',
    description: 'Flexible online courses for Quran, Arabic and Islamic studies worldwide.',
    descbn: 'বিশ্বজুড়ে কুরআন, আরবি ও ইসলামী পড়াশোনার জন্য নমনীয় অনলাইন কোর্স।',
    descar: 'دورات مرنة عبر الإنترنت للقرآن والعربية والدراسات الإسلامية حول العالم.',
    image: p6,
    badge: 'Global Access', badgeColor: 'from-[#0369A1] to-[#0EA5E9]',
  },
];

const ProgramsGrid = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => { const r = await apiClient.get('/programs/'); return r.data; },
    retry: false,
  });

  let programs = data?.results || data || [];
  if (programs.length === 0) programs = fallbackPrograms;

  const getName = (p) => {
    if (i18n.language === 'bn') return p.namebn || p.name;
    if (i18n.language === 'ar') return p.namear || p.name;
    return p.name;
  };
  const getDesc = (p) => {
    if (i18n.language === 'bn') return p.descbn || p.description;
    if (i18n.language === 'ar') return p.descar || p.description;
    return p.description;
  };

  return (
    <section id="programs" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 geo-grid opacity-30 pointer-events-none" />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-16" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <motion.span
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label mb-4 inline-flex"
          >
            <Sparkles size={12} /> {t('programs_label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-[#0A3A23] mt-3 mb-4"
          >
            {t('programs_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto text-lg"
          >
            {t('programs_desc')}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-72 rounded-3xl shimmer" />
              ))
            : programs.slice(0, 6).map((prog, i) => {
                const img = prog.image?.startsWith('http') ? prog.image : prog.image ? `${API_BASE_URL}${prog.image}` : fallbackPrograms[i % fallbackPrograms.length]?.image;
                return (
                  <motion.div
                    key={prog.id || i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="program-card h-72 group"
                  >
                    <img src={img} alt={getName(prog)} className="w-full h-full object-cover" />
                    <div className="overlay" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${fallbackPrograms[i % fallbackPrograms.length]?.badgeColor || 'from-[#115E39] to-[#1A8B54]'}`}>
                        {prog.badge || fallbackPrograms[i % fallbackPrograms.length]?.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <h3 className="font-serif text-xl font-bold text-white mb-1.5 drop-shadow-md">
                        {getName(prog)}
                      </h3>
                      <p className="text-white/75 text-sm leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        {getDesc(prog)}
                      </p>
                      <button className="flex items-center gap-2 text-[#C89B3C] text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                        {t('learn_more')} <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })
          }
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-10">
            {i18n.language === 'bn' ? 'সব প্রোগ্রাম দেখুন' : i18n.language === 'ar' ? 'عرض جميع البرامج' : 'View All Programs'}
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;

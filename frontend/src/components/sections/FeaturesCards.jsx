import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Heart, Award, GraduationCap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    color: 'from-[#115E39] to-[#1A8B54]',
    glow: 'rgba(17,94,57,0.25)',
    titleKey: 'quran_learning',
    descEn: 'Comprehensive Quran memorization with certified Tajweed instruction.',
    descBn: 'সার্টিফাইড তাজবীদ নির্দেশনা সহ ব্যাপক কুরআন মুখস্থকরণ।',
    descAr: 'حفظ شامل للقرآن مع تعليم التجويد المعتمد.',
    stat: '500+', statLabel: 'Hafiz Graduated',
  },
  {
    icon: GraduationCap,
    color: 'from-[#C89B3C] to-[#E5C167]',
    glow: 'rgba(200,155,60,0.25)',
    titleKey: 'academic_info',
    descEn: 'Modern curriculum with Science, Math, English and Arabic languages.',
    descBn: 'বিজ্ঞান, গণিত, ইংরেজি ও আরবি সহ আধুনিক পাঠ্যক্রম।',
    descAr: 'منهج حديث يشمل العلوم والرياضيات والإنجليزية والعربية.',
    stat: '98%', statLabel: 'Pass Rate',
  },
  {
    icon: Heart,
    color: 'from-[#0A3A23] to-[#115E39]',
    glow: 'rgba(10,58,35,0.25)',
    titleKey: 'donate_label',
    descEn: 'Community welfare programs, scholarships and social services.',
    descBn: 'কমিউনিটি কল্যাণ কর্মসূচি, বৃত্তি এবং সামাজিক সেবা।',
    descAr: 'برامج رعاية المجتمع والمنح الدراسية والخدمات الاجتماعية.',
    stat: '200+', statLabel: 'Scholarships',
  },
];

const FeaturesCards = () => {
  const { t, i18n } = useTranslation();

  const getDesc = (f) => {
    if (i18n.language === 'bn') return f.descBn;
    if (i18n.language === 'ar') return f.descAr;
    return f.descEn;
  };

  return (
    <section className="relative z-30 py-10 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="card-premium group cursor-pointer"
            >
              <div className="p-7 relative overflow-hidden">
                {/* BG glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: f.glow }}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon size={26} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#0A3A23] mb-2 group-hover:text-[#115E39] transition-colors">
                  {t(f.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {getDesc(f)}
                </p>

                {/* Stat */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-black text-gold-gradient">{f.stat}</span>
                    <span className="text-[11px] text-gray-400 uppercase tracking-widest font-bold ml-2">{f.statLabel}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${f.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100`}>
                    <Sparkles size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;

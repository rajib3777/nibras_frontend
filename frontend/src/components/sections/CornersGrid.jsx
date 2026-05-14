import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, GraduationCap, Users, Download, BookOpen, Sparkles } from 'lucide-react';

const getCornersData = (t, lang) => [
  {
    titleKey: 'student_guardian_corner',
    desc: lang === 'bn' ? 'Student & Guardian Portal' : lang === 'ar' ? 'بوابة الطلاب وأولياء الأمور' : 'Student & Guardian Portal',
    items: lang === 'bn'
      ? ['শিক্ষার্থী লগইন', 'অভিভাবক লগইন', 'অনলাইন রেজাল্ট', 'অনলাইন এডমিশন']
      : lang === 'ar'
      ? ['تسجيل دخول الطالب', 'تسجيل دخول ولي الأمر', 'النتائج الإلكترونية', 'القبول الإلكتروني']
      : ['Student Login', 'Guardian Login', 'Online Results', 'Online Admission'],
    icon: GraduationCap,
    gradient: 'from-[#0f3d2e] to-[#1a5d48]',
    accentColor: '#1A8B54',
    glow: 'rgba(17,94,57,0.3)',
  },
  {
    titleKey: 'teacher_staff_corner',
    desc: lang === 'bn' ? 'Teacher & Staff Portal' : lang === 'ar' ? 'بوابة المعلمين والموظفين' : 'Teacher & Staff Portal',
    items: lang === 'bn'
      ? ['শিক্ষক লগইন', 'স্টাফ লগইন', 'শিক্ষক তালিকা', 'স্টাফ তালিকা']
      : lang === 'ar'
      ? ['تسجيل دخول المعلم', 'تسجيل دخول الموظف', 'قائمة المعلمين', 'قائمة الموظفين']
      : ['Teacher Login', 'Staff Login', 'Teacher Directory', 'Staff Directory'],
    icon: Users,
    gradient: 'from-[#c9a646] to-[#e5c167]',
    accentColor: '#C89B3C',
    glow: 'rgba(200,155,60,0.3)',
  },
  {
    titleKey: 'download',
    desc: lang === 'bn' ? 'Download Resources' : lang === 'ar' ? 'تحميل الموارد' : 'Download Resources',
    items: lang === 'bn'
      ? ['এডমিট কার্ড ডাউনলোড', 'মার্কশিট ডাউনলোড', 'সার্টিফিকেট', 'পরীক্ষার রুটিন']
      : lang === 'ar'
      ? ['تحميل بطاقة الدخول', 'تحميل كشف الدرجات', 'الشهادة', 'جدول الامتحانات']
      : ['Admit Card Download', 'Mark Sheet Download', 'Certificate', 'Exam Routine'],
    icon: Download,
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    accentColor: '#6B7280',
    glow: 'rgba(17,17,46,0.3)',
  },
  {
    titleKey: 'academic_info',
    desc: lang === 'bn' ? 'Academic Information' : lang === 'ar' ? 'المعلومات الأكاديمية' : 'Academic Information',
    items: lang === 'bn'
      ? ['প্রতিষ্ঠানের ইতিহাস', 'পরীক্ষার ফলাফল', 'নোটিশ বোর্ড', 'ফটো গ্যালারি']
      : lang === 'ar'
      ? ['تاريخ المؤسسة', 'نتائج الامتحانات', 'لوحة الإعلانات', 'معرض الصور']
      : ['Institution History', 'Exam Results', 'Notice Board', 'Photo Gallery'],
    icon: BookOpen,
    gradient: 'from-[#1e3a8a] to-[#1d4ed8]',
    accentColor: '#3B82F6',
    glow: 'rgba(59,130,246,0.3)',
  },
];

const CornersGrid = () => {
  const { t, i18n } = useTranslation();
  const corners = getCornersData(t, i18n.language);
  const isRTL = i18n.language === 'ar';

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#F0EDE4] relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-30 pointer-events-none" />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-14" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4 inline-flex">
            <Sparkles size={12} /> {t('corners_label')}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-[#0A3A23] mt-3">
            {t('corners_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {corners.map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative card-premium p-7 flex flex-col cursor-pointer"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 20px 60px ${corner.glow}` }}
              />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${corner.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <corner.icon size={24} className="text-white" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-[#0A3A23] mb-1 group-hover:text-[#115E39] transition-colors">
                {t(corner.titleKey)}
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">{corner.desc}</p>

              {/* Items */}
              <ul className="space-y-2.5 mb-7 flex-grow">
                {corner.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.05 }}
                    className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#115E39] transition-colors cursor-pointer group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/item:scale-150"
                      style={{ background: `linear-gradient(135deg, ${corner.accentColor}, #C89B3C)` }} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-br ${corner.gradient} shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300`}>
                {t('corners_enter')}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CornersGrid;

import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import apiClient, { API_BASE_URL } from '../../api/client';
import { Calendar, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import n1 from '../../assets/home/1.1.JPG';
import n2 from '../../assets/home/1.2.jpeg';
import n3 from '../../assets/home/1.3.jpg';

const fallbackNews = [
  { id: 'n1', title: 'Annual Quran Competition 2024', titleBn: 'বার্ষিক কুরআন প্রতিযোগিতা ২০২৪', titleAr: 'مسابقة القرآن السنوية 2024', summary: 'Students from all branches participated in the annual Hifz competition — a celebration of dedication and excellence.', summaryBn: 'বার্ষিক হিফজ প্রতিযোগিতায় সকল শাখার শিক্ষার্থীরা অংশগ্রহণ করেছিল।', created_at: new Date().toISOString(), image: n1, tag: 'Event', tagBn: 'ইভেন্ট' },
  { id: 'n2', title: 'New Campus Inauguration Ceremony', titleBn: 'নতুন ক্যাম্পাস উদ্বোধন অনুষ্ঠান', titleAr: 'حفل افتتاح الحرم الجامعي الجديد', summary: 'We are thrilled to announce the grand opening of our state-of-the-art Mohammadpur campus.', summaryBn: 'আমরা আমাদের অত্যাধুনিক মোহাম্মদপুর ক্যাম্পাসের উদ্বোধন ঘোষণা করতে পেরে আনন্দিত।', created_at: new Date(Date.now() - 86400000 * 3).toISOString(), image: n2, tag: 'News', tagBn: 'সংবাদ' },
  { id: 'n3', title: 'Scholarship Awards Ceremony', titleBn: 'বৃত্তি পুরস্কার অনুষ্ঠান', titleAr: 'حفل توزيع المنح الدراسية', summary: 'Over 50 deserving students received full scholarships funded by generous donors from our community.', summaryBn: '৫০ জনেরও বেশি মেধাবী শিক্ষার্থী সম্প্রদায়ের উদার দাতাদের দ্বারা অর্থায়িত পূর্ণ বৃত্তি পেয়েছে।', created_at: new Date(Date.now() - 86400000 * 7).toISOString(), image: n3, tag: 'Achievement', tagBn: 'অর্জন' },
];

const fallbackEvents = [
  { id: 'e1', title: 'Parent-Teacher Meeting', titleBn: 'অভিভাবক-শিক্ষক সভা', titleAr: 'اجتماع أولياء الأمور والمعلمين', start_time: new Date(Date.now() + 86400000 * 5).toISOString(), location: 'Main Auditorium', locationBn: 'প্রধান হলরুম' },
  { id: 'e2', title: 'Islamic Book Fair 2024', titleBn: 'ইসলামিক বইমেলা ২০২৪', titleAr: 'معرض الكتاب الإسلامي 2024', start_time: new Date(Date.now() + 86400000 * 15).toISOString(), location: 'Campus Ground', locationBn: 'ক্যাম্পাস মাঠ' },
  { id: 'e3', title: 'Ramadan Quran Khatm Program', titleBn: 'রমজান কুরআন খতম প্রোগ্রাম', titleAr: 'برنامج ختم القرآن في رمضان', start_time: new Date(Date.now() + 86400000 * 25).toISOString(), location: 'Main Mosque', locationBn: 'প্রধান মসজিদ' },
];

const NewsEvents = () => {
  const { t, i18n } = useTranslation();
  const { data: newsData } = useQuery({ queryKey: ['news'], queryFn: async () => { const r = await apiClient.get('/news/articles/'); return r.data; }, retry: false });
  const { data: eventsData } = useQuery({ queryKey: ['events'], queryFn: async () => { const r = await apiClient.get('/news/events/'); return r.data; }, retry: false });

  let news = newsData?.results || newsData || [];
  if (news.length === 0) news = fallbackNews;
  let events = eventsData?.results || eventsData || [];
  if (events.length === 0) events = fallbackEvents;

  const isRTL = i18n.language === 'ar';
  const getTitle = (item) => isRTL ? (item.titleAr || item.title) : i18n.language === 'bn' ? (item.titleBn || item.title) : item.title;
  const getSummary = (item) => i18n.language === 'bn' ? (item.summaryBn || item.summary || '') : item.summary || '';
  const getLocation = (ev) => i18n.language === 'bn' ? (ev.locationBn || ev.location) : ev.location;

  return (
    <section className="section-padding bg-[#FAFAF8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#115E39]/20 to-transparent" />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-14" dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4 inline-flex">
            <Sparkles size={12} /> {i18n.language === 'bn' ? 'ইভেন্ট' : i18n.language === 'ar' ? 'الأحداث' : 'Events'}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-[#0A3A23] mt-3">
            {i18n.language === 'bn' ? 'আসন্ন ইভেন্টসমূহ' : i18n.language === 'ar' ? 'الأحداث القادمة' : 'Upcoming Events'}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* News Cards (Hidden as requested) */}
          {/* <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"> ... </div> */}

          {/* Events Sidebar (Centered since news is hidden) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 lg:col-start-2 max-w-md mx-auto w-full"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="gradient-green rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-[#C89B3C]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#C89B3C]">{t('upcoming_event')}</span>
              </div>
              {events.slice(0, 3).map((ev, i) => (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`${i < events.slice(0,3).length - 1 ? 'border-b border-white/10 pb-4 mb-4' : ''}`}
                >
                  <h4 className="font-bold text-sm text-white mb-2 leading-snug">{getTitle(ev)}</h4>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs mb-1">
                    <Calendar size={11} />
                    <span>{new Date(ev.start_time || ev.date || Date.now()).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : i18n.language === 'bn' ? 'bn-BD' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs">
                    <MapPin size={11} />
                    <span>{getLocation(ev)}</span>
                  </div>
                </motion.div>
              ))}
              <button className="w-full mt-2 py-2.5 rounded-xl border border-white/20 text-white text-xs font-bold hover:bg-white/10 transition-colors">
                {t('view_details')} <ArrowUpRight size={12} className="inline ml-1" />
              </button>
            </div>

            {/* Quick notice card */}
            <div className="card-premium p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-[#0A3A23]">
                  {i18n.language === 'bn' ? 'জরুরি নোটিশ' : i18n.language === 'ar' ? 'إشعار عاجل' : 'Latest Notice'}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('emergency_notice')}
              </p>
              <button className="mt-3 text-[#115E39] text-xs font-black flex items-center gap-1 hover:gap-2 transition-all">
                {t('read_more')} <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

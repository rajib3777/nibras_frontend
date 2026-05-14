import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

const faqsData = {
  en: [
    { q: 'What are the admission requirements?', a: 'We require a birth certificate copy, previous academic records, and an initial assessment interview. For Hifz programs, basic Quran reading proficiency is preferred.' },
    { q: 'Are scholarships available?', a: 'Yes! Nibras Foundation provides need-based scholarships and Zakat-funded support for deserving students. Applications can be submitted during admission or at semester start.' },
    { q: 'What is the daily schedule?', a: 'Standard classes run from 8:00 AM to 1:30 PM. Hifz students have additional morning and afternoon sessions. We follow a balanced curriculum with Islamic and general subjects.' },
    { q: 'How can I donate to the foundation?', a: 'You can donate through our website using local and international payment methods. We accept general donations, Zakat, and specific project funding. Visit our office for physical contributions.' },
    { q: 'Is transportation available?', a: 'Yes, we provide transport across major city routes. Contact our administrative office for specific routes and monthly fees.' },
    { q: 'Do you have online programs?', a: 'Yes! We offer flexible online Quran, Arabic and Islamic studies courses for students worldwide. Enroll through our online portal.' },
  ],
  bn: [
    { q: 'ভর্তির জন্য কী কী প্রয়োজন?', a: 'আমাদের জন্মনিবন্ধন সনদের কপি, পূর্ববর্তী একাডেমিক রেকর্ড এবং একটি প্রাথমিক মূল্যায়ন সাক্ষাৎকার প্রয়োজন। হিফজ প্রোগ্রামের জন্য কুরআন পড়ার মৌলিক দক্ষতা পছন্দনীয়।' },
    { q: 'কি বৃত্তি পাওয়া যায়?', a: 'হ্যাঁ! নিবরাস ফাউন্ডেশন মেধাবী শিক্ষার্থীদের জন্য প্রয়োজন-ভিত্তিক বৃত্তি এবং যাকাত-অর্থায়িত সহায়তা প্রদান করে।' },
    { q: 'দৈনিক সময়সূচি কী?', a: 'সাধারণ ক্লাস সকাল ৮:০০ টা থেকে দুপুর ১:৩০ টা পর্যন্ত। হিফজ শিক্ষার্থীদের অতিরিক্ত সকাল ও বিকেলের সেশন রয়েছে।' },
    { q: 'কিভাবে দান করতে পারি?', a: 'আপনি আমাদের ওয়েবসাইটের মাধ্যমে স্থানীয় ও আন্তর্জাতিক পেমেন্ট পদ্ধতি ব্যবহার করে দান করতে পারেন। আমরা সাধারণ দান, যাকাত এবং বিশেষ প্রকল্প অর্থায়ন গ্রহণ করি।' },
    { q: 'কি পরিবহন সুবিধা আছে?', a: 'হ্যাঁ, আমরা শহরের প্রধান রুটে পরিবহন সুবিধা প্রদান করি। নির্দিষ্ট রুট ও মাসিক ফি সম্পর্কে আমাদের প্রশাসনিক অফিসে যোগাযোগ করুন।' },
    { q: 'কি অনলাইন প্রোগ্রাম আছে?', a: 'হ্যাঁ! আমরা বিশ্বব্যাপী শিক্ষার্থীদের জন্য নমনীয় অনলাইন কুরআন, আরবি ও ইসলামী পড়াশোনা কোর্স অফার করি।' },
  ],
  ar: [
    { q: 'ما هي متطلبات القبول؟', a: 'نحتاج إلى نسخة من شهادة الميلاد، والسجلات الأكاديمية السابقة، ومقابلة تقييمية أولية. لبرامج الحفظ، يُفضل إتقان أساسيات تلاوة القرآن.' },
    { q: 'هل تتوفر منح دراسية؟', a: 'نعم! توفر مؤسسة نبراس منحًا دراسية قائمة على الاحتياج ودعمًا ممولًا من الزكاة للطلاب المستحقين.' },
    { q: 'ما هو الجدول اليومي؟', a: 'تعمل الفصول الدراسية من 8:00 صباحًا حتى 1:30 مساءً. ولطلاب الحفظ جلسات إضافية صباحية ومسائية.' },
    { q: 'كيف يمكنني التبرع؟', a: 'يمكنك التبرع عبر موقعنا باستخدام طرق الدفع المحلية والدولية. نقبل التبرعات العامة والزكاة وتمويل المشاريع المحددة.' },
    { q: 'هل تتوفر خدمة النقل؟', a: 'نعم، نوفر خدمة نقل عبر المسارات الرئيسية في المدينة. اتصل بمكتبنا الإداري للمسارات والرسوم الشهرية.' },
    { q: 'هل لديكم برامج عبر الإنترنت؟', a: 'نعم! نقدم دورات مرنة عبر الإنترنت في القرآن والعربية والدراسات الإسلامية لطلاب حول العالم.' },
  ],
};

const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left focus:outline-none group">
      <span className="font-bold text-[#0A3A23] pr-4 text-sm md:text-base group-hover:text-[#115E39] transition-colors">{q}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#115E39] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#115E39]/10 group-hover:text-[#115E39]'}`}
      >
        <ChevronDown size={16} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = faqsData[i18n.language] || faqsData.en;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-20 pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-14" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>

          {/* Left sticky */}
          <div className="lg:w-2/5">
            <div className="lg:sticky top-28 space-y-6">
              <span className="section-label inline-flex">
                <HelpCircle size={12} /> {t('faq_label')}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#0A3A23] leading-tight">
                {t('faq_title').split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-gold-gradient">{t('faq_title').split(' ').slice(-1)}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">{t('faq_desc')}</p>

              {/* Contact card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="card-premium p-6 bg-gradient-to-br from-[#0A3A23] to-[#115E39] text-white"
              >
                <MessageCircle size={28} className="text-[#C89B3C] mb-3" />
                <h4 className="font-serif text-lg font-bold mb-2">
                  {i18n.language === 'bn' ? 'আরও প্রশ্ন আছে?' : i18n.language === 'ar' ? 'لديك المزيد من الأسئلة؟' : 'Still have questions?'}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {i18n.language === 'bn' ? 'আমাদের টিম সাহায্য করতে প্রস্তুত।' : i18n.language === 'ar' ? 'فريقنا مستعد للمساعدة.' : 'Our team is ready to help.'}
                </p>
                <button className="btn-gold text-xs py-2.5 px-5 w-full justify-center">
                  {t('contact_support')}
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right FAQs */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <FAQItem
                    q={faq.q} a={faq.a}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

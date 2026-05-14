import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Shield, CheckCircle, Sparkles } from 'lucide-react';

const amounts = [500, 1000, 2500, 5000];

const DonationWidget = () => {
  const { t, i18n } = useTranslation();
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isRTL = i18n.language === 'ar';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(i18n.language === 'bn' ? 'দানের জন্য ধন্যবাদ! শীঘ্রই পেমেন্ট গেটওয়ে আসছে।' : i18n.language === 'ar' ? 'شكرًا لتبرعك! بوابة الدفع قادمة قريبًا.' : 'Thank you for your generosity! Payment gateway coming soon.');
  };

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #071f14 0%, #0A3A23 40%, #0f4a2d 100%)' }}>
      {/* BG Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      {/* Glow circles */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C89B3C, transparent)' }} />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1A8B54, transparent)' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#C89B3C] text-xs font-black uppercase tracking-widest mb-6">
              <Heart size={12} className="fill-[#C89B3C]" /> {t('donate_label')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-5 leading-tight">
              {t('donate_title')}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{t('donate_desc')}</p>

            {/* Arabic Quote */}
            <div className="border-l-2 border-[#C89B3C] pl-5 mb-8">
              <p className="font-arabic text-2xl text-[#E5C167]" dir="rtl">
                وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا
              </p>
              <p className="text-white/60 text-sm mt-2 italic">"And who is better in speech than one who calls to Allah and does righteous deeds." — Quran 41:33</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: i18n.language === 'bn' ? 'নিরাপদ পেমেন্ট' : i18n.language === 'ar' ? 'دفع آمن' : 'Secure Payment' },
                { icon: CheckCircle, label: i18n.language === 'bn' ? 'যাকাত গৃহীত' : i18n.language === 'ar' ? 'زكاة مقبولة' : 'Zakat Accepted' },
                { icon: Heart, label: i18n.language === 'bn' ? 'সদকা জারিয়া' : i18n.language === 'ar' ? 'صدقة جارية' : 'Sadaqah Jariyah' },
              ].map((badge, i) => (
                <div key={i} className="text-center bg-white/5 rounded-xl p-3 border border-white/10">
                  <badge.icon size={20} className="text-[#C89B3C] mx-auto mb-1.5" />
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wide">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Widget */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl" dir={isRTL ? 'rtl' : 'ltr'}>

              {/* Frequency Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                <button type="button" onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${!isMonthly ? 'bg-[#115E39] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                  {t('donate_one_time')}
                </button>
                <button type="button" onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${isMonthly ? 'bg-[#115E39] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                  {t('donate_monthly')}
                </button>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {amounts.map(amt => (
                  <button key={amt} type="button" onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-3 rounded-xl text-sm font-black transition-all duration-300 ${amount === amt && !customAmount ? 'bg-[#115E39] text-white shadow-md scale-105' : 'bg-gray-100 text-gray-600 hover:bg-[#115E39]/10 hover:text-[#115E39]'}`}>
                    ৳{amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">৳</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setAmount(null); }}
                  placeholder={i18n.language === 'bn' ? 'কাস্টম পরিমাণ লিখুন' : i18n.language === 'ar' ? 'أدخل مبلغًا مخصصًا' : 'Enter custom amount'}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#115E39] focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Fields */}
              <div className="space-y-3 mb-6">
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder={i18n.language === 'bn' ? 'পুরো নাম' : i18n.language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#115E39] focus:outline-none text-sm transition-colors" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder={i18n.language === 'bn' ? 'ইমেইল ঠিকানা' : i18n.language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#115E39] focus:outline-none text-sm transition-colors" />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(200,155,60,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gold py-4 text-base flex items-center justify-center gap-2 rounded-2xl"
              >
                <Heart size={18} className="fill-white" />
                {t('donate_btn')} — ৳{customAmount || amount || 0}
              </motion.button>

              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                <Sparkles size={12} className="text-[#C89B3C]" />
                {t('donate_zakat')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationWidget;

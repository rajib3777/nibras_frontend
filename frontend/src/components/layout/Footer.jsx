import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUpRight, Heart, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../../hooks/useSettings';
import { useSocialMedia } from '../../hooks/useSocialMedia';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { data: settings } = useSettings();
  const { data: socialData } = useSocialMedia();
  const [email, setEmail] = useState('');
  const isRTL = i18n.language === 'ar';

  const socialLinks = socialData?.results || socialData || [];
  const siteName = settings?.site_name || 'Nibras Foundation';
  const address = 'H# 1, Rd # 5, Block# D, Banashree, Rampura, Dhaka-1219, Bangladesh';
  const phone = '+8801909997777 (8.00 am - 8.00 pm)';
  const emailAddr = 'nibrasbd@yahoo.com, nibrasbd.it@gmail.com';

  const getIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'facebook': return <Facebook size={16} />;
      case 'twitter': return <Twitter size={16} />;
      case 'instagram': return <Instagram size={16} />;
      case 'youtube': return <Youtube size={16} />;
      default: return null;
    }
  };

  const defaultSocials = [
    { id: 's1', platform: 'facebook', url: '#' },
    { id: 's2', platform: 'youtube', url: '#' },
    { id: 's3', platform: 'instagram', url: '#' },
  ];
  const socials = socialLinks.length ? socialLinks : defaultSocials;

  const exploreLinks = [
    { label: i18n.language === 'bn' ? 'আমাদের গল্প' : i18n.language === 'ar' ? 'قصتنا' : 'Our Story', path: '/about' },
    { label: i18n.language === 'bn' ? 'বিশেষ প্রোগ্রাম' : i18n.language === 'ar' ? 'البرامج المميزة' : 'Featured Programs', path: '/programs' },
    { label: i18n.language === 'bn' ? 'শিক্ষকমণ্ডলী' : i18n.language === 'ar' ? 'هيئة التدريس' : 'Our Faculty', path: '/teachers' },
    { label: i18n.language === 'bn' ? 'সর্বশেষ সংবাদ' : i18n.language === 'ar' ? 'آخر الأخبار' : 'Latest News', path: '/news' },
    { label: i18n.language === 'bn' ? 'যোগাযোগ' : i18n.language === 'ar' ? 'اتصل بنا' : 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#071f14] text-white relative overflow-hidden mt-16 lg:mt-24">
      {/* Gold top bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #C89B3C, #E5C167, #C89B3C, #A38634)' }} />

      {/* Background decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C89B3C, transparent)' }} />

      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14" dir={isRTL ? 'rtl' : 'ltr'}>

          {/* Col 1: Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#115E39] to-[#0A3A23] flex items-center justify-center border border-[#C89B3C]/20">
                <span className="text-[#C89B3C] font-arabic text-xl font-bold">ن</span>
              </div>
              <div>
                <div className="font-serif text-base font-black text-white">NIBRAS</div>
                <div className="text-[9px] font-bold text-[#C89B3C] uppercase tracking-[0.12em]">International Madrasah</div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              {i18n.language === 'bn'
                ? "নৈতিক ও উচ্চ শিক্ষায় শিক্ষিত ভ্রাতৃবৃন্দের সমন্বিত প্রচেষ্টা এবং সহযোগিতার মাধ্যমে শিক্ষা, গবেষণা ও সমাজকল্যাণমূলক কার্যক্রম পরিচালনার মাধ্যমে আল্লাহ তা'আলার সন্তুষ্টি অর্জনের লক্ষ্যে প্রতিষ্ঠিত প্রতিষ্ঠানের নাম ‘নিবরাস ফাউন্ডেশন বাংলাদেশ’।"
                : i18n.language === 'ar'
                ? "مؤسسة نبراس بنغلاديش هي مؤسسة تأسست بهدف نيل رضى الله تعالى من خلال جهود متضافرة للإخوة المتعلمين."
                : "Nibras Foundation Bangladesh is an institution established with the aim of achieving the pleasure of Allah Ta'ala through the coordinated efforts of educated brothers."
              }
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#C89B3C] hover:text-white hover:border-[#C89B3C] transition-all duration-300">
                  {getIcon(link.platform)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Explore */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-5">
            <h4 className="font-serif text-base font-bold text-[#C89B3C] uppercase tracking-widest">{t('footer_explore')}</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                    <span className="w-1 h-1 rounded-full bg-[#C89B3C]/50 group-hover:bg-[#C89B3C] transition-colors" />
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-5">
            <h4 className="font-serif text-base font-bold text-[#C89B3C] uppercase tracking-widest">{t('footer_contact_us')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-white/60 text-sm hover:text-white transition-colors">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <a href={`mailto:${emailAddr}`} className="text-white/60 text-sm hover:text-white transition-colors">{emailAddr}</a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-5">
            <h4 className="font-serif text-base font-bold text-[#C89B3C] uppercase tracking-widest">{t('footer_newsletter')}</h4>
            <p className="text-white/60 text-sm">{t('footer_newsletter_desc')}</p>
            <form onSubmit={e => { e.preventDefault(); setEmail(''); }} className="space-y-2.5">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder={i18n.language === 'bn' ? 'আপনার ইমেইল' : i18n.language === 'ar' ? 'بريدك الإلكتروني' : 'Your email address'}
                className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#C89B3C] transition-colors"
              />
              <button type="submit"
                className="w-full bg-gradient-to-r from-[#C89B3C] to-[#B8860B] text-white py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send size={14} />
                {t('footer_subscribe')}
              </button>
            </form>

            {/* Arabic phrase */}
            <div className="pt-2 border-t border-white/8">
              <p className="font-arabic text-xl text-[#C89B3C]/70 text-center" dir="rtl">جَزَاكَ اللَّهُ خَيْرًا</p>
              <p className="text-white/30 text-[10px] text-center mt-1">May Allah reward you with good</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            <Heart size={11} className="text-[#C89B3C] fill-[#C89B3C]" />
            {t('footer_credit')}
          </p>
          <div className="flex gap-5 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer_terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

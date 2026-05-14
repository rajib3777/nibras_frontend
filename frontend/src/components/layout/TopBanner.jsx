import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';
import { useSocialMedia } from '../../hooks/useSocialMedia';
import { motion, AnimatePresence } from 'framer-motion';

const TopBanner = () => {
  const { i18n, t } = useTranslation();
  const { data: settings } = useSettings();
  const { data: socialData } = useSocialMedia();
  const [tickerPaused, setTickerPaused] = useState(false);

  const socialLinks = socialData?.results || socialData || [];

  const getIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'facebook': return <Facebook size={13} />;
      case 'twitter': return <Twitter size={13} />;
      case 'instagram': return <Instagram size={13} />;
      case 'youtube': return <Youtube size={13} />;
      default: return null;
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const phone = settings?.phone || '01909995555';
  const email = settings?.email || 'info@nibrasfoundation.org';
  const langs = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'bn', label: 'বাং', flag: '🇧🇩' },
    { code: 'ar', label: 'ع', flag: '🇸🇦' },
  ];

  return (
    <div className="bg-[#0A3A23] text-white relative overflow-hidden z-50">
      {/* Emergency notice ticker */}
      <div className="py-1.5 border-b border-white/10 relative">
        <div className="container-custom flex items-center gap-3">
          <span className="flex-shrink-0 bg-[#C89B3C] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">
            {i18n.language === 'ar' ? 'إشعار' : i18n.language === 'bn' ? 'বিজ্ঞপ্তি' : 'Notice'}
          </span>
          <div className="ticker-wrap flex-1 overflow-hidden">
            <div
              className="ticker-content text-white/80 text-xs"
              style={{ animationPlayState: tickerPaused ? 'paused' : 'running' }}
              onMouseEnter={() => setTickerPaused(true)}
              onMouseLeave={() => setTickerPaused(false)}
            >
              {t('emergency_notice')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('emergency_notice')}
            </div>
          </div>
        </div>
      </div>

      {/* Main top bar */}
      <div className="py-2">
        <div className="container-custom flex items-center justify-between gap-4">

          {/* Left: contact info */}
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-white/70 hover:text-[#C89B3C] text-xs transition-colors font-medium">
              <Phone size={11} />
              <span>{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 text-white/70 hover:text-[#C89B3C] text-xs transition-colors font-medium">
              <Mail size={11} />
              <span>{email}</span>
            </a>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.slice(0, 4).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C89B3C] hover:text-white transition-all duration-300"
              >
                {getIcon(link.platform)}
              </a>
            ))}
            {socialLinks.length === 0 && (
              <>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C89B3C] hover:text-white transition-all">
                  <Facebook size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C89B3C] hover:text-white transition-all">
                  <Youtube size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#C89B3C] hover:text-white transition-all">
                  <Instagram size={12} />
                </a>
              </>
            )}
          </div>

          {/* Right: Language switcher */}
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
            <Globe size={12} className="text-white/50 ml-1" />
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full transition-all duration-300 ${
                  i18n.language === lang.code
                    ? 'bg-[#C89B3C] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

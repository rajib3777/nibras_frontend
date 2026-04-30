import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import nibrasLogo from '../../assets/nibras_logo.png';
import { useSettings } from '../../hooks/useSettings';
import { useSocialMedia } from '../../hooks/useSocialMedia';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const TopBanner = () => {
  const { i18n } = useTranslation();
  const { data: settings } = useSettings();
  const { data: socialData } = useSocialMedia();

  const socialLinks = socialData?.results || socialData || [];
  
  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'facebook': return <Facebook size={14} />;
      case 'twitter': return <Twitter size={14} />;
      case 'instagram': return <Instagram size={14} />;
      case 'linkedin': return <Linkedin size={14} />;
      case 'youtube': return <Youtube size={14} />;
      default: return null;
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const siteName = settings?.site_name || 'Nibras Foundation';

  return (
    <div className="bg-[#FDFBF7] py-4 border-b border-gray-100">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Media Links */}
        <div className="hidden md:flex items-center gap-3 w-32">
          {socialLinks.slice(0, 3).map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#115E39]/60 hover:text-[#115E39] transition-colors"
            >
              {getIcon(link.platform)}
            </a>
          ))}
        </div>

        {/* Logo Section */}
        <Link to="/" className="flex flex-col items-center justify-center flex-1 group">
          <img 
            src={nibrasLogo} 
            alt="Nibras Foundation" 
            className="w-auto h-32 md:h-48 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-[#115E39] uppercase tracking-widest text-center mt-4">
            {siteName}
          </h1>
        </Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-sm border border-gray-200 w-auto md:w-32 justify-center">
          <button 
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${i18n.language === 'en' ? 'bg-[#115E39] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('bn')}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${i18n.language === 'bn' ? 'bg-[#115E39] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            BN
          </button>
          <button 
            onClick={() => changeLanguage('ar')}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${i18n.language === 'ar' ? 'bg-[#115E39] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

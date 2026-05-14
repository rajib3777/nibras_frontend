import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../hooks/useSettings';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';
import { Download, Users } from 'lucide-react';
import campusImg from '../assets/home/1.2.jpeg';
import nibrasLogo from '../assets/home/Home BIG Logo.jpg';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { data: settings } = useSettings();
  const siteName = settings?.site_name || 'Nibras Foundation';
  const aboutText = settings?.about_short || t('about_desc');

  const { data: teachersData } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await apiClient.get('/users/teachers/');
      return response.data;
    }
  });

  const staff = teachersData?.results || teachersData || [];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      
      {/* Header Banner */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A23]">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <img src={campusImg} alt="About Us" className="w-full h-full object-cover object-center opacity-40" />
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
            {t('about_label')}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-white drop-shadow-lg">
            {t('about')}
          </h1>
        </motion.div>
      </div>

      <div className="container-custom py-20 relative z-10">
        
        {/* Mission & Vision Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 ${isRTL ? 'lg:rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C89B3C]" />
              <span className="text-[#C89B3C] font-bold text-sm uppercase tracking-widest">{t('about_mission')}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0A3A23] mb-6 leading-tight">
              {t('about_title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {aboutText}
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#115E39]">
                  <h4 className="font-bold text-[#0A3A23] mb-2">{t('about_mission')}</h4>
                  <p className="text-sm text-gray-500">Empowering individuals through holistic education and spiritual growth.</p>
               </div>
               <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#C89B3C]">
                  <h4 className="font-bold text-[#0A3A23] mb-2">{t('about_vision')}</h4>
                  <p className="text-sm text-gray-500">To be a leading global institution for Islamic and modern education.</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={campusImg} 
                alt="Mission and Vision" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3A23]/60 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute top-8 -right-8 w-full h-full border-2 border-[#C89B3C]/30 rounded-3xl -z-10 hidden md:block" />
          </motion.div>
        </div>

        {/* Board of Directors & Management */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16" dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="section-label mb-4">
              <Users size={12} className="text-[#115E39]" /> {t('team_label')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0A3A23] mb-4">
              Board of Directors & Management
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staff.slice(0, 8).map((member, i) => (
              <motion.div 
                key={member.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="team-card group"
              >
                <div className="img-wrapper aspect-[3/4] bg-gray-100">
                  <img 
                    src={member.profile_picture_url || (member.profile_picture?.startsWith('http') ? member.profile_picture : `${API_BASE_URL}${member.profile_picture}`) || `https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=300&h=400&sig=${i}`} 
                    alt={member.full_name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <h3 className="font-sans text-lg font-bold text-[#0A3A23] mb-1">{member.full_name}</h3>
                  <p className="text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">{member.role}</p>
                </div>
                <div className="reveal-bar">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">{t('view_profile')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Govt Sanad & Organogram Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[#0A3A23] mb-2">Govt. Sanad (Registration)</h3>
            <p className="text-gray-500 text-center text-sm mb-8">Click on the document to view full size</p>
            <div className="w-full max-w-[240px] aspect-[3/4] bg-[#FAFAF8] border-2 border-dashed border-gray-200 flex items-center justify-center rounded-2xl cursor-pointer hover:border-[#C89B3C] hover:bg-[#C89B3C]/5 transition-all relative group overflow-hidden">
               <img src={nibrasLogo} alt="Govt Sanad" className="w-24 h-24 object-contain opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
               <div className="absolute inset-0 bg-[#0A3A23]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold bg-[#C89B3C] px-6 py-2.5 rounded-full flex items-center gap-2">
                    <Download size={16} /> View Document
                  </span>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[#0A3A23] mb-2">Organogram</h3>
            <p className="text-gray-500 text-center text-sm mb-8">Our Organizational Structure</p>
            <div className="w-full max-w-[240px] aspect-[3/4] bg-[#FAFAF8] border-2 border-dashed border-gray-200 flex items-center justify-center rounded-2xl cursor-pointer hover:border-[#115E39] hover:bg-[#115E39]/5 transition-all relative group overflow-hidden">
               <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-[#115E39]/10 flex items-center justify-center text-[#115E39] group-hover:scale-110 transition-transform">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                 </div>
                 <span className="text-[#0A3A23] font-bold text-sm">Home Organugram.pdf</span>
               </div>
               <div className="absolute inset-0 bg-[#0A3A23]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold bg-[#115E39] px-6 py-2.5 rounded-full flex items-center gap-2">
                    <Download size={16} /> View PDF
                  </span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Arabic Calligraphy Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#115E39] to-[#0A3A23] rounded-3xl p-12 md:p-20 flex justify-center items-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative geometric patterns */}
          <div className="absolute inset-0 geo-grid opacity-10 pointer-events-none" />
          
          <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-[#C89B3C]/50 rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-[#C89B3C]/50 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-[#C89B3C]/50 rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-[#C89B3C]/50 rounded-br-xl" />
          
          <h2 className="font-arabic text-4xl md:text-5xl lg:text-7xl text-[#C89B3C] drop-shadow-xl relative z-10 text-center leading-relaxed" dir="rtl">
            إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ
          </h2>
        </motion.div>

      </div>
    </div>
  );
};

export default About;

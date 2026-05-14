import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import apiClient, { API_BASE_URL } from '../../api/client';
import { X, BookOpen, Star, Mail, Phone, Sparkles, Award } from 'lucide-react';
import t1 from '../../assets/home/1.1.JPG';
import t2 from '../../assets/home/1.2.jpeg';
import t3 from '../../assets/home/1.3.jpg';

const fallbackTeam = [
  { id: 't1', full_name: 'Sheikh Abdullah Al Mahmud', role: 'Head of Arabic Dept.', bio: 'PhD in Islamic Theology from Al-Azhar University. 15+ years teaching experience in Tafseer and Arabic Grammar.', profile_picture: t1, expertise: 'Tafseer, Arabic Grammar', qualification: 'PhD, Al-Azhar University' },
  { id: 't2', full_name: 'Dr. Habibur Rahman', role: 'Principal', bio: 'Leading the foundation with a vision of blending modern education with Islamic values.', profile_picture: t2, expertise: 'Education Management', qualification: 'PhD in Education' },
  { id: 't3', full_name: 'Hafez Qari Ibrahim', role: 'Chief Hifz Instructor', bio: 'Renowned Qari with multiple national awards in Quran recitation and Tajweed.', profile_picture: t3, expertise: 'Tajweed, Qira\'at', qualification: 'Hafez, Certified Qari' },
  { id: 't4', full_name: 'Ustaz Farhan Ahmed', role: 'Islamic Studies Teacher', bio: 'Expert in Hadith sciences and Fiqh with 10 years of teaching experience.', profile_picture: t1, expertise: 'Hadith, Fiqh', qualification: 'Masters in Islamic Studies' },
];

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const { data: teamData } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => { const r = await apiClient.get('/users/teachers/'); return r.data; },
    retry: false,
  });

  let team = teamData?.results || teamData || [];
  if (team.length === 0) team = fallbackTeam;

  return (
    <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent" />
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4 inline-flex">
            <Sparkles size={12} /> {t('team_label')}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-[#0A3A23] mt-3 mb-4">
            {t('team_title')}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto">
            {t('team_desc')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => {
            const img = member.profile_picture_url || (member.profile_picture?.startsWith('http') ? member.profile_picture : member.profile_picture ? `${API_BASE_URL}${member.profile_picture}` : fallbackTeam[i % fallbackTeam.length]?.profile_picture);
            return (
              <motion.div
                key={member.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="team-card group cursor-pointer"
                onClick={() => setSelectedProfile(member)}
              >
                {/* Photo */}
                <div className="img-wrapper h-56 bg-gray-100 overflow-hidden">
                  <img src={img} alt={member.full_name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="p-5 relative">
                  <h3 className="font-serif text-lg font-bold text-[#0A3A23] mb-1 group-hover:text-[#115E39] transition-colors">
                    {member.full_name}
                  </h3>
                  <p className="text-xs font-bold text-[#C89B3C] uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-[#C89B3C] fill-[#C89B3C]" />)}
                  </div>
                  <button
                    onClick={() => setSelectedProfile(member)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#115E39]/5 text-[#115E39] border border-[#115E39]/20 hover:bg-[#115E39] hover:text-white hover:border-[#115E39] transition-all duration-300"
                  >
                    {t('view_profile')}
                  </button>

                  {/* Reveal bar */}
                  <div className="reveal-bar rounded-b-2xl">
                    <div className="flex gap-3 justify-center">
                      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Mail size={13} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Phone size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProfile(null)}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* Header */}
              <div className="gradient-green p-6 relative">
                <button onClick={() => setSelectedProfile(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <X size={16} />
                </button>
                <div className="flex gap-4 items-center">
                  <img src={selectedProfile.profile_picture_url || selectedProfile.profile_picture} alt={selectedProfile.full_name} className="w-20 h-20 rounded-2xl object-cover border-2 border-white/30" />
                  <div className="text-white">
                    <h3 className="font-serif text-xl font-bold">{selectedProfile.full_name}</h3>
                    <p className="text-[#C89B3C] font-bold text-sm">{selectedProfile.role}</p>
                    <div className="flex gap-1 mt-2">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-[#C89B3C] text-[#C89B3C]" />)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedProfile.bio || 'Dedicated educator with a deep passion for Islamic sciences.'}
                </p>
                {selectedProfile.expertise && (
                  <div className="bg-[#115E39]/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1"><Award size={14} className="text-[#C89B3C]" /><span className="text-xs font-black text-[#0A3A23] uppercase tracking-widest">Expertise</span></div>
                    <p className="text-sm text-gray-700">{selectedProfile.expertise}</p>
                  </div>
                )}
                {selectedProfile.qualification && (
                  <div className="bg-[#C89B3C]/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1"><BookOpen size={14} className="text-[#C89B3C]" /><span className="text-xs font-black text-[#0A3A23] uppercase tracking-widest">Qualification</span></div>
                    <p className="text-sm text-gray-700">{selectedProfile.teacher_profile?.qualification || selectedProfile.qualification}</p>
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 btn-primary text-sm py-3">Contact</button>
                  <button className="flex-1 btn-outline text-sm py-3">Schedule</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;

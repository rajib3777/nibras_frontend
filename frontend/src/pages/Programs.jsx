import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProgramsGrid from '../components/sections/ProgramsGrid';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';
import { Clock, CreditCard, ChevronRight, BookOpen } from 'lucide-react';
import readingImg from '../assets/home/1.3.jpg';

const fallbackPrograms = [
  { id: '1', name: 'Hifzul Quran', description: 'Comprehensive memorization of the Holy Quran with precise Tajweed rules. Students are guided by experienced Huffaz in a spiritual and disciplined environment.', image: readingImg, duration: '3-4 Years', fee: '5000' },
  { id: '2', name: 'Alim Course', description: 'Advanced Islamic studies including Tafseer, Hadith, Fiqh, and Arabic literature, designed to produce knowledgeable scholars.', image: readingImg, duration: '4 Years', fee: '6000' },
  { id: '3', name: 'General Education', description: 'Integrated national curriculum subjects (Math, Science, English) taught alongside Islamic education to prepare students for the modern world.', image: readingImg, duration: '10 Years', fee: '4500' }
];

const Programs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedId, setSelectedId] = useState(null);

  const { data: programsData, isLoading } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      const response = await apiClient.get('/programs/programs/');
      return response.data;
    }
  });

  let programs = programsData?.results || programsData || [];
  if (programs.length === 0) programs = fallbackPrograms;
  
  if (!selectedId && programs.length > 0) {
    setSelectedId(programs[0].id);
  }

  const activeProgram = programs.find(p => p.id === selectedId) || programs[0];

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-[#C89B3C] border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="bg-[#FAFAF8] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A23]">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <img src={readingImg} alt="Programs" className="w-full h-full object-cover object-center opacity-40" />
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
            Academics
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-white drop-shadow-lg">
            Our Programs
          </h1>
        </motion.div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
          
          {/* Left Main Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {activeProgram && (
                <motion.div
                  key={activeProgram.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-[#C89B3C]" size={24} />
                    <h2 className="font-serif text-3xl md:text-4xl font-black text-[#0A3A23]">
                      {activeProgram.name}
                    </h2>
                  </div>

                  <div className="w-full aspect-video rounded-3xl overflow-hidden mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img 
                        src={activeProgram.image?.startsWith('http') ? activeProgram.image : activeProgram.image?.startsWith('/artifacts') ? activeProgram.image : activeProgram.image ? `${API_BASE_URL}${activeProgram.image}` : readingImg} 
                        alt={activeProgram.name} 
                        className="w-full h-full object-cover"
                      />
                  </div>
                  
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
                    <h3 className="font-sans text-xl font-bold text-[#0A3A23] mb-4">
                      About the Program
                    </h3>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                      {activeProgram.description}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-center gap-4 hover:border-[#115E39] transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-[#115E39]/10 flex items-center justify-center text-[#115E39]">
                          <Clock size={24} />
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Duration</h4>
                           <p className="text-[#0A3A23] font-bold text-lg">{activeProgram.duration}</p>
                        </div>
                     </div>
                     <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-center gap-4 hover:border-[#C89B3C] transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                          <CreditCard size={24} />
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Fee</h4>
                           <p className="text-[#0A3A23] font-bold text-lg">{activeProgram.fee} BDT</p>
                        </div>
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-[#115E39] to-[#0A3A23] py-6 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-white font-serif text-2xl font-bold relative z-10">
                  Available Programs
                </h3>
              </div>
              
              {/* Sidebar Links */}
              <div className="p-3">
                <ul className="flex flex-col gap-2">
                  {programs.map((prog) => (
                    <li key={prog.id}>
                      <button 
                        onClick={() => setSelectedId(prog.id)}
                        className={`w-full text-left px-6 py-4 rounded-xl transition-all flex items-center justify-between group ${
                          selectedId === prog.id 
                            ? 'bg-[#115E39]/5 text-[#115E39] font-bold' 
                            : 'text-gray-600 hover:bg-gray-50 font-medium'
                        }`}
                      >
                        {prog.name}
                        <ChevronRight size={18} className={`transition-transform ${selectedId === prog.id ? 'text-[#115E39]' : 'text-transparent group-hover:text-gray-400 group-hover:translate-x-1'}`} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Action */}
              <div className="p-6 bg-gray-50 mt-2">
                 <button className="w-full btn-gold py-4 text-base shadow-[0_0_20px_rgba(200,155,60,0.3)]">
                    Enroll Now
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid at bottom */}
      <div className="container-custom mt-20">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#0A3A23]">Explore All Programs</h2>
          <div className="w-24 h-1 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
        </div>
        <ProgramsGrid />
      </div>
    </div>
  );
};

export default Programs;

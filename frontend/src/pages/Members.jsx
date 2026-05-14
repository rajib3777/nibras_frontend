import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';
import impactImg from '../assets/generated/teachers_teaching_1778701316535.png'; // Reusing as placeholder for members if needed

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  // For demonstration, since we don't have a specific /members API endpoint we'll use teachers or a fallback
  const { data: membersData, isLoading } = useQuery({
    queryKey: ['members-page'],
    queryFn: async () => {
      try {
        const response = await apiClient.get('/users/teachers/');
        return response.data;
      } catch (error) {
        return null;
      }
    }
  });

  const rawMembers = membersData?.results || membersData || [];

  // Fallback members if API returns empty
  const membersList = rawMembers.length > 0 ? rawMembers : [
    { id: 1, full_name: 'Dr. Abdullah Al Mamun', role: 'Chairman', bio: 'Expert in Islamic Education and Philanthropy. Dedicated to spreading knowledge.', profile_picture_url: 'https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&w=300&q=80' },
    { id: 2, full_name: 'Prof. Sarah Ahmed', role: 'Managing Director', bio: 'Specialist in child development and educational management with 15+ years of experience.', profile_picture_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
    { id: 3, full_name: 'Ustadh Omar Faruq', role: 'Director of Academics', bio: 'Renowned scholar with over 20 years of experience in teaching Tafseer and Hadith.', profile_picture_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
    { id: 4, full_name: 'Mufti Tariq Jameel', role: 'Head of Fatwa Department', bio: 'Specializes in Fiqh and contemporary Islamic jurisprudence.', profile_picture_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { id: 5, full_name: 'Aisha Rahman', role: 'Female Branch Coordinator', bio: 'Oversees the girls section with dedication and care.', profile_picture_url: 'https://images.unsplash.com/photo-1531123897727-8f129e1b4492?auto=format&fit=crop&w=300&q=80' },
    { id: 6, full_name: 'Hafiz Bilal', role: 'Hifz Instructor', bio: 'A dedicated Hafiz focusing on proper Tajweed and memorization techniques.', profile_picture_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  ];

  const filteredMembers = useMemo(() => {
    if (!searchTerm) return membersList;
    const lowerSearch = searchTerm.toLowerCase();
    return membersList.filter(m => 
      m.full_name?.toLowerCase().includes(lowerSearch) || 
      m.role?.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, membersList]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-sans">Loading...</div>;

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#115E39] pt-32 pb-20 relative overflow-hidden flex flex-col justify-center items-center shadow-md px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d2e] to-[#115E39]/90 z-0" />
        <div className="relative z-10 text-center">
           <span className="text-[#C89B3C] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Leadership</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-6">
             Our <span className="italic text-[#C89B3C]">Members</span>
           </h1>
           <p className="text-white/80 max-w-lg mx-auto font-medium">
             Meet the dedicated individuals who guide and drive the mission of Nibras Foundation.
           </p>
        </div>
      </div>

      <div className="container-custom py-16">
        
        {/* Live Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search members by name or role..."
            className="w-full bg-white border-2 border-gray-100 rounded-full py-4 pl-12 pr-4 font-bold text-gray-700 focus:outline-none focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/10 transition-all shadow-sm"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#115E39] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-500 font-medium">
            Showing <span className="font-bold text-[#115E39]">{filteredMembers.length}</span> members
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          <AnimatePresence>
            {filteredMembers.map((member, i) => {
              const imageSrc = member.profile_picture_url || (member.profile_picture?.startsWith('http') ? member.profile_picture : `${API_BASE_URL}${member.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=300&h=300";
              
              return (
                <motion.div 
                  layout
                  key={member.id || i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[30px] p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gray-100 mb-6 overflow-hidden border-4 border-white shadow-md relative">
                    <img 
                      src={imageSrc} 
                      alt={member.full_name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[18px] font-black text-[#0f3d2e] mb-1 leading-tight">{member.full_name}</h3>
                  <span className="text-[#C89B3C] text-[12px] font-black uppercase tracking-widest mb-4 inline-block">{member.role}</span>
                  
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3 mb-6">
                    {member.bio || "A valued member of the Nibras Foundation team."}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="mt-auto w-full bg-gray-50 text-[#0f3d2e] py-3 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#115E39] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    View Profile <ExternalLink size={14} />
                  </button>
                </motion.div>
              )
            })}
          </AnimatePresence>
          
          {filteredMembers.length === 0 && (
            <div className="col-span-full py-12 text-center">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                 <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">No members found</h3>
               <p className="text-gray-500">We couldn't find anyone matching "{searchTerm}"</p>
            </div>
          )}
        </div>

      </div>

      {/* Detailed Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-[#0f3d2e]/80 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-3xl w-full flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 bg-gray-100 p-2 rounded-full text-gray-800 hover:bg-[#C89B3C] hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedMember.profile_picture_url || (selectedMember.profile_picture?.startsWith('http') ? selectedMember.profile_picture : `${API_BASE_URL}${selectedMember.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=400&h=400"} 
                  alt={selectedMember.full_name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              </div>
              
              <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center bg-white">
                <span className="text-[#C89B3C] font-black text-[11px] uppercase tracking-[0.2em] mb-2 block">{selectedMember.role}</span>
                <h3 className="font-black text-3xl md:text-4xl text-[#0f3d2e] mb-6 leading-none">{selectedMember.full_name}</h3>
                
                <div className="w-12 h-1 bg-gray-200 mb-8 rounded-full"></div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Biography</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {selectedMember.bio || "Dedicated member bringing vast experience and deep commitment to the Foundation's vision."}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                     <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-[#115E39] font-bold text-sm transition-colors w-fit">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center"><Mail size={14} /></div>
                        Contact via Email
                     </a>
                     <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-[#115E39] font-bold text-sm transition-colors w-fit">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center"><Phone size={14} /></div>
                        Request Appointment
                     </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Members;

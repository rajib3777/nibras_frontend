import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const { data: teachersData, isLoading } = useQuery({
    queryKey: ['teachers-page'],
    queryFn: async () => {
      const response = await apiClient.get('/users/teachers/');
      return response.data;
    }
  });

  const teachersList = teachersData?.results || teachersData || [];

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative">
      
      <div className="container-custom py-16">
        
        {/* Header Block exactly as in Figma (Solid Green Bar) */}
        <div className="bg-[#115E39] text-white py-6 mb-12 flex justify-center items-center shadow-md">
          <h1 className="font-serif text-3xl font-bold tracking-wide">
            Our Teachers & Mentors
          </h1>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {teachersList.map((t, i) => (
            <motion.div 
              key={t.id || i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F4EFE6] rounded-sm p-4 text-center border border-gray-200 shadow-sm"
            >
              <div className="w-full aspect-square bg-gray-300 mb-4 overflow-hidden rounded-sm">
                <img 
                  src={t.profile_picture_url || (t.profile_picture?.startsWith('http') ? t.profile_picture : `${API_BASE_URL}${t.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=300&h=300"} 
                  alt={t.full_name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-sans text-[16px] font-bold text-gray-900 mb-1">{t.full_name}</h3>
              <p className="text-[#C89B3C] text-[12px] font-semibold mb-6">{t.role}</p>
              
              <div className="flex justify-between gap-2">
                <button className="flex-1 bg-[#115E39] text-white py-2 rounded text-[11px] font-bold hover:bg-[#0A3A23] transition-colors">
                  Contact
                </button>
                <button 
                  onClick={() => setSelectedTeacher(t)}
                  className="flex-1 bg-transparent border border-[#115E39] text-[#115E39] py-2 rounded text-[11px] font-bold hover:bg-[#115E39] hover:text-white transition-colors"
                >
                  Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section at the bottom */}
        <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
           <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#115E39] mb-4">
                 Impact Nibras Foundation
              </h2>
              <div className="w-16 h-1 bg-[#C89B3C] mb-6"></div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">
                 Your contributions make a difference.
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-8">
                 Every donation helps us reach more students and provide better facilities for Islamic education. Join us in our mission to spread knowledge and light.
              </p>
              <button className="bg-[#C89B3C] text-white px-8 py-3 rounded text-[14px] font-bold w-max hover:bg-[#D4AF60] transition-colors shadow-md">
                 Support Us Today
              </button>
           </div>
           <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                 src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800" 
                 alt="Impact" 
                 className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:w-1/3"></div>
           </div>
        </div>

      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFBF7] rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-800 hover:bg-gray-200 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img src={selectedTeacher.profile_picture_url || (selectedTeacher.profile_picture?.startsWith('http') ? selectedTeacher.profile_picture : `${API_BASE_URL}${selectedTeacher.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=400&h=400"} alt={selectedTeacher.full_name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="font-sans text-2xl font-bold text-[#115E39] mb-1">{selectedTeacher.full_name}</h3>
                <p className="text-[#C89B3C] font-semibold mb-6">{selectedTeacher.role}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Education</h4>
                    <p className="text-gray-800 font-medium">{selectedTeacher.teacher_profile?.qualification || "No qualifications listed."}</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Biography</h4>
                    <p className="text-gray-600 text-[14px] leading-relaxed">{selectedTeacher.bio || "Dedicated educator with a deep passion for Islamic sciences."}</p>
                  </div>
                </div>
                
                <button className="mt-8 bg-[#115E39] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#0A3A23] transition-colors self-start">
                  Contact Instructor
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Teachers;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, BookOpen, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../../api/client';

const TeamSection = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const { data: teamData, isLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const response = await apiClient.get('/users/teachers/');
      return response.data;
    }
  });

  const team = teamData?.results || teamData || [];

  return (
    <section className="py-16 bg-white relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px] md:max-w-[350px]"></div>
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mx-6">
            Meet Our Teachers & Directors
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px] md:max-w-[350px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#FDFBF7] rounded-md overflow-hidden border border-gray-100 flex flex-col items-center p-4 text-center group"
            >
              <div className="w-full h-40 mb-4 overflow-hidden rounded-md bg-gray-200">
                <img 
                  src={member.profile_picture_url || (member.profile_picture?.startsWith('http') ? member.profile_picture : `${API_BASE_URL}${member.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=400&h=400"} 
                  alt={member.full_name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-sans text-[16px] font-bold text-gray-900 mb-1">
                {member.full_name}
              </h3>
              <p className="text-gray-400 text-[12px] mb-4">
                {member.role}
              </p>
              <button 
                onClick={() => setSelectedProfile(member)}
                className="bg-[#1A4B3A] text-white px-6 py-2 rounded text-[12px] font-medium hover:bg-[#115E39] w-max transition-colors"
              >
                View profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Figma-Matched Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProfile(null)}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFBF7] rounded-sm shadow-xl w-full max-w-md overflow-hidden border border-gray-200 relative"
            >
              <button 
                onClick={() => setSelectedProfile(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 z-10 bg-white/80 p-1 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="p-6">
                {/* Profile Header Block */}
                <div className="flex gap-4 mb-6 border-b border-gray-200 pb-6">
                  <img 
                    src={selectedProfile.img} 
                    alt={selectedProfile.name} 
                    className="w-24 h-24 object-cover rounded-sm border border-gray-200"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-sans text-xl font-bold text-gray-900 mb-1">{selectedProfile.full_name}</h3>
                    <p className="text-[#C89B3C] text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" /> {selectedProfile.role}
                    </p>
                  </div>
                </div>

                {/* Description (Lorem ipsum equivalent from Figma) */}
                <p className="text-gray-500 text-[13px] mb-6 leading-relaxed">
                  {selectedProfile.bio || "Dedicated educator with a deep passion for Islamic sciences. Committed to fostering an environment of spiritual and academic excellence for all students."}
                </p>

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="font-sans text-[15px] font-bold text-gray-900 mb-3">Qualifications</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {selectedProfile.teacher_profile?.qualification || "No qualifications listed."}
                  </p>
                </div>

                {/* Subjects I Teach */}
                <div className="mb-8">
                  <h4 className="font-sans text-[15px] font-bold text-gray-900 mb-3">Subject</h4>
                  <div className="flex items-center gap-2 text-[13px] text-gray-600 bg-white border border-gray-100 p-2 rounded-sm shadow-sm">
                    <BookOpen size={16} className="text-[#C89B3C]" />
                    {selectedProfile.teacher_profile?.subject || "General"}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#115E39] text-white py-2.5 rounded text-[13px] font-bold hover:bg-[#0A3A23] transition-colors shadow-md">
                    Contact Me
                  </button>
                  <button className="flex-1 bg-white border border-[#115E39] text-[#115E39] py-2.5 rounded text-[13px] font-bold hover:bg-[#f4fcf8] transition-colors shadow-sm">
                    Book Now
                  </button>
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

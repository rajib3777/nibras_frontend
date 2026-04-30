import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '../hooks/useSettings';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';

const About = () => {
  const { data: settings } = useSettings();
  const siteName = settings?.site_name || 'Nibras Foundation';
  const aboutText = settings?.about_short || 'Established to promote Islamic Values. Nibras is an educational and charitable organization that operates to spread the light of knowledge and the beauty of compassion.';

  const { data: teachersData } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      const response = await apiClient.get('/users/teachers/');
      return response.data;
    }
  });

  const staff = teachersData?.results || teachersData || [];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#F4EFE6] py-12 md:py-16 border-b border-gray-200 flex justify-center items-center">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#115E39]">
          About {siteName}
        </h1>
      </div>

      <div className="container-custom py-16">
        
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="pr-0 md:pr-8"
          >
            <h2 className="font-sans text-3xl font-bold text-[#C89B3C] mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px] whitespace-pre-line">
              {aboutText}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-auto rounded-md overflow-hidden shadow-md"
          >
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Mission and Vision" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Board of Directors & Management */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-gray-900 mx-6">
              Board of Directors & Management
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {staff.map((member, i) => (
              <motion.div 
                key={member.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-md border border-gray-100 p-4 text-center flex flex-col items-center shadow-sm"
              >
                <img 
                  src={member.profile_picture_url || (member.profile_picture?.startsWith('http') ? member.profile_picture : `${API_BASE_URL}${member.profile_picture}`) || "https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=200&h=200"} 
                  alt={member.full_name} 
                  className="w-full h-32 md:h-40 object-cover rounded-sm mb-4 bg-gray-100"
                />
                <h3 className="font-sans text-[15px] font-bold text-gray-900 mb-1 leading-tight">{member.full_name}</h3>
                <p className="text-gray-400 text-[12px] mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arabic Calligraphy Banner */}
        <div className="bg-[#F4EFE6] rounded-md border border-[#D4AF60] p-12 flex justify-center items-center shadow-inner relative overflow-hidden">
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C89B3C]"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C89B3C]"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C89B3C]"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C89B3C]"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800" dir="rtl">
            إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ
          </h2>
        </div>

      </div>
    </div>
  );
};

export default About;

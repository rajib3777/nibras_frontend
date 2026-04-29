import React from 'react';
import { motion } from 'framer-motion';

// Mock data based on Figma Image 4
const missionCards = [
  {
    title: 'Founder & Vision',
    desc: 'Established to promote Islamic Values',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
  },
  {
    title: 'Quran & Islamic Studies',
    desc: 'Deepen your knowledge of the Quran',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3389/3389081.png',
  },
  {
    title: 'Skills Training',
    desc: 'Providing essential skills for the future',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3062/3062310.png',
  }
];

const boardMembers = [
  { name: 'Dr. Ameen Khilid', role: 'Director', img: 'https://images.unsplash.com/photo-1566492031523-0c4022a1881b?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Sr. Layla Studies', role: 'Curriculum Head', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Sr. Layla Hasan', role: 'Operations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Imam Jamal Uddin', role: 'Islamic Scholar', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200' },
  { name: 'Farhan Instructor', role: 'Program Coordinator', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' },
];

const About = () => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#F4EFE6] py-12 md:py-16 border-b border-gray-200 flex justify-center items-center">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#115E39]">
          About Nibras Foundation
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
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              Founded during 2010. Nibras is an educational and charitable organization that operates to spread the light of knowledge and the beauty of compassion.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our mission is to provide quality education combined with moral values. We aim to nurture individuals who contribute positively to society while adhering to Islamic principles.
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

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {missionCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-md p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] text-center flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="h-16 w-16 mb-4 flex items-center justify-center">
                <img src={card.iconUrl} alt={card.title} className="max-h-full object-contain" />
              </div>
              <h3 className="font-sans text-[18px] font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-[13px]">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Board of Directors & Management */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-gray-900 mx-6">
              Board of Directors & Management
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boardMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-md border border-gray-100 p-4 text-center flex flex-col items-center shadow-sm"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-32 md:h-40 object-cover rounded-sm mb-4 bg-gray-100"
                />
                <h3 className="font-sans text-[15px] font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                <p className="text-gray-400 text-[12px] mb-4">{member.role}</p>
                <button className="bg-[#115E39] text-white px-4 py-1.5 rounded text-[11px] font-medium hover:bg-[#0A3A23] w-max transition-colors">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arabic Calligraphy Banner */}
        <div className="bg-[#F4EFE6] rounded-md border border-[#D4AF60] p-12 flex justify-center items-center shadow-inner relative overflow-hidden">
          {/* Decorative Corner Borders */}
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

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History as HistoryIcon, Users, ChevronRight } from 'lucide-react';

const History = () => {
  const directors = [
    { name: 'Dr. Abdullah Al Mamun', role: 'Chairman', bio: 'Expert in Islamic Education and Philanthropy.' },
    { name: 'Prof. Sarah Ahmed', role: 'Managing Director', bio: 'Specialist in child development and educational management.' },
    { name: 'Ustadh Omar Faruq', role: 'Director of Academics', bio: 'Renowned scholar with over 20 years of experience.' },
  ];

  const sections = [
    {
      title: 'Our History',
      icon: <HistoryIcon className="text-accent" size={32} />,
      content: 'Nibras Foundation was established with a vision to provide quality education and social welfare services to the community. Over the years, we have grown from a small learning center to a comprehensive foundation serving thousands of students.',
      bg: 'bg-white'
    },
    {
      title: 'Our Mission',
      icon: <Target className="text-accent" size={32} />,
      content: 'To empower individuals through holistic education, spiritual growth, and community engagement, fostering a generation that is both academically excellent and morally upright.',
      bg: 'bg-gray-50'
    },
    {
      title: 'Our Vision',
      icon: <Eye className="text-accent" size={32} />,
      content: 'To be a leading global institution for Islamic and modern education, recognized for its commitment to excellence, integrity, and service to humanity.',
      bg: 'bg-white'
    }
  ];

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans overflow-hidden">
      {/* Hero Header */}
      <div className="bg-[#0f3d2e] py-20 px-6 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Our <span className="text-accent italic">Heritage</span> & Purpose
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Discover the journey of Nibras Foundation and our unwavering commitment to excellence.
          </p>
        </motion.div>
      </div>

      {/* Mission, Vision, History */}
      <div className="max-w-[1440px] mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${section.bg} p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group`}
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e] mb-4 uppercase tracking-tight">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Board of Directors */}
      <div className="mt-32 bg-gray-50 py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-none">
                Board of <span className="text-accent">Directors</span>
              </h2>
            </div>
            <p className="text-gray-500 font-bold max-w-sm">
              Guided by a team of dedicated scholars and professionals committed to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3d2e]/20 to-transparent"></div>
                  <Users className="w-full h-full p-8 text-[#0f3d2e]/20" />
                </div>
                <h4 className="text-xl font-black text-[#0f3d2e] mb-1 uppercase tracking-tight">{director.name}</h4>
                <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4">{director.role}</span>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {director.bio}
                </p>
                <button className="flex items-center gap-2 text-[#0f3d2e] font-black text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                  View Full Profile <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

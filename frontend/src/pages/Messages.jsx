import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import impactImg from '../assets/generated/teachers_teaching_1778701316535.png'; // Placeholder for Chairman

const Messages = () => {
  const messages = [
    {
      id: 'chairman',
      name: 'Dr. Abdullah Al Mamun',
      role: 'Chairman, Nibras Foundation',
      image: impactImg,
      title: 'A Vision for the Future',
      message: `
        Bismillahir Rahmanir Rahim.
        
        It is with great pleasure and a profound sense of responsibility that I welcome you to Nibras Foundation. Our journey began with a simple yet powerful vision: to create an educational ecosystem where academic excellence goes hand in hand with moral uprightness and deep-rooted Islamic values.
        
        In today's rapidly changing world, our youth face unprecedented challenges. At Nibras, we believe that education is not merely the transfer of knowledge; it is the molding of character. We strive to nurture leaders who are not only equipped to succeed in their professional endeavors but are also compassionate, ethical, and dedicated to serving humanity.
        
        Our comprehensive curriculum, dedicated faculty, and state-of-the-art facilities are all geared toward this single objective. We invite parents, students, and the community to join hands with us in this noble mission of building a brighter, more enlightened future.
        
        May Allah (SWT) accept our efforts and guide us on the straight path.
      `
    },
    {
      id: 'secretary',
      name: 'Prof. Sarah Ahmed',
      role: 'Secretary General',
      image: impactImg,
      title: 'Commitment to Excellence',
      message: `
        Assalamu Alaikum Warahmatullahi Wabarakatuh.
        
        The foundation of any great institution lies in its commitment to its core values. At Nibras Foundation, our commitment is unwavering. We are dedicated to providing a holistic educational experience that seamlessly integrates modern academics with traditional Islamic teachings.
        
        Our approach is student-centric. We recognize that every child is unique, endowed with distinct talents and potential. Our role is to provide a nurturing environment where these talents can be discovered, honed, and utilized for the greater good. Through our diverse programs—ranging from Hifzul Quran to General Education—we ensure that every student finds their path to success.
        
        I extend my heartfelt gratitude to our generous donors, dedicated staff, and supportive parents. Your trust and support are the driving forces behind our continuous growth and success. Together, we are not just educating children; we are shaping the future of the Ummah.
      `
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#115E39] pt-32 pb-20 relative overflow-hidden flex flex-col justify-center items-center shadow-md px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d2e] to-[#115E39]/90 z-0" />
        <div className="relative z-10 text-center">
           <span className="text-[#C89B3C] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Leadership Voices</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-6">
             Official <span className="italic text-[#C89B3C]">Messages</span>
           </h1>
           <p className="text-white/80 max-w-lg mx-auto font-medium">
             Read the inspiring thoughts and visions from the leaders of Nibras Foundation.
           </p>
        </div>
      </div>

      <div className="container-custom py-24">
        <div className="space-y-32">
          {messages.map((msg, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-2/5 relative">
                  <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative shadow-2xl z-10">
                    <img src={msg.image} alt={msg.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d2e]/80 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                       <h3 className="text-white text-3xl font-black mb-1">{msg.name}</h3>
                       <p className="text-[#C89B3C] font-bold text-sm uppercase tracking-widest">{msg.role}</p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute top-10 ${isEven ? '-right-10' : '-left-10'} w-full h-full border-2 border-[#115E39]/20 rounded-[40px] -z-10`} />
                  <div className={`absolute -bottom-12 ${isEven ? '-left-12' : '-right-12'} text-[#C89B3C]/10 z-0`}>
                    <Quote size={180} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-3/5">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-1 bg-[#C89B3C] rounded-full" />
                     <h2 className="text-3xl lg:text-4xl font-black text-[#0f3d2e]">{msg.title}</h2>
                  </div>
                  
                  <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                    {msg.message.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-6 last:mb-0">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
                    <img src={msg.image} alt="Signature" className="h-16 w-32 object-cover opacity-50 grayscale mix-blend-multiply" />
                    <div>
                      <p className="font-bold text-[#0f3d2e]">{msg.name}</p>
                      <p className="text-sm text-gray-500">{msg.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Messages;

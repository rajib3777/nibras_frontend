import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Users, Download, BookOpen } from 'lucide-react';

const corners = [
  { 
    title: 'শিক্ষার্থী ও অভিভাবক কর্ণার', 
    desc: 'Student & Guardian Portal',
    items: ['শিক্ষার্থী লগইন', 'অভিভাবক লগইন', 'অনলাইন রেজাল্ট', 'অনলাইন এডমিশন'],
    icon: GraduationCap,
    gradient: 'from-[#0f3d2e] to-[#1a5d48]',
    textColor: 'text-white',
    bgLight: 'bg-green-50'
  },
  { 
    title: 'শিক্ষক ও স্টাফ কর্ণার', 
    desc: 'Teacher & Staff Portal',
    items: ['শিক্ষক লগইন', 'স্টাফ লগইন', 'শিক্ষক তালিকা', 'স্টাফ তালিকা'],
    icon: Users,
    gradient: 'from-[#c9a646] to-[#e5c167]',
    textColor: 'text-gray-900',
    bgLight: 'bg-yellow-50'
  },
  { 
    title: 'ডাউনলোড কর্ণার', 
    desc: 'Download Resources',
    items: ['এডমিট কার্ড ডাউনলোড', 'মার্কশিট ডাউনলোড', 'সার্টিফিকেট ডাউনলোড', 'পরীক্ষার রুটিন'],
    icon: Download,
    gradient: 'from-gray-900 to-gray-700',
    textColor: 'text-white',
    bgLight: 'bg-gray-100'
  },
  { 
    title: 'একাডেমিক তথ্য', 
    desc: 'Academic Information',
    items: ['প্রতিষ্ঠানের ইতিহাস', 'পরীক্ষার ফলাফল', 'নোটিশ', 'ফটো গ্যালারি'],
    icon: BookOpen,
    gradient: 'from-blue-900 to-blue-700',
    textColor: 'text-white',
    bgLight: 'bg-blue-50'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CornersGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0f3d2e]/5 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f3d2e]">Quick Access</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6"
          >
            আপনার প্রয়োজনীয় <span className="text-accent italic">লিংক</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto"
          >
            Access all portals, download necessary documents, and find academic information quickly from our dedicated corners.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {corners.map((corner, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 blur-xl scale-95" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} ></div>
              
              <div className="h-full bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col relative overflow-hidden group-hover:-translate-y-2">
                
                {/* Decoration blob */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${corner.bgLight}`}></div>

                <div className="mb-8 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${corner.gradient} flex items-center justify-center mb-6 shadow-lg ${corner.textColor}`}>
                    <corner.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-1 font-serif">{corner.title}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{corner.desc}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                  {corner.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-all relative z-10 overflow-hidden bg-gradient-to-br ${corner.gradient} ${corner.textColor} shadow-lg hover:shadow-xl`}>
                  <span>প্রবেশ করুন</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CornersGrid;

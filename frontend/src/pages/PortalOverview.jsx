import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, GraduationCap, ShieldCheck, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';

const PortalOverview = () => {
  const portals = [
    { 
      title: 'Student Portal', 
      icon: <GraduationCap size={40} className="text-accent" />, 
      desc: 'Access your coursework, daily attendance, and exam results.',
      color: 'bg-blue-50',
      items: ['Course Materials', 'Live Classes', 'Result Tracking']
    },
    { 
      title: 'Guardian Portal', 
      icon: <Users size={40} className="text-accent" />, 
      desc: 'Monitor your child progress, pay fees, and communicate with teachers.',
      color: 'bg-purple-50',
      items: ['Fee Payment', 'Progress Reports', 'Notice Updates']
    },
    { 
      title: 'Teacher Portal', 
      icon: <User size={40} className="text-accent" />, 
      desc: 'Manage your classes, update attendance, and upload resources.',
      color: 'bg-green-50',
      items: ['Class Management', 'Resource Upload', 'Salary Slips']
    }
  ];

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans min-h-screen overflow-hidden">
      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-6 mb-20 relative">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Unified Access</span>
              <h1 className="text-5xl md:text-7xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-[0.9] mb-8">
                Nibras Digital <br /> <span className="text-accent italic">Ecosystem</span>
              </h1>
              <p className="text-gray-500 font-bold max-w-xl text-lg leading-relaxed">
                A comprehensive digital platform designed for students, parents, and educators to collaborate seamlessly within the Nibras Foundation.
              </p>
           </div>
           <div className="flex-1 w-full max-w-lg">
              <div className="bg-[#0f3d2e] p-10 rounded-[50px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-20 transform rotate-12">
                    <ShieldCheck size={120} className="text-accent" />
                 </div>
                 <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-4 relative z-10">Secure Login</h2>
                 <p className="text-gray-400 font-medium mb-8 relative z-10 italic">
                    Enter your authorized portal with end-to-end encrypted security.
                  </p>
                  <button className="w-full bg-accent text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02] transition-all relative z-10">
                    Go to Login Page <ArrowRight size={18} />
                  </button>
                  <div className="mt-6 flex justify-center gap-4 relative z-10">
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1"><Lock size={12} /> SSL Secure</span>
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1"><Sparkles size={12} /> 2FA Ready</span>
                  </div>
              </div>
           </div>
        </div>
      </div>

      {/* Portal Cards */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
         {portals.map((portal, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="bg-white p-10 rounded-[45px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 flex flex-col items-center text-center group"
           >
              <div className={`mb-8 p-6 ${portal.color} rounded-3xl group-hover:scale-110 transition-transform`}>
                 {portal.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e] uppercase tracking-tight mb-4">{portal.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                 {portal.desc}
              </p>
              <div className="w-full space-y-3 mb-10">
                 {portal.items.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span className="text-[11px] font-black text-[#0f3d2e] uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>
              <button className="text-accent font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                 Learn More <ArrowRight size={14} />
              </button>
           </motion.div>
         ))}
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-32">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f3d2e] uppercase tracking-tighter mb-8 leading-tight">
              Need Help with <span className="text-accent italic">Access?</span>
            </h2>
            <p className="text-gray-500 font-bold mb-12 text-lg">
              If you are a student or parent and haven't received your credentials, please contact the foundation administration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <button className="bg-white border-2 border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:border-accent transition-all group">
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest">Technical Support</span>
                  <span className="text-[#0f3d2e] font-black text-xl uppercase tracking-tight">support@nibras.org</span>
               </button>
               <button className="bg-white border-2 border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:border-accent transition-all group">
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest">Admission Help</span>
                  <span className="text-[#0f3d2e] font-black text-xl uppercase tracking-tight">+880 1234 567890</span>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PortalOverview;

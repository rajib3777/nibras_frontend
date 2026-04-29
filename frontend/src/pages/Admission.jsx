import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, Upload, CheckCircle, ChevronRight, ChevronLeft, Info } from 'lucide-react';

const Admission = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { id: 1, name: 'Personal Details', icon: <User size={18} /> },
    { id: 2, name: 'Academic Info', icon: <FileText size={18} /> },
    { id: 3, name: 'Documents', icon: <Upload size={18} /> }
  ];

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Apply Now</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-none mb-6">
            Join the <span className="text-accent italic">Journey</span>
          </h1>
          <p className="text-gray-500 font-bold max-w-xl mx-auto">
            Our admission process is simple and transparent. Please fill out the form below to start your application.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 mb-10 flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          {steps.map((s, idx) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${step >= s.id ? 'bg-[#0f3d2e] text-white border-[#0f3d2e] shadow-lg shadow-[#0f3d2e]/20' : 'bg-white text-gray-400 border-gray-100'}`}>
                {step > s.id ? <CheckCircle size={20} /> : s.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? 'text-[#0f3d2e]' : 'text-gray-400'}`}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
           <AnimatePresence mode="wait">
             {step === 1 && (
               <motion.div
                 key="step1"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-6"
               >
                 <h3 className="text-2xl font-black text-[#0f3d2e] uppercase tracking-tight mb-8">Personal Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name (English)</label>
                     <input type="text" className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" placeholder="Enter your full name" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">পূণκ নাম (বাংলা)</label>
                     <input type="text" className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" placeholder="আপনার নাম লিখুন" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date of Birth</label>
                     <input type="date" className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Gender</label>
                     <select className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none">
                       <option>Male</option>
                       <option>Female</option>
                     </select>
                   </div>
                 </div>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div
                 key="step2"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-6"
               >
                 <h3 className="text-2xl font-black text-[#0f3d2e] uppercase tracking-tight mb-8">Academic Details</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Previous School/Madrasah</label>
                     <input type="text" className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" placeholder="Name of institution" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Class to Admit</label>
                     <select className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none">
                       <option>Class 1</option>
                       <option>Class 2</option>
                       <option>Hifz Section</option>
                       <option>General Education</option>
                     </select>
                   </div>
                 </div>
               </motion.div>
             )}

             {step === 3 && (
               <motion.div
                 key="step3"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-6"
               >
                 <h3 className="text-2xl font-black text-[#0f3d2e] uppercase tracking-tight mb-8">Document Upload</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="border-2 border-dashed border-gray-200 rounded-[30px] p-8 flex flex-col items-center justify-center gap-4 hover:border-accent transition-colors cursor-pointer group">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                       <Upload size={24} />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">Student Photo</span>
                   </div>
                   <div className="border-2 border-dashed border-gray-200 rounded-[30px] p-8 flex flex-col items-center justify-center gap-4 hover:border-accent transition-colors cursor-pointer group">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                       <Upload size={24} />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">Birth Certificate</span>
                   </div>
                 </div>
                 <div className="p-6 bg-accent/10 rounded-2xl flex gap-4 items-start border border-accent/20">
                   <Info className="text-accent shrink-0" size={20} />
                   <p className="text-[12px] font-bold text-[#0f3d2e]/70 leading-relaxed italic">
                     By clicking submit, you agree that all provided information is accurate and true. Our team will review your application and contact you within 3-5 business days.
                   </p>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* Controls */}
           <div className="flex justify-between mt-12 pt-10 border-t border-gray-100">
             <button 
               onClick={prevStep} 
               disabled={step === 1}
               className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all ${step === 1 ? 'opacity-30 cursor-not-allowed text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
             >
               <ChevronLeft size={16} /> Back
             </button>
             {step < totalSteps ? (
               <button 
                 onClick={nextStep} 
                 className="flex items-center gap-2 bg-[#0f3d2e] text-white px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-[#0f3d2e]/20 hover:shadow-[#0f3d2e]/40 transition-all"
               >
                 Next Step <ChevronRight size={16} />
               </button>
             ) : (
               <button className="bg-accent text-white px-10 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
                 Submit Application
               </button>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;

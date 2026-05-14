import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, FileText, Upload, CheckCircle, ChevronRight, ChevronLeft, Info, Download } from 'lucide-react';
import campusImg from '../assets/home/1.1.JPG';

const Admission = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
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
    <div className="font-sans min-h-screen bg-[#FAFAF8] pb-24">
      {/* Header Banner */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex justify-center items-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[#0A3A23]">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <img src={campusImg} alt="Admission Banner" className="w-full h-full object-cover object-top opacity-40" />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAF8" />
          </svg>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 text-center px-4"
        >
           <span className="inline-block py-1 px-4 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/50 text-[#C89B3C] text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
             Apply Now
           </span>
           <h1 className="text-5xl md:text-6xl font-serif font-black text-white drop-shadow-lg mb-4">
             Join the <span className="text-[#C89B3C] italic">Journey</span>
           </h1>
           <p className="text-white/80 max-w-xl mx-auto text-lg">
             Our admission process is simple and transparent. Please fill out the form below to start your application.
           </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Step Indicator */}
        <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12 flex justify-between items-center relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full hidden sm:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#115E39] to-[#C89B3C] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
              <motion.div 
                animate={{ 
                  backgroundColor: step >= s.id ? '#115E39' : '#ffffff',
                  borderColor: step >= s.id ? '#115E39' : '#f3f4f6',
                  color: step >= s.id ? '#ffffff' : '#9ca3af'
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 shadow-sm"
              >
                {step > s.id ? <CheckCircle size={24} /> : s.icon}
              </motion.div>
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center ${step >= s.id ? 'text-[#0A3A23]' : 'text-gray-400'}`}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-12 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
           <AnimatePresence mode="wait">
             {step === 1 && (
               <motion.div
                 key="step1"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-8"
                 dir={isRTL ? 'rtl' : 'ltr'}
               >
                 <div className="text-center sm:text-start mb-8">
                   <h3 className="text-3xl font-serif font-black text-[#0A3A23] mb-2">Personal Information</h3>
                   <p className="text-gray-500 text-sm">Please provide the student's personal details accurately.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name (English) *</label>
                     <input type="text" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="Enter your full name" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">পূণκ নাম (বাংলা) *</label>
                     <input type="text" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="আপনার নাম লিখুন" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Date of Birth *</label>
                     <input type="date" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gender *</label>
                     <div className="relative">
                       <select className="w-full bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all appearance-none cursor-pointer">
                         <option>Male</option>
                         <option>Female</option>
                       </select>
                       <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                     </div>
                   </div>
                   <div className="flex flex-col gap-2 md:col-span-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Father's Name *</label>
                     <input type="text" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="Enter father's name" />
                   </div>
                   <div className="flex flex-col gap-2 md:col-span-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Present Address *</label>
                     <textarea className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal min-h-[100px] resize-none" placeholder="Enter current address"></textarea>
                   </div>
                 </div>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div
                 key="step2"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-8"
                 dir={isRTL ? 'rtl' : 'ltr'}
               >
                 <div className="text-center sm:text-start mb-8">
                   <h3 className="text-3xl font-serif font-black text-[#0A3A23] mb-2">Academic Details</h3>
                   <p className="text-gray-500 text-sm">Tell us about the student's previous education.</p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2 md:col-span-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Class to Admit *</label>
                     <div className="relative">
                       <select className="w-full bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-[#115E39] focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all appearance-none cursor-pointer">
                         <option>Select a class</option>
                         <option>Play / Nursery</option>
                         <option>Class 1</option>
                         <option>Class 2</option>
                         <option>Hifz Section</option>
                         <option>Alim (General Education)</option>
                       </select>
                       <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                     </div>
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Previous School/Madrasah</label>
                     <input type="text" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="Name of institution" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Class Completed</label>
                     <input type="text" className="bg-[#FAFAF8] border border-gray-200 rounded-2xl px-5 py-4 font-bold text-gray-800 focus:ring-2 focus:ring-[#C89B3C] focus:border-[#C89B3C] outline-none transition-all placeholder:text-gray-400 placeholder:font-normal" placeholder="e.g. Class 5" />
                   </div>
                 </div>
               </motion.div>
             )}

             {step === 3 && (
               <motion.div
                 key="step3"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-8"
                 dir={isRTL ? 'rtl' : 'ltr'}
               >
                 <div className="text-center sm:text-start mb-8">
                   <h3 className="text-3xl font-serif font-black text-[#0A3A23] mb-2">Document Upload</h3>
                   <p className="text-gray-500 text-sm">Please upload the required documents to complete the application.</p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-[#FAFAF8] border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#115E39] hover:bg-[#115E39]/5 transition-all cursor-pointer group relative overflow-hidden">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#115E39] group-hover:scale-110 shadow-sm transition-all duration-300">
                       <Upload size={28} />
                     </div>
                     <span className="font-bold text-gray-700 group-hover:text-[#115E39]">Student Photo *</span>
                     <span className="text-xs text-gray-500">JPEG, PNG up to 2MB</span>
                   </div>
                   <div className="bg-[#FAFAF8] border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#115E39] hover:bg-[#115E39]/5 transition-all cursor-pointer group relative overflow-hidden">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#115E39] group-hover:scale-110 shadow-sm transition-all duration-300">
                       <Upload size={28} />
                     </div>
                     <span className="font-bold text-gray-700 group-hover:text-[#115E39]">Birth Certificate *</span>
                     <span className="text-xs text-gray-500">PDF, JPEG, PNG up to 5MB</span>
                   </div>
                 </div>
                 
                 <div className="mt-8 bg-[#C89B3C]/10 border border-[#C89B3C]/30 rounded-2xl p-6 flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-full bg-[#C89B3C]/20 flex items-center justify-center shrink-0">
                     <Info className="text-[#A38634]" size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#A38634] mb-1">Declaration</h4>
                     <p className="text-sm text-[#A38634]/80 leading-relaxed">
                       By submitting this application, you declare that all information provided is true and accurate. Any false information may lead to the cancellation of admission.
                     </p>
                   </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* Controls */}
           <div className={`flex justify-between mt-12 pt-8 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
             <button 
               onClick={prevStep} 
               disabled={step === 1}
               className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
             >
               <ChevronLeft size={18} className={isRTL ? 'rotate-180' : ''} /> <span className="hidden sm:inline">Back</span>
             </button>
             
             {step < totalSteps ? (
               <button 
                 onClick={nextStep} 
                 className="flex items-center justify-center gap-2 bg-[#115E39] text-white px-8 sm:px-10 py-4 rounded-xl font-bold shadow-[0_8px_20px_rgba(17,94,57,0.3)] hover:shadow-[0_8px_30px_rgba(17,94,57,0.4)] hover:-translate-y-1 transition-all"
               >
                 Next Step <ChevronRight size={18} className={isRTL ? 'rotate-180' : ''} />
               </button>
             ) : (
               <button className="flex items-center justify-center gap-2 btn-gold px-8 sm:px-12 py-4 rounded-xl font-bold shadow-[0_8px_20px_rgba(200,155,60,0.4)] hover:shadow-[0_8px_30px_rgba(200,155,60,0.5)] hover:-translate-y-1 transition-all">
                 Submit Application
               </button>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

// Add ChevronDown icon
const ChevronDown = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default Admission;

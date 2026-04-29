import React from 'react';
import { motion } from 'framer-motion';
import ProgramsGrid from '../components/sections/ProgramsGrid';

const Programs = () => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#115E39] py-12 md:py-16 flex justify-center items-center">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
          Our Programs
        </h1>
      </div>

      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Main Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-sans text-2xl font-bold text-[#C89B3C] mb-6">
              Islamic Studies Program
            </h2>
            <div className="w-full h-64 md:h-[400px] bg-gray-200 rounded-md overflow-hidden mb-8 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200" 
                alt="Islamic Studies" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="font-sans text-[20px] font-bold text-gray-900 mb-4">
              About the Program
            </h3>
            <div className="space-y-3 mb-10 text-[14px] text-gray-600">
              <p className="flex items-start gap-2">
                <span className="text-[#115E39] font-bold">›</span> Foundation in core Islamic beliefs and principles.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#115E39] font-bold">›</span> Deep dive into authentic Hadith literature.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#115E39] font-bold">›</span> Essential Islamic jurisprudence (Fiqh).
              </p>
            </div>

            <h3 className="font-sans text-[20px] font-bold text-gray-900 mb-4">
              Curriculum
            </h3>
            <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
              Our curriculum blends traditional Islamic sciences with contemporary educational methodologies, ensuring a comprehensive understanding of the faith.
            </p>
            <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
               <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-[#F4EFE6] flex items-center justify-center text-[#115E39]">📚</div>
                     <div>
                        <h4 className="text-[14px] font-bold text-gray-800">Introduction to Aqeedah</h4>
                        <p className="text-[12px] text-gray-500">Understanding the core beliefs of Islam.</p>
                     </div>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-[#F4EFE6] flex items-center justify-center text-[#115E39]">🕌</div>
                     <div>
                        <h4 className="text-[14px] font-bold text-gray-800">Fiqh of Worship</h4>
                        <p className="text-[12px] text-gray-500">Rules of purity, prayer, fasting, and charity.</p>
                     </div>
                  </li>
               </ul>
            </div>
          </div>

          {/* Right Sidebar (1:1 with Figma top-right box) */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 bg-[#FDFBF7] border border-gray-200 rounded-md overflow-hidden shadow-sm">
              {/* Sidebar Header */}
              <div className="bg-[#115E39] py-4 text-center">
                <h3 className="text-white font-sans text-[18px] font-bold tracking-wide">
                  Our Programs
                </h3>
              </div>
              
              {/* Sidebar Links */}
              <div className="p-0">
                <ul className="divide-y divide-gray-100">
                  <li>
                    <a href="#" className="block px-6 py-4 bg-[#F4EFE6] text-[#115E39] font-bold text-[14px] border-l-4 border-[#115E39]">
                      Islamic Studies Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-6 py-4 text-gray-600 hover:bg-gray-50 font-medium text-[14px] transition-colors border-l-4 border-transparent hover:border-gray-300">
                      Children's Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-6 py-4 text-gray-600 hover:bg-gray-50 font-medium text-[14px] transition-colors border-l-4 border-transparent hover:border-gray-300">
                      Hifz Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-6 py-4 text-gray-600 hover:bg-gray-50 font-medium text-[14px] transition-colors border-l-4 border-transparent hover:border-gray-300">
                      Vocational Training
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sidebar Action */}
              <div className="p-6 bg-white border-t border-gray-100">
                 <button className="w-full bg-[#115E39] text-white py-3 rounded text-[14px] font-bold hover:bg-[#0A3A23] transition-colors">
                    Enroll Now
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid at bottom */}
      <div className="border-t border-gray-200 pt-8">
        <ProgramsGrid />
      </div>
    </div>
  );
};

export default Programs;

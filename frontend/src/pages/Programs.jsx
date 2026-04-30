import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgramsGrid from '../components/sections/ProgramsGrid';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../api/client';

const Programs = () => {
  const [selectedId, setSelectedId] = useState(null);

  const { data: programsData, isLoading } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      const response = await apiClient.get('/programs/programs/');
      return response.data;
    }
  });

  const programs = programsData?.results || programsData || [];
  
  // Set initial selected ID if not set
  if (!selectedId && programs.length > 0) {
    setSelectedId(programs[0].id);
  }

  const activeProgram = programs.find(p => p.id === selectedId) || programs[0];

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

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
            {activeProgram && (
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-sans text-2xl font-bold text-[#C89B3C] mb-6">
                  {activeProgram.name}
                </h2>
                <div className="w-full h-64 md:h-[400px] bg-gray-200 rounded-md overflow-hidden mb-8 shadow-sm">
                  <img 
                    src={activeProgram.image?.startsWith('http') ? activeProgram.image : `${API_BASE_URL}${activeProgram.image}`} 
                    alt={activeProgram.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-sans text-[20px] font-bold text-gray-900 mb-4">
                  About the Program
                </h3>
                <div className="text-[14px] text-gray-600 leading-relaxed mb-10 whitespace-pre-line">
                  {activeProgram.description}
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-md shadow-sm">
                   <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-[#F4EFE6] flex items-center justify-center text-[#115E39]">📅</div>
                         <div>
                            <h4 className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">Duration</h4>
                            <p className="text-[12px] text-gray-500">{activeProgram.duration}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-[#F4EFE6] flex items-center justify-center text-[#115E39]">💰</div>
                         <div>
                            <h4 className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">Fee</h4>
                            <p className="text-[12px] text-gray-500">{activeProgram.fee} BDT</p>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 bg-[#FDFBF7] border border-gray-200 rounded-md overflow-hidden shadow-sm">
              {/* Sidebar Header */}
              <div className="bg-[#115E39] py-4 text-center">
                <h3 className="text-white font-sans text-[18px] font-bold tracking-wide">
                  Available Programs
                </h3>
              </div>
              
              {/* Sidebar Links */}
              <div className="p-0">
                <ul className="divide-y divide-gray-100">
                  {programs.map((prog) => (
                    <li key={prog.id}>
                      <button 
                        onClick={() => setSelectedId(prog.id)}
                        className={`w-full text-left block px-6 py-4 text-[14px] transition-all border-l-4 ${
                          selectedId === prog.id 
                            ? 'bg-[#F4EFE6] text-[#115E39] font-bold border-[#115E39]' 
                            : 'text-gray-600 hover:bg-gray-50 font-medium border-transparent'
                        }`}
                      >
                        {prog.name}
                      </button>
                    </li>
                  ))}
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

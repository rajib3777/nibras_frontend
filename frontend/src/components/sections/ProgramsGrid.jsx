import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../../api/client';

const ProgramsGrid = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['programs'],
    queryFn: async () => {
      const response = await apiClient.get('/programs/');
      return response.data;
    }
  });

  const programs = data?.results || data || [];

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="container-custom">
        
        {/* Section Title with lines on sides as in Figma */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px] md:max-w-[300px]"></div>
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mx-6">
            Featured Programs
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px] md:max-w-[300px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-3 text-center py-10">Loading programs...</div>
          ) : programs.map((prog, i) => (
            <motion.div 
              key={prog.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-lg font-bold text-gray-900 mb-1">
                    {prog.name}
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-4">
                    {prog.description}
                  </p>
                </div>
                <a href="#" className="text-[#115E39] font-bold text-[13px] hover:text-[#0A3A23] flex items-center gap-1 w-max">
                  Learn more <span className="text-[10px] bg-[#115E39] text-white rounded-full w-4 h-4 flex items-center justify-center">▶</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;

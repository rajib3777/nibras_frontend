import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Users, ExternalLink } from 'lucide-react';

const Committees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState(null);

  const committeesList = [
    { 
      id: 1, 
      name: 'Academic Committee', 
      head: 'Ustadh Omar Faruq', 
      membersCount: 5, 
      description: 'Responsible for curriculum development, teacher training, and monitoring academic progress across all branches.',
      members: ['Ustadh Omar Faruq (Head)', 'Hafiz Bilal', 'Aisha Rahman']
    },
    { 
      id: 2, 
      name: 'Advisory Committee', 
      head: 'Dr. Abdullah Al Mamun', 
      membersCount: 3, 
      description: 'Provides strategic direction and high-level guidance for the foundation’s long-term vision and community impact.',
      members: ['Dr. Abdullah Al Mamun (Head)', 'Prof. Sarah Ahmed', 'Guest Scholars']
    },
    { 
      id: 3, 
      name: 'Finance & Audit Committee', 
      head: 'Hasan Mahmud', 
      membersCount: 4, 
      description: 'Oversees financial planning, budget allocation, and transparency of all foundation funds and donations.',
      members: ['Hasan Mahmud (Head)', 'Financial Advisors']
    },
    { 
      id: 4, 
      name: 'Social Welfare Committee', 
      head: 'Abdur Rahman', 
      membersCount: 6, 
      description: 'Manages charity distributions, orphan care programs, and community relief efforts during crises.',
      members: ['Abdur Rahman (Head)', 'Volunteer Leads']
    }
  ];

  const filteredCommittees = useMemo(() => {
    if (!searchTerm) return committeesList;
    const lowerSearch = searchTerm.toLowerCase();
    return committeesList.filter(c => 
      c.name.toLowerCase().includes(lowerSearch) || 
      c.head.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, committeesList]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#115E39] pt-32 pb-20 relative overflow-hidden flex flex-col justify-center items-center shadow-md px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d2e] to-[#115E39]/90 z-0" />
        <div className="relative z-10 text-center">
           <span className="text-[#C89B3C] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Organization</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-6">
             Our <span className="italic text-[#C89B3C]">Committees</span>
           </h1>
           <p className="text-white/80 max-w-lg mx-auto font-medium">
             Discover the specialized teams working together to achieve the vision of Nibras Foundation.
           </p>
        </div>
      </div>

      <div className="container-custom py-16">
        
        {/* Live Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search committees by name or head..."
            className="w-full bg-white border-2 border-gray-100 rounded-full py-4 pl-12 pr-4 font-bold text-gray-700 focus:outline-none focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/10 transition-all shadow-sm"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#115E39] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          <AnimatePresence>
            {filteredCommittees.map((committee, i) => (
                <motion.div 
                  layout
                  key={committee.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#115E39] group-hover:bg-[#115E39] group-hover:text-white transition-colors">
                      <Users size={24} />
                    </div>
                    <span className="bg-gray-50 text-gray-500 font-bold text-xs px-4 py-2 rounded-full">
                      {committee.membersCount} Members
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#0f3d2e] mb-2">{committee.name}</h3>
                  <p className="text-[#C89B3C] text-[13px] font-black uppercase tracking-widest mb-6 block">
                    Head: {committee.head}
                  </p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {committee.description}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedCommittee(committee)}
                    className="w-full bg-gray-50 text-[#0f3d2e] py-4 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#115E39] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    View Details <ExternalLink size={16} />
                  </button>
                </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedCommittee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCommittee(null)}
            className="fixed inset-0 bg-[#0f3d2e]/80 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-2xl w-full relative p-10 md:p-14"
            >
              <button 
                onClick={() => setSelectedCommittee(null)}
                className="absolute top-6 right-6 bg-gray-100 p-2 rounded-full text-gray-800 hover:bg-[#C89B3C] hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 rounded-2xl bg-[#115E39]/10 flex items-center justify-center text-[#115E39] mb-8">
                <Users size={28} />
              </div>
              
              <h3 className="font-black text-3xl md:text-4xl text-[#0f3d2e] mb-2 leading-none">{selectedCommittee.name}</h3>
              <p className="text-[#C89B3C] font-black text-[12px] uppercase tracking-[0.2em] mb-8">Head: {selectedCommittee.head}</p>
              
              <div className="w-12 h-1 bg-gray-200 mb-8 rounded-full"></div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Committee Responsibilities</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {selectedCommittee.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Core Members</h4>
                  <ul className="space-y-3">
                    {selectedCommittee.members.map((m, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#C89B3C]"></div>
                        <span className="text-gray-700 font-bold text-sm">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Committees;

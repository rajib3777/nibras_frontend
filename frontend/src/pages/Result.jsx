import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Printer, Award, FileText, ChevronRight } from 'lucide-react';

const Result = () => {
  const [studentId, setStudentId] = useState('');
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Academic Performance</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-none mb-6">
            Online <span className="text-accent italic">Results</span>
          </h1>
          <p className="text-gray-500 font-bold max-w-xl mx-auto">
            Access your examination reports and marksheet instantly. Enter your details below to view your performance.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Examination</label>
              <select className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none">
                <option>Annual Exam 2026</option>
                <option>Half Yearly 2025</option>
                <option>Monthly Test - March</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Student ID / Roll</label>
              <input 
                type="text" 
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="bg-gray-50 border-none rounded-xl px-5 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" 
                placeholder="Ex: NF-2026-001" 
              />
            </div>
            <button 
              onClick={() => setShowResult(true)}
              className="bg-[#0f3d2e] text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-[#0f3d2e]/20 hover:shadow-[#0f3d2e]/40 transition-all flex items-center justify-center gap-2"
            >
              Search Result <Search size={16} />
            </button>
          </div>
        </div>

        {/* Result Display (Mockup) */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Student Info */}
            <div className="bg-[#0f3d2e] text-white p-8 rounded-[40px] flex flex-col md:flex-row justify-between items-center gap-8 border-b-8 border-accent shadow-xl">
               <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Award size={40} className="text-accent" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Abdullah Al-Faisal</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent">Roll: 101</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Class: 8</span>
                    </div>
                 </div>
               </div>
               <div className="text-center md:text-right">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Final Grade</div>
                  <div className="text-5xl font-black text-accent tracking-tighter italic">A+</div>
               </div>
            </div>

            {/* Marksheet Table */}
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Marks</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Obtained</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Grade</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                     {[
                       { sub: 'Quran & Tajweed', total: 100, obt: 95, grade: 'A+' },
                       { sub: 'Arabic Language', total: 100, obt: 88, grade: 'A+' },
                       { sub: 'Islamic History', total: 100, obt: 92, grade: 'A+' },
                       { sub: 'General Mathematics', total: 100, obt: 85, grade: 'A' },
                     ].map((row, i) => (
                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-8 py-6 font-black text-[#0f3d2e] uppercase text-xs tracking-wide">{row.sub}</td>
                          <td className="px-8 py-6 font-bold text-gray-500 text-sm">{row.total}</td>
                          <td className="px-8 py-6 font-black text-[#0f3d2e] text-sm">{row.obt}</td>
                          <td className="px-8 py-6 font-black text-accent italic">{row.grade}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
               <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#0f3d2e] px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
                  <Download size={14} /> Download Marksheet
               </button>
               <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#0f3d2e] px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
                  <Printer size={14} /> Print Result
               </button>
               <button className="flex items-center gap-2 bg-[#0f3d2e] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all">
                  Contact Support <ChevronRight size={14} />
               </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Result;

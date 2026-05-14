import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, X, Eye } from 'lucide-react';
import readingImg from '../assets/generated/students_reading_quran_1778701362135.png'; // Placeholder for book cover

const Publications = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const publications = [
    {
      id: 1,
      title: 'Tafseer-e-Nibras',
      author: 'Dr. Abdullah Al Mamun',
      category: 'Research',
      cover: readingImg,
      pages: 342,
      description: 'An in-depth analysis and modern commentary on selected chapters of the Holy Quran, focusing on practical applications in daily life.',
      pdfUrl: '#'
    },
    {
      id: 2,
      title: 'Islamic Finance Principles',
      author: 'Hasan Mahmud',
      category: 'Academic',
      cover: readingImg,
      pages: 156,
      description: 'A comprehensive guide to understanding the core principles of Islamic banking, finance, and ethical investments.',
      pdfUrl: '#'
    },
    {
      id: 3,
      title: 'Seerat-un-Nabi for Youth',
      author: 'Ustadh Omar Faruq',
      category: 'General',
      cover: readingImg,
      pages: 210,
      description: 'The life of Prophet Muhammad (PBUH) presented in an engaging and relatable manner for young adults.',
      pdfUrl: '#'
    },
    {
      id: 4,
      title: 'Monthly Nibras Digest',
      author: 'Editorial Board',
      category: 'Magazine',
      cover: readingImg,
      pages: 48,
      description: 'The monthly publication featuring articles on contemporary issues, student achievements, and academic papers.',
      pdfUrl: '#'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#115E39] pt-32 pb-20 relative overflow-hidden flex flex-col justify-center items-center shadow-md px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d2e] to-[#115E39]/90 z-0" />
        <div className="relative z-10 text-center">
           <span className="text-[#C89B3C] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Library & Research</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-6">
             Our <span className="italic text-[#C89B3C]">Publications</span>
           </h1>
           <p className="text-white/80 max-w-lg mx-auto font-medium">
             Explore our collection of academic papers, books, and monthly magazines published by the foundation.
           </p>
        </div>
      </div>

      <div className="container-custom py-20">
        
        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {publications.map((book, idx) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md mb-6 group-hover:shadow-2xl transition-all duration-500">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#0f3d2e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="w-12 h-12 rounded-full bg-white text-[#0f3d2e] flex items-center justify-center hover:bg-[#C89B3C] hover:text-white transition-colors"
                  >
                    <Eye size={20} />
                  </button>
                  <a href={book.pdfUrl} className="w-12 h-12 rounded-full bg-[#C89B3C] text-white flex items-center justify-center hover:bg-white hover:text-[#0f3d2e] transition-colors">
                    <Download size={20} />
                  </a>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0f3d2e] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {book.category}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-black text-[#0f3d2e] mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-3">By {book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PDF Reader Modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0f3d2e]/95 z-[100] flex flex-col backdrop-blur-md"
          >
            {/* Modal Header */}
            <div className="h-20 bg-[#0f3d2e] border-b border-white/10 flex items-center justify-between px-8 shrink-0">
               <div className="flex items-center gap-4 text-white">
                  <BookOpen className="text-[#C89B3C]" size={24} />
                  <div>
                    <h3 className="font-bold">{selectedBook.title}</h3>
                    <p className="text-xs text-white/50">{selectedBook.pages} Pages</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors flex items-center gap-2">
                    <Download size={16} /> Download PDF
                  </button>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-red-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
               </div>
            </div>
            
            {/* Modal Body / PDF Viewer Area */}
            <div className="flex-grow flex items-center justify-center p-8">
               <div className="w-full max-w-4xl aspect-[1/1.4] md:aspect-video bg-white rounded-lg shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                     <BookOpen className="text-gray-300 mx-auto mb-4" size={64} />
                     <h2 className="text-2xl font-bold text-gray-400 mb-2">PDF Viewer Component</h2>
                     <p className="text-gray-400">Embed react-pdf or iframe here to view '{selectedBook.title}'</p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Publications;

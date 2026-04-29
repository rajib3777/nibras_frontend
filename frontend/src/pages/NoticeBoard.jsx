import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Download, Search, Tag, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/client';

const NoticeBoard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['notices'],
    queryFn: async () => {
      const response = await apiClient.get('/news/notices/');
      return response.data;
    }
  });

  const rawNotices = data?.results || data || [];
  
  // Map API notices to frontend format, or use empty array
  const notices = rawNotices.map(notice => ({
    id: notice.id,
    title: notice.title,
    date: new Date(notice.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: notice.is_urgent ? 'Urgent' : 'General',
    urgent: notice.is_urgent,
    description: notice.content
  }));

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Official Notices</span>
            <h1 className="text-4xl md:text-6xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-none mb-4">
              Stay <span className="text-accent italic">Updated</span>
            </h1>
            <p className="text-gray-500 font-bold">
              Check this section regularly for important announcements, schedules, and official updates from Nibras Foundation.
            </p>
          </div>

          <div className="w-full md:w-auto relative group">
            <input 
              type="text" 
              placeholder="Search notices..." 
              className="bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 pl-14 font-bold text-gray-700 outline-none focus:border-accent transition-all w-full md:min-w-[300px] shadow-sm"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={20} />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-6">
          {notices.map((notice, idx) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white p-8 rounded-[40px] shadow-sm border-2 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group ${notice.urgent ? 'border-accent/10 bg-gradient-to-br from-white to-accent/5 hover:border-accent' : 'border-gray-100 hover:border-gray-200'}`}
            >
              {notice.urgent && (
                <div className="absolute top-0 right-0 bg-accent text-white px-6 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-bl-2xl">
                   Urgent
                </div>
              )}

              <div className="flex flex-col items-center gap-1 shrink-0 p-4 bg-gray-50 rounded-3xl min-w-[100px] group-hover:bg-accent/10 transition-colors">
                <span className="text-2xl font-black text-[#0f3d2e]">{notice.date.split(' ')[1].replace(',', '')}</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{notice.date.split(' ')[0]}</span>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">{notice.date.split(' ')[2]}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#0f3d2e]/5 text-[#0f3d2e] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Tag size={12} className="text-accent" /> {notice.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                    <Calendar size={12} /> Posted 2 days ago
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#0f3d2e] mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                  {notice.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-[#0f3d2e] text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#0f3d2e]/10 hover:shadow-[#0f3d2e]/30 transition-all">
                    Download Attachment <Download size={14} />
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-[#0f3d2e] transition-colors">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              <div className="absolute right-8 bottom-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Bell size={120} className="text-[#0f3d2e]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-gray-100 text-[#0f3d2e] px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all shadow-sm">
            Load Previous Notices
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;

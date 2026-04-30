import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, ArrowRight } from 'lucide-react';

import { useQuery } from '@tanstack/react-query';
import apiClient from '../../api/client';

const NoticeBoard = () => {
  const { data: noticesData, isLoading } = useQuery({
    queryKey: ['notices'],
    queryFn: async () => {
      const response = await apiClient.get('/news/notices/');
      return response.data;
    }
  });

  const noticesRaw = noticesData?.results || noticesData || [];
  
  // Map backend data to frontend format
  const notices = noticesRaw.map(n => {
    const d = new Date(n.created_at);
    return {
      id: n.id,
      date: d.getDate().toString().padStart(2, '0'),
      month: d.toLocaleString('en-US', { month: 'short' }),
      year: d.getFullYear(),
      title: n.title,
      content: n.content,
      type: n.is_urgent ? 'Urgent' : 'Notice',
      created_at: n.created_at
    };
  });

  const featuredNotice = notices.length > 0 ? notices[0] : {
    title: 'নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়েছে। আজই আবেদন করুন।',
    content: 'নিবরাস মাদরাসায় ২০২৬ শিক্ষাবর্ষে তাহফিযুল কুরআন এবং সাধারণ বিভাগে ভর্তি চলছে। সীমিত আসন, দ্রুত যোগাযোগ করুন।',
    date: '01',
    month: 'Dec',
    year: '2025'
  };

  const listNotices = notices.length > 1 ? notices.slice(1, 6) : notices.slice(0, 5);
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Bell size={14} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f3d2e]">Updates</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-serif font-black text-gray-900"
            >
              নোটিশ <span className="text-accent italic">বোর্ড</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-[#0f3d2e] font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors"
          >
            সকল নোটিশ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Pinned Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#0f3d2e] rounded-[2rem] transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative h-full bg-white border-2 border-[#0f3d2e] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[100px] -z-10"></div>
              
              <div>
                <div className="inline-block bg-[#0f3d2e] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">
                  Featured
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug mb-6 font-serif">
                  {featuredNotice.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {featuredNotice.content}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                  <Calendar size={16} /> {featuredNotice.date} {featuredNotice.month} {featuredNotice.year}
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0f3d2e] group-hover:text-white group-hover:border-[#0f3d2e] transition-all">
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notice List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {listNotices.map((notice, i) => (
              <motion.div 
                key={notice.id || i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer first:border-t"
              >
                {/* Date Block */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center group-hover:bg-[#0f3d2e] group-hover:border-[#0f3d2e] transition-colors">
                   <span className="text-2xl font-black text-gray-900 group-hover:text-white font-serif leading-none mb-1">{notice.date}</span>
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-accent">{notice.month}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                   <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-2 block">{notice.type}</span>
                   <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#0f3d2e] transition-colors">
                     {notice.title}
                   </h4>
                </div>

                {/* Action */}
                <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 items-center justify-center group-hover:border-accent group-hover:bg-accent text-gray-400 group-hover:text-white transition-all">
                   <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;

import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import apiClient, { API_BASE_URL } from '../../api/client';

const NewsEvents = () => {
  const { data: newsData, isLoading: isNewsLoading } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const response = await apiClient.get('/news/articles/');
      return response.data;
    }
  });

  const { data: eventsData, isLoading: isEventsLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await apiClient.get('/news/events/');
      return response.data;
    }
  });

  const fallbackNews = [
    {
      id: 'n1',
      title: 'Annual Quran Competition 2024',
      summary: 'Students from all branches participated in the annual Hifz competition.',
      created_at: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'n2',
      title: 'New Campus Inauguration',
      summary: 'We are thrilled to announce the opening of our new campus.',
      created_at: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const fallbackEvents = [
    {
      id: 'e1',
      title: 'Parent-Teacher Meeting',
      date: new Date(Date.now() + 86400000 * 5).toISOString(),
      time: '10:00 AM',
      location: 'Main Auditorium'
    },
    {
      id: 'e2',
      title: 'Islamic Book Fair',
      date: new Date(Date.now() + 86400000 * 15).toISOString(),
      time: '09:00 AM',
      location: 'Campus Ground'
    }
  ];

  let newsList = newsData?.results || newsData || [];
  if (newsList.length === 0) newsList = fallbackNews;

  let eventsList = eventsData?.results || eventsData || [];
  if (eventsList.length === 0) eventsList = fallbackEvents;
  const featuredNews1 = newsList.length > 0 ? newsList[0] : null;
  const featuredNews2 = newsList.length > 1 ? newsList[1] : null;
  const featuredEvent = eventsList.length > 0 ? eventsList[0] : null;

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex items-center justify-start mb-10">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mr-6">
            Latest News & Events
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[800px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Main News */}
          {featuredNews1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-md overflow-hidden border border-gray-100 flex flex-col group relative"
            >
              <div className="h-8 w-full bg-[#E5C167] overflow-hidden">
                  <img src={featuredNews1.image ? (featuredNews1.image.startsWith('http') ? featuredNews1.image : `${API_BASE_URL}${featuredNews1.image}`) : "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=600&h=100"} className="w-full h-full object-cover opacity-50" alt="" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between z-10 bg-white">
                <div>
                  <h3 className="font-sans text-[18px] font-bold text-gray-900 mb-2 leading-snug">
                    {featuredNews1.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-6 line-clamp-2">
                    {featuredNews1.content || "Read our latest update online."}
                  </p>
                </div>
                <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-gray-500 text-[12px] font-medium">{new Date(featuredNews1.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <button className="text-gray-900 text-[13px] font-bold hover:text-[#115E39]">
                    Read More
                  </button>
                </div>
              </div>

              <div className="h-10 w-full overflow-hidden mt-auto">
                  <img src={featuredNews1.image ? (featuredNews1.image.startsWith('http') ? featuredNews1.image : `${API_BASE_URL}${featuredNews1.image}`) : "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=600&h=100"} className="w-full h-full object-cover" alt="" />
              </div>
            </motion.div>
          )}

          {/* Card 2: Secondary News */}
          {featuredNews2 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-md overflow-hidden border border-gray-100 flex flex-col group"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={featuredNews2.image ? (featuredNews2.image.startsWith('http') ? featuredNews2.image : `${API_BASE_URL}${featuredNews2.image}`) : "https://images.unsplash.com/photo-1606059728286-4e5554f67d2f?auto=format&fit=crop&q=80&w=600&h=400"} 
                  alt={featuredNews2.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-[16px] font-bold text-gray-900 mb-2">
                    {featuredNews2.title}
                  </h3>
                </div>
                <div className="flex justify-end items-end mt-4">
                  <button className="bg-[#B8860B] text-white text-[12px] font-semibold px-4 py-1.5 rounded hover:bg-[#9B700A] transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Upcoming Event */}
          {featuredEvent && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-md overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="bg-[#3D694F] text-white text-center py-3">
                <h3 className="font-sans text-[15px] font-semibold tracking-wide">
                  Upcoming Event
                </h3>
              </div>
              
              <div className="bg-[#F4EFE6] p-6 flex-grow relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-1">
                       {[...Array(36)].map((_, i) => (
                          <div key={i} className="border border-[#3D694F]"></div>
                       ))}
                    </div>
                 </div>

                 <div className="relative z-10">
                    <h4 className="font-sans text-[16px] font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                      {featuredEvent.title}
                    </h4>
                    <ul className="space-y-3 text-[13px] text-gray-800 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3D694F]"></span> {new Date(featuredEvent.start_time).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3D694F]"></span> {featuredEvent.location}
                      </li>
                    </ul>
                 </div>
              </div>
              
              <div className="bg-[#1A4B3A] p-4 flex justify-end">
                <button className="border border-white/40 text-white text-[12px] font-medium px-4 py-1.5 rounded hover:bg-white hover:text-[#1A4B3A] transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

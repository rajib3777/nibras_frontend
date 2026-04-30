import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Raza",
      role: "Parent",
      content: "Nibras Foundation has completely transformed my son's approach to learning. The blend of Hifz and general education is exactly what we were looking for.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Mariam Siddiqua",
      role: "Student",
      content: "The teachers here are incredibly supportive. I feel like I'm growing not just academically, but also spiritually and personally.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Dr. Salman Farsi",
      role: "Community Member",
      content: "A beacon of light for our community. Their social welfare projects are as impressive as their educational standards.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C89B3C] font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0A3A23] leading-tight"
          >
            What People <span className="text-[#C89B3C] italic">Say About Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-[40px] bg-[#FDFBF7] border border-gray-100 group hover:bg-[#0A3A23] transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-[#C89B3C] group-hover:text-white/20 transition-colors">
                <Quote size={40} fill="currentColor" opacity={0.2} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#C89B3C" className="text-[#C89B3C]" />
                ))}
              </div>

              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-8 transition-colors">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C89B3C]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3A23] group-hover:text-white transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#C89B3C] uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

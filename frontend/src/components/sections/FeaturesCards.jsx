import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Education',
    description: 'Providing quality education for children.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png', // Temporary placeholder for the exact 3D book icon
    delay: 0.1,
  },
  {
    title: 'Quran & Islamic Studies',
    description: 'Teaching the Holy Quran and Islamic knowledge.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3389/3389081.png', // Placeholder for Quran icon
    delay: 0.2,
  },
  {
    title: 'Social Welfare',
    description: 'Helping those in need in our community.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3062/3062310.png', // Placeholder for hands holding heart
    delay: 0.3,
  }
];

const FeaturesCards = () => {
  return (
    <section className="relative z-30 -mt-16 container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: feature.delay }}
            className="bg-[#FDFBF7] rounded-md p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4 h-12 w-12 flex items-center justify-center">
              <img src={feature.iconUrl} alt={feature.title} className="max-h-full object-contain" />
            </div>
            <h3 className="font-sans text-[17px] font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              {feature.description}
            </p>
            {/* Small decorative line from figma */}
            {index === 0 && (
              <div className="flex gap-1 mt-4">
                <span className="text-[#C89B3C] text-[10px]">সুবহানাল্লাহ</span>
              </div>
            )}
            {index === 1 && (
              <div className="flex gap-1 mt-4">
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCards;

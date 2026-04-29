import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonationWidget = () => {
  const [amount, setAmount] = useState(1000);
  const [isMonthly, setIsMonthly] = useState(false);
  const amounts = [500, 1000, 2000];

  return (
    <section className="bg-[#115E39] py-20 relative overflow-hidden">
      {/* Arabic Calligraphy Background Placeholder */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-white text-center lg:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
            Support Nibras Foundation
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-white/90 mb-6" dir="rtl">
            وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا
          </p>
          <p className="text-white/80 text-lg mb-2">
            "And who is better in speech than one who calls to Allah and does righteous deeds."
          </p>
          <p className="text-[#C89B3C] font-medium">- (Quran 41:33)</p>
        </motion.div>

        {/* Right Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-[450px] w-full bg-[#FDFBF7] rounded-2xl p-8 shadow-2xl"
        >
          {/* Amount Selection */}
          <div className="flex gap-2 mb-6">
            {amounts.map(amt => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  amount === amt 
                  ? 'bg-[#115E39] text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#115E39]'
                }`}
              >
                {amt}
              </button>
            ))}
            <button
              onClick={() => setAmount('Other')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                amount === 'Other' 
                ? 'bg-[#115E39] text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#115E39]'
              }`}
            >
              Other
            </button>
          </div>

          {/* Type Selection */}
          <div className="flex gap-6 mb-8 text-gray-700 font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="donationType" 
                checked={!isMonthly} 
                onChange={() => setIsMonthly(false)} 
                className="w-4 h-4 text-[#115E39] focus:ring-[#115E39]"
              />
              One - Time
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="donationType" 
                checked={isMonthly} 
                onChange={() => setIsMonthly(true)} 
                className="w-4 h-4 text-[#115E39] focus:ring-[#115E39]"
              />
              Monthly
            </label>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#115E39] focus:ring-1 focus:ring-[#115E39]"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#115E39] focus:ring-1 focus:ring-[#115E39]"
            />
          </div>

          {/* Submit */}
          <button 
            onClick={() => alert('Thank you for choosing to donate! Payment gateway integration is coming soon.')}
            className="w-full bg-[#C89B3C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF60] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Donate Now
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-4 font-medium flex items-center justify-center gap-1">
            <span className="text-[#C89B3C]">✨</span> Zakat & Sadaqah accepted
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default DonationWidget;

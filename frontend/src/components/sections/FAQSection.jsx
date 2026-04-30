import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-[#0A3A23] pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-2 rounded-full ${isOpen ? 'bg-[#115E39] text-white' : 'bg-gray-50 text-gray-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the admission requirements for Nibras Foundation?",
      answer: "Admission requirements vary by program. Generally, we require a copy of the student's birth certificate, previous academic records (if applicable), and an initial assessment interview. For Hifz programs, a basic proficiency in Quran reading is preferred."
    },
    {
      question: "Are there any scholarship opportunities available?",
      answer: "Yes, Nibras Foundation provides need-based scholarships and zakat-funded support for deserving students. Applications for financial aid can be submitted during the admission process or at the beginning of each semester."
    },
    {
      question: "What is the daily schedule for students?",
      answer: "Standard classes run from 8:00 AM to 1:30 PM. Hifz students often have additional sessions in the morning and late afternoon. We follow a balanced curriculum that includes both Islamic studies and general education subjects."
    },
    {
      question: "How can I contribute or donate to the foundation?",
      answer: "You can donate through our website's donation portal using local and international payment methods. We accept general donations, Zakat, and specific project funding. You can also visit our office for physical contributions."
    },
    {
        question: "Is there transportation available for students?",
        answer: "Yes, we provide transportation services across major routes in the city. Please contact our administrative office for details on specific routes and monthly transport fees."
      }
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Column: Title & Info */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#115E39]/10 text-[#115E39] text-xs font-black uppercase tracking-widest mb-6">
                <HelpCircle size={14} />
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A3A23] leading-tight mb-6">
                Frequently Asked <span className="text-[#C89B3C] italic">Questions</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Can't find what you're looking for? Reach out to our support team for more specific inquiries.
              </p>
              <button className="bg-[#0A3A23] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg shadow-[#0A3A23]/20">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Column: FAQ Items */}
          <div className="md:w-2/3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

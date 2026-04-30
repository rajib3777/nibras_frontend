import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import apiClient from '../../api/client';

const KNOWLEDGE_BASE = {
  "admission": "Admission for the 2024-25 session is now open. You can apply online via our Admission portal or visit the campus between 8 AM and 2 PM.",
  "programs": "We offer various programs including Tahfizul Quran, Islamic Studies, and General Education from Primary to Secondary levels.",
  "fees": "Fee structures vary by grade. Please contact our administrative office or check the 'Fees' section in the Student Portal for a detailed breakdown.",
  "location": "Nibras Foundation is located in the heart of the city. You can find the exact map location on our Contact page.",
  "contact": "You can reach us at info@nibrasfoundation.org or call our support line at +880 1234-567890.",
  "greeting": "Assalamu Alaikum! I am Nibras AI Assistant. I can help you with admissions, programs, fees, and general information. What would you like to know?"
};

const QUICK_REPLIES = [
  { label: "Admission Info", key: "admission" },
  { label: "Our Programs", key: "programs" },
  { label: "Contact Us", key: "contact" },
  { label: "Location", key: "location" }
];

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: KNOWLEDGE_BASE.greeting, isBot: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const getLocalResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("admission") || lowerText.includes("apply")) return KNOWLEDGE_BASE.admission;
    if (lowerText.includes("program") || lowerText.includes("course")) return KNOWLEDGE_BASE.programs;
    if (lowerText.includes("fee") || lowerText.includes("cost")) return KNOWLEDGE_BASE.fees;
    if (lowerText.includes("location") || lowerText.includes("where")) return KNOWLEDGE_BASE.location;
    if (lowerText.includes("contact") || lowerText.includes("call") || lowerText.includes("email")) return KNOWLEDGE_BASE.contact;
    return "I'm not sure about that specifically, but I can assist you with admissions, programs, and general inquiries. Would you like to talk to a human representative?";
  };

  const handleSend = async (customText = null) => {
    const messageText = customText || input;
    if (!messageText.trim()) return;

    const userMessage = { 
      text: messageText, 
      isBot: false, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(async () => {
      try {
        let replyText;
        try {
          const response = await apiClient.post('/core/chat/', { message: messageText });
          replyText = response.data.reply;
        } catch (e) {
          // Fallback to local knowledge base if API fails
          replyText = getLocalResponse(messageText);
        }
        
        setMessages(prev => [...prev, { 
          text: replyText, 
          isBot: true, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }]);
      } finally {
        setIsTyping(false);
      }
    }, 1000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-[#0A3A23] to-[#115E39] text-white p-5 rounded-full shadow-[0_10px_30px_rgba(10,58,35,0.3)] flex items-center justify-center transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="relative">
          <MessageCircle size={30} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C89B3C] rounded-full border-2 border-[#0A3A23] animate-pulse"></span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-8 right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-[100] flex flex-col overflow-hidden border border-gray-100/50 backdrop-blur-xl"
          >
            {/* Advanced Header */}
            <div className="bg-[#0A3A23] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Bot size={24} className="text-[#C89B3C]" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0A3A23]"></span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg tracking-tight">Nibras Smart AI</h3>
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={10} className="text-[#C89B3C] animate-pulse" />
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Always Active</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 flex flex-col gap-6 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  key={idx} 
                  className={`flex gap-3 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0 flex items-center justify-center text-[#0A3A23]">
                       <Bot size={16} />
                    </div>
                  )}
                  <div className={`flex flex-col gap-1 max-w-[80%] ${msg.isBot ? 'items-start' : 'items-end'}`}>
                    <div className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                      msg.isBot 
                        ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                        : 'bg-[#115E39] text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold px-1 uppercase">{msg.time}</span>
                  </div>
                  {!msg.isBot && (
                    <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/20 flex-shrink-0 flex items-center justify-center text-[#C89B3C]">
                       <User size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#C89B3C] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Actions & Input */}
            <div className="p-6 bg-white border-t border-gray-100/50 space-y-4">
              {/* Quick Replies */}
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.key}
                    onClick={() => handleSend(reply.label)}
                    className="flex-shrink-0 px-4 py-2 bg-gray-50 hover:bg-[#C89B3C]/10 hover:text-[#C89B3C] border border-gray-200 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              {/* Input Group */}
              <div className="flex gap-3 items-center">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question..."
                    className="w-full bg-gray-100 border-none rounded-2xl px-6 py-4 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#0A3A23] outline-none transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <Command size={14} />
                  </div>
                </div>
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="w-14 h-14 bg-[#0A3A23] text-white rounded-2xl flex items-center justify-center hover:bg-black hover:scale-105 transition-all disabled:opacity-50 shadow-lg shadow-[#0A3A23]/20"
                >
                  <Send size={20} className="-mr-0.5 mt-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Plus, Minus, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useSettings } from '../hooks/useSettings';
import { useSocialMedia } from '../hooks/useSocialMedia';
import apiClient from '../api/client';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const { data: settings } = useSettings();
  const { data: socialData } = useSocialMedia();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const address = settings?.address || 'House 12, Road 5, Block D, Bashundhara R/A, Dhaka';
  const phone = settings?.phone || '+880 1234 567890';
  const email = settings?.email || 'info@nibras.org';
  const socialLinks = socialData?.results || socialData || [];

  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'facebook': return <Facebook size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'youtube': return <Youtube size={20} />;
      default: return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, placeholder, value } = e.target;
    // Map placeholder to field name if needed, but let's just use proper names
    const fieldMap = {
        'Full Name': 'name',
        'Email Address': 'email',
        'Subject': 'subject',
        'Your Message': 'message'
    };
    const field = fieldMap[placeholder] || name;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await apiClient.post('/core/contact-messages/', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { 
      q: 'How can I apply for admission?', 
      a: 'You can apply online through our Admission portal or visit our campus for a physical form. The online process involves filling out a multi-step form and uploading necessary documents.' 
    },
    { 
      q: 'What are the foundation hours?', 
      a: 'The foundation is open from Saturday to Thursday, 8:00 AM to 4:00 PM. We remain closed on Fridays and national/religious holidays.' 
    },
    { 
      q: 'Is there a donation structure?', 
      a: 'Yes, we accept both one-time and monthly recurring donations. You can choose to donate for general education, Hifz students, or specific projects.' 
    },
    { 
      q: 'How can I reach the director?', 
      a: 'For specific inquiries or to message the director, please use the contact form provided here and specify the department you wish to reach.' 
    }
  ];

  return (
    <div className="pt-[260px] md:pt-[300px] lg:pt-[340px] pb-20 font-sans min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 mb-32">
         <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Info */}
            <div className="flex-1">
               <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
               <h1 className="text-5xl md:text-7xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-[0.9] mb-8">
                 We'd Love to <br /> <span className="text-accent italic">Connect</span>
               </h1>
               <p className="text-gray-500 font-bold mb-12 max-w-md text-lg">
                 Have questions or want to learn more about {settings?.site_name || 'Nibras Foundation'}? Our team is here to help.
               </p>

               <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                     <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-all text-[#0f3d2e]">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Our Location</h4>
                        <p className="text-[#0f3d2e] font-black text-lg">{address}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-all text-[#0f3d2e]">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone Number</h4>
                        <p className="text-[#0f3d2e] font-black text-lg">{phone}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-all text-[#0f3d2e]">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Address</h4>
                        <p className="text-[#0f3d2e] font-black text-lg">{email}</p>
                     </div>
                  </div>
               </div>

               <div className="mt-12 flex gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0f3d2e] text-white rounded-xl flex items-center justify-center hover:bg-accent transition-all hover:scale-110 shadow-lg shadow-[#0f3d2e]/20"
                    >
                       {getIcon(link.platform)}
                    </a>
                  ))}
               </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
               <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-2xl border border-gray-100">
                  <h3 className="text-3xl font-black text-[#0f3d2e] uppercase tracking-tight mb-8">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="flex flex-col md:flex-row gap-6">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name" 
                          required
                          className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" 
                        />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address" 
                          required
                          className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" 
                        />
                     </div>
                     <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject" 
                        required
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none" 
                     />
                     <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message" 
                        required
                        rows="5" 
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-accent outline-none"
                     ></textarea>
                     
                     {submitStatus === 'success' && (
                        <p className="text-green-600 font-bold text-sm">Message sent successfully!</p>
                     )}
                     {submitStatus === 'error' && (
                        <p className="text-red-600 font-bold text-sm">Failed to send message. Please try again.</p>
                     )}

                     <button 
                        disabled={isSubmitting}
                        className="w-full bg-[#0f3d2e] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-[#0f3d2e]/20 hover:bg-black transition-all disabled:opacity-50"
                     >
                        {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] md:h-[600px] w-full bg-gray-100 relative overflow-hidden mb-32">
         <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-black uppercase tracking-widest text-2xl">
            [Google Maps Embedded Here]
         </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
         <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f3d2e] uppercase tracking-tighter leading-none mb-6">
               Frequently Asked <span className="text-accent italic">Questions</span>
            </h2>
         </div>

         <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                 <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-all"
                 >
                    <span className="text-lg font-black text-[#0f3d2e] uppercase tracking-tight">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-accent text-white border-accent rotate-180' : 'text-[#0f3d2e]'}`}>
                       {activeFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                 </button>
                 <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                 >
                    <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
                       {faq.a}
                    </div>
                 </motion.div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Contact;

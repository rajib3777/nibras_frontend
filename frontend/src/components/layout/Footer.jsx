import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import nibrasLogo from '../../assets/nibras_logo.png';
import { useSettings } from '../../hooks/useSettings';

const Footer = () => {
  const { data: settings } = useSettings();
  
  const siteName = settings?.site_name || 'Nibras Foundation';
  const tagline = settings?.about_short || 'Dedicated to lighting hearts with knowledge. We provide quality education, memorization of the Quran, and social welfare programs to build a better future for our community.';
  const address = settings?.address || '123 Islamic Center Road, Dhaka, Bangladesh';
  const phone = settings?.phone || '+880 1234 567 890';
  const email = settings?.email || 'info@nibrasfoundation.org';
  return (
    <footer className="bg-[#0A3A23] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C89B3C] via-[#E5C167] to-[#A38634]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg inline-flex w-max">
              <img src={nibrasLogo} alt="Nibras Logo" className="w-8 h-8" />
              <span className="font-serif text-[#115E39] font-bold text-lg">{siteName}</span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              {tagline}
            </p>
          </motion.div>

          {/* Column 2: Explore Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-serif text-xl font-bold text-[#C89B3C]">Explore</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><a href="#" className="hover:text-[#C89B3C] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#C89B3C] transition-colors">Featured Programs</a></li>
              <li><a href="#" className="hover:text-[#C89B3C] transition-colors">Meet the Team</a></li>
              <li><a href="#" className="hover:text-[#C89B3C] transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-[#C89B3C] transition-colors">Make a Donation</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-serif text-xl font-bold text-[#C89B3C]">Contact Us</h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C89B3C] flex-shrink-0" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C89B3C] flex-shrink-0" />
                <span>{email}</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="font-serif text-xl font-bold text-[#C89B3C]">Newsletter</h4>
            <p className="text-white/80 text-sm">
              Subscribe to get updates on our latest programs and events.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#115E39] border border-white/20 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#C89B3C] transition-colors"
              />
              <button className="w-full bg-[#C89B3C] text-white py-2.5 rounded-md text-sm font-bold hover:bg-[#D4AF60] transition-colors shadow-md">
                Subscribe Now
              </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

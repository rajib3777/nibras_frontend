import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import nibrasLogo from '../../assets/nibras_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useTranslation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('programs'), path: '/programs' },
    { name: t('teacher_staff'), path: '/teachers' },
    { name: t('notice'), path: '/news' },
    { name: t('contact'), path: '/contact' }
  ];

  return (
    <header 
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-md' : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Toggle (Left on mobile, hidden on desktop if we want to center nav, but let's keep it right or left) */}
          <div className="lg:hidden"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="relative text-sm font-medium text-gray-700 hover:text-[#115E39] transition-colors group"
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#115E39] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-[#115E39] text-white px-8 py-2.5 rounded text-sm font-semibold hover:bg-[#0A3A23] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Donate
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#115E39] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDFBF7] border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-[#115E39]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-[#115E39] text-white py-3 rounded font-semibold">
                  Donate Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

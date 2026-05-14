import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveDropdown(null); }, [location]);

  const navLinks = [
    { name: t('home'), path: '/' },
    {
      name: t('about'), path: '/about',
      dropdown: [
        { name: t('history'), path: '/history' },
        { name: t('teacher_directory'), path: '/teachers' },
        { name: 'Members', path: '/members' },
        { name: 'Committees', path: '/committees' },
        { name: 'Official Messages', path: '/messages' },
      ]
    },
    { name: t('programs'), path: '/programs' },
    {
      name: t('academic_info'), path: '#',
      dropdown: [
        { name: t('notice'), path: '/news' },
        { name: t('exam_routine'), path: '#' },
        { name: t('admit_card'), path: '#' },
        { name: t('marksheet'), path: '#' },
        { name: 'Publications', path: '/publications' },
      ]
    },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 left-0 w-full z-40 transition-all duration-500 ${
      scrolled
        ? 'glass-nav shadow-lg py-2'
        : 'bg-white/98 border-b border-gray-100 py-3'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between gap-6">

          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#115E39] to-[#0A3A23] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-[#C89B3C] font-arabic text-lg font-bold">ن</span>
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#C89B3C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div>
              <div className="font-serif text-sm font-black text-[#115E39] leading-tight">
                NIBRAS
              </div>
              <div className="text-[9px] font-bold text-[#C89B3C] uppercase tracking-[0.15em] leading-tight">
                International Madrasah
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  onClick={() => { if (link.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#115E39]/5 transition-all text-sm ${
                    isActive(link.path) ? 'active text-[#115E39]' : ''
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[190px] z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-[#115E39]/5 hover:text-[#115E39] transition-colors font-medium"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C89B3C]" />
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/admission" className="btn-outline text-xs py-2 px-4">
              {t('online_admission')}
            </Link>
            <button className="btn-gold text-xs py-2 px-5 flex items-center gap-1.5">
              <Heart size={13} />
              {t('donate')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#115E39]/5 hover:bg-[#115E39]/10 transition-colors text-[#115E39]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => { setIsOpen(false); if (link.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive(link.path)
                        ? 'bg-[#115E39] text-white'
                        : 'text-gray-700 hover:bg-[#115E39]/5 hover:text-[#115E39]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-[#115E39] transition-colors"
                        >
                          — {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <button className="flex-1 btn-primary text-sm py-2.5">
                  {t('online_admission')}
                </button>
                <button className="flex-1 btn-gold text-sm py-2.5 flex items-center justify-center gap-1.5">
                  <Heart size={14} />
                  {t('donate')}
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

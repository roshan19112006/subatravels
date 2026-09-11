import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, MessageSquare, ChevronRight, Car, Key } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function Navbar({ onOpenEnquiry, currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home', path: '/' },
    { label: 'Vehicles', page: 'vehicles', path: '/vehicles' },
    { label: 'Self Drive', page: 'self-drive', path: '/self-drive' },
    { label: 'Pondicherry', page: 'pondicherry', path: '/pondicherry' },
    { label: 'Gallery', page: 'gallery', path: '/gallery' },
    { label: 'About', page: 'about', path: '/about' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(link.page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'glass-nav-scrolled shadow-luxury' 
              : 'glass-nav shadow-glass'
          }`}>
            
            {/* Brand Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, { page: 'home' })}
              className="flex items-center group cursor-pointer focus:outline-none"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-brand-forest leading-none">
                  SUBA<span className="text-brand-green font-normal ml-1">TOURS</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-brand-muted uppercase font-semibold mt-0.5">
                  Pondicherry
                </span>
              </div>
            </a>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center gap-1 bg-brand-forest/5 p-1 rounded-full">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;

                return (
                  <button
                    key={link.page}
                    type="button"
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-forest text-white shadow-sm'
                        : 'text-brand-text hover:text-brand-forest hover:bg-white/80'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-brand-forest bg-brand-lime/30 hover:bg-brand-lime border border-brand-lime/80 transition-all duration-300"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold text-white bg-brand-forest hover:bg-brand-green shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Car className="w-3.5 h-3.5 text-brand-lime" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-brand-forest shadow-xs"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-brand-forest hover:bg-brand-forest/10 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer (Matches natural active state without permanent highlight) */}
      <div 
        className={`fixed inset-0 z-40 bg-brand-forest/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`fixed top-20 sm:top-24 left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-3xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 max-h-[85vh] overflow-y-auto ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-12'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;

              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={(e) => handleNavClick(e, link)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all text-left ${
                    isActive 
                      ? 'bg-brand-forest text-white shadow-sm' 
                      : 'text-brand-text hover:bg-brand-forest/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-lime' : 'text-brand-muted'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-brand-border flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-brand-forest flex items-center justify-center gap-2 shadow-md"
              >
                <Car className="w-4 h-4 text-brand-lime" />
                <span>Book Your Journey</span>
              </button>

              <a
                href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-brand-forest bg-brand-limeLight border border-brand-lime flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-brand-forest" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

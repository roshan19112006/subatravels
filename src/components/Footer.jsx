import React, { useState } from 'react';
import { Compass, Mail, MapPin, ArrowUpRight, ShieldCheck, Key } from 'lucide-react';
import { siteConfig } from '../config/site';
import LegalModal from './LegalModal';

export default function Footer({ onOpenEnquiry, onNavigate }) {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Vehicles', page: 'vehicles' },
    { label: 'Self Drive', page: 'self-drive' },
    { label: 'Pondicherry Tours', page: 'pondicherry' },
    { label: 'Visual Gallery', page: 'gallery' },
    { label: 'About Us', page: 'about' },
  ];

  const vehiclesList = [
    'Tempo Traveller',
    'Toyota Innova Crysta',
    'Toyota Etios',
    'Maruti Swift Dzire',
    'Self Drive Cars'
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) onNavigate(link.page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-brand-forest text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
        
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Brand Information */}
            <div className="lg:col-span-4 space-y-4">
              <a 
                href="/" 
                onClick={(e) => handleLinkClick(e, { page: 'home' })}
                className="flex items-center group cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl tracking-tight text-white leading-none">
                    SUBA<span className="text-brand-lime font-normal ml-1">TOURS</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-brand-border/70 uppercase font-semibold mt-0.5">
                    Pondicherry / Puducherry
                  </span>
                </div>
              </a>

              <p className="text-xs sm:text-sm text-brand-border/80 leading-relaxed max-w-sm pt-2">
                "Travel comfortably. Explore freely." Premium travel agency and car rental service in Pondicherry offering Tempo Traveller, Innova Crysta, Etios, Swift Dzire, and flexible self-drive options with 18+ years of trusted excellence.
              </p>

              <div className="pt-2 text-xs text-brand-lime font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Proprietor: {siteConfig.owner} (18+ Years Experience)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-brand-border/80 hover:text-brand-lime transition-colors inline-flex items-center gap-1.5 text-left"
                    >
                      <span className="text-brand-lime/60 text-[10px]">›</span>
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet & Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Our Fleet & Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {vehiclesList.map((veh) => (
                  <li key={veh}>
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(veh)}
                      className="text-brand-border/80 hover:text-brand-lime transition-colors text-left inline-flex items-center gap-1.5"
                    >
                      <span className="text-brand-lime/60 text-[10px]">›</span>
                      <span>{veh}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Travel Office
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm text-brand-border/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-lime flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-lime transition-colors underline decoration-brand-lime/40">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-brand-forest font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Instant WhatsApp Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-border/70">
            <div>
              © 2026 <strong>Suba Tours</strong>. All rights reserved. Founded by S. Thinagaran.
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
                className="hover:text-brand-lime transition-colors underline decoration-white/20"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
                className="hover:text-brand-lime transition-colors underline decoration-white/20"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Dialog */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ isOpen: false, type: 'privacy' })}
      />
    </>
  );
}

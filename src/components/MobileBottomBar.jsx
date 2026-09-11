import React from 'react';
import { Phone, MessageSquare, Car } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function MobileBottomBar({ onOpenEnquiry }) {
  const handleCall = () => {
    if (siteConfig.isPhoneConfigured) {
      window.location.href = `tel:${siteConfig.phone}`;
    } else {
      // If client phone number is placeholder, open booking/enquiry modal smoothly
      if (onOpenEnquiry) onOpenEnquiry();
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-brand-border/90 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <button
          type="button"
          onClick={handleCall}
          className="flex-1 py-2.5 px-3 rounded-xl bg-brand-bg hover:bg-brand-border/40 text-brand-forest border border-brand-border text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          aria-label="Call Suba Tours"
        >
          <Phone className="w-4 h-4 text-brand-green" />
          <span>Call</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-brand-limeLight hover:bg-brand-lime text-brand-forest border border-brand-lime text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          aria-label="WhatsApp Suba Tours"
        >
          <MessageSquare className="w-4 h-4 text-brand-forest" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <button
          type="button"
          onClick={() => onOpenEnquiry && onOpenEnquiry()}
          className="flex-[1.2] py-2.5 px-3.5 rounded-xl bg-brand-forest hover:bg-brand-green text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          aria-label="Book a Vehicle"
        >
          <Car className="w-4 h-4 text-brand-lime" />
          <span>Book Now</span>
        </button>

      </div>
    </div>
  );
}

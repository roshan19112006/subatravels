import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Floating Interactive Badge / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-luxury border border-brand-border text-xs text-brand-forest font-semibold animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need quick travel pricing? Chat with S. Thinagaran</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-brand-muted hover:text-brand-forest ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-luxury-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp with Suba Tours"
      >
        <MessageSquare className="w-7 h-7 transition-transform group-hover:scale-105" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

    </div>
  );
}

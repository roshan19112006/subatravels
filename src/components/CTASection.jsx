import React from 'react';
import { ArrowRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function CTASection({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl md:rounded-4xl overflow-hidden bg-brand-forest shadow-luxury-lg">
          
          {/* Background Image with Deep Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="Pondicherry Coastline Suba Tours"
              className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/15 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:py-24 text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Ready for Departure</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Journey Starts Here.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-brand-border/90 font-normal leading-relaxed max-w-xl mx-auto">
              Tell us where you want to go. We'll help you choose the right vehicle for your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-brand-lime" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-brand-border/70">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
              <span>18+ Years of Trusted Service • Prompt Support • Transparent Estimates</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

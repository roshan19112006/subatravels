import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';
import BookingCard from './BookingCard';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 md:pb-16 overflow-hidden bg-brand-forest">
      
      {/* Background Cinematic Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-sunset-beach.jpg"
          alt="Explore More Travel Better - Suba Tours Pondicherry"
          className="w-full h-full object-cover object-center opacity-75 scale-105 transform transition-transform duration-10000 hover:scale-100"
        />
        {/* Balanced dark forest green and ambient glow overlay for clear visibility and sharp contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/75 via-brand-forest/45 to-brand-forest/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/60 via-transparent to-brand-forest/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-lime/20 via-transparent to-brand-forest/40" />
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Main Hero Header Content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-hero-badge text-brand-lime text-xs font-bold tracking-wide uppercase shadow-glass">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            <span>{siteConfig.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Explore More. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Travel Better.
            </span>
          </h1>

          {/* Supporting Tagline */}
          <p className="text-sm sm:text-base text-brand-border/90 font-normal leading-relaxed max-w-xl mx-auto">
            {siteConfig.supportingTagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-lime" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Line Ticker */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-brand-border/70 font-medium">
            <MapPin className="w-3 h-3 text-brand-lime" />
            <span>Pondicherry, Tamil Nadu</span>
            <span className="text-brand-lime/60">•</span>
            <span>{siteConfig.trustLine}</span>
          </div>

        </div>

        {/* Floating Booking Card Overlap */}
        <div className="mt-8 sm:mt-10 -mb-10 sm:-mb-14">
          <BookingCard onOpenCustomEnquiry={onOpenEnquiry} />
        </div>

      </div>
    </section>
  );
}

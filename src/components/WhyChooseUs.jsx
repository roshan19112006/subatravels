import React from 'react';
import { CheckCircle, ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function WhyChooseUs({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Executive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-border/80 shadow-luxury-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Leadership & Heritage Highlight Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-forest via-brand-forest to-brand-green p-7 sm:p-9 rounded-3xl text-white shadow-card flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-brand-lime flex items-center justify-center font-display font-extrabold text-2xl border border-white/20 mb-5 shadow-sm">
                  18+
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Years of Local Pondicherry Travel Mastery
                </h3>
                <p className="text-brand-border/90 text-xs sm:text-sm mt-2 leading-relaxed">
                  Under the dedicated leadership and guidance of proprietor <span className="text-brand-lime font-bold">S. Thinagaran</span>.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-brand-border/80">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-brand-lime" />
                  <span>Pondicherry Established</span>
                </div>
                <span className="text-brand-lime font-bold">Trusted Since 2008</span>
              </div>

              {/* Decorative Subtle Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-lime/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Right: Heritage Details & Checkpoints */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                  <span>Our Heritage & Values</span>
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2.5 tracking-tight">
                  Why Travel With Suba Tours?
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed">
                {siteConfig.about.description}
              </p>

              {/* Verified Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {siteConfig.about.highlights.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-bg border border-brand-border/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-limeLight flex items-center justify-center text-brand-green flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-forest">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-muted">
                  <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  <span>Serving Pondicherry & South India</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

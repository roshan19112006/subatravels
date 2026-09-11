import React from 'react';
import { ShieldCheck, Award, CheckCircle, ArrowRight, MessageSquare, Compass, MapPin, User } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';
import TrustFeatures from '../components/TrustFeatures';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. About Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="About Suba Tours Pondicherry"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>18+ Years of Travel Excellence</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Suba Tours
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Founded and managed by S. Thinagaran in Pondicherry, committed to making every trip comfortable, dependable, and memorable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 text-brand-lime" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-border/80 shadow-luxury relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Executive Brand Badge */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-forest via-brand-forest to-brand-green p-7 sm:p-9 rounded-3xl text-white shadow-card flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-brand-lime flex items-center justify-center font-display font-extrabold text-2xl border border-white/20 mb-5 shadow-sm">
                  18+
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Years of Local Pondicherry Travel Mastery
                </h3>
                <p className="text-brand-border/90 text-xs sm:text-sm mt-2 leading-relaxed">
                  Founded and led by proprietor <span className="text-brand-lime font-bold">S. Thinagaran</span>.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-brand-border/80">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-brand-lime" />
                  <span>Pondicherry Service</span>
                </div>
                <span className="text-brand-lime font-bold">Established 2008</span>
              </div>
            </div>

            {/* Right: Story Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/50">
                  Our Story
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2">
                  18+ Years of Trusted Travel
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed">
                {siteConfig.about.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {siteConfig.about.highlights.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-bg border border-brand-border/80 shadow-xs"
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
            </div>

          </div>
        </div>
      </section>

      {/* 3. Reusable Trust & Workflow Components */}
      <TrustFeatures />
      <HowItWorks onOpenEnquiry={onOpenEnquiry} />
      <Testimonials />

    </div>
  );
}

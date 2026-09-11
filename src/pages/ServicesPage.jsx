import React from 'react';
import { Sparkles, MapPin, Car, Users, Briefcase, Plane, KeyRound, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

const serviceIconMap = {
  MapPin: MapPin,
  Car: Car,
  Users: Users,
  Briefcase: Briefcase,
  Plane: Plane,
  KeyRound: KeyRound
};

export default function ServicesPage({ onOpenEnquiry }) {
  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. Services Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
            alt="Travel Services Pondicherry - Suba Tours"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Solutions</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Travel Services
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From local sightseeing and outstation getaways to corporate transportation and airport transfers, Suba Tours offers reliable travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <span>Book a Service</span>
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

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/50">
            Tailored For You
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2">
            Transportation Designed Around You
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Enjoy punctual, comfortable, and dependable service across every category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const Icon = serviceIconMap[service.icon] || Car;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-8 border border-brand-border/80 hover:border-brand-green/30 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-limeLight group-hover:bg-brand-forest text-brand-forest group-hover:text-brand-lime flex items-center justify-center transition-colors duration-300 mb-6 border border-brand-lime/50 group-hover:border-transparent">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-brand-forest mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(null, service.title)}
                    className="text-xs font-bold text-brand-green group-hover:text-brand-forest inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

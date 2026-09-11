import React from 'react';
import { siteConfig } from '../config/site';
import { MapPin, Car, Users, Briefcase, Plane, KeyRound, Sparkles, ArrowRight } from 'lucide-react';

const serviceIconMap = {
  MapPin: MapPin,
  Car: Car,
  Users: Users,
  Briefcase: Briefcase,
  Plane: Plane,
  KeyRound: KeyRound
};

export default function Services({ onOpenEnquiry }) {
  return (
    <section id="services" className="py-20 bg-white border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Comprehensive Travel Solutions</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest mt-3 tracking-tight">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-2">
            Tailored travel solutions from Pondicherry designed around comfort, punctuality, and flexibility.
          </p>
        </div>

        {/* Services 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const Icon = serviceIconMap[service.icon] || Car;
            return (
              <div
                key={service.id}
                className="group bg-brand-bg rounded-3xl p-7 border border-brand-border/80 hover:border-brand-green/30 hover:bg-white shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-brand-forest text-brand-forest group-hover:text-brand-lime flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm border border-brand-border group-hover:border-transparent">
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

      </div>
    </section>
  );
}

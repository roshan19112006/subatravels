import React from 'react';
import { Sparkles, Shield, ArrowRight, MessageSquare, Key } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';
import VehicleCard from '../components/VehicleCard';

export default function VehiclesPage({ onOpenEnquiry, onNavigate }) {
  // Commercial and family vehicles (excluding self-drive since it has a dedicated page)
  const commercialFleet = siteConfig.vehicles.filter((v) => v.id !== 'self-drive');

  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. Vehicles Page Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80"
            alt="Suba Tours Fleet Pondicherry"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pondicherry Car Rental & Fleet</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Commercial & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Chauffeur Fleet
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Choose from well-maintained Tempo Travellers, executive Innova Crysta MPVs, and comfortable sedans driven by professional, experienced drivers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <span>Request Fleet Quote</span>
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

      {/* 2. Vehicles Grid (Tempo Traveller, Innova Crysta, Etios, Swift Dzire) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/50 inline-flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Verified & Maintained Fleet</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2">
              Chauffeur-Driven Vehicles
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              All vehicles are sanitized, air-conditioned, and serviced regularly for maximum safety.
            </p>
          </div>

          <div className="text-xs font-bold text-brand-forest bg-white px-4 py-2 rounded-2xl border border-brand-border shadow-xs">
            18+ Years Trusted Service
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialFleet.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={(vName) => {
                if (onOpenEnquiry) onOpenEnquiry(vName);
              }}
            />
          ))}
        </div>
      </section>

      {/* 3. Link to Self Drive & Consultation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Self Drive Cross-Promotion Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-limeLight flex items-center justify-center text-brand-forest flex-shrink-0">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-forest">
                Looking to Drive Yourself?
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted">
                Explore our flexible self-drive hatchbacks, sedans, and SUVs on our dedicated Self-Drive page.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onNavigate) onNavigate('self-drive');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-brand-lime hover:bg-brand-limeHover text-brand-forest font-display font-bold text-xs whitespace-nowrap transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>View Self Drive Cars</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fleet Advisory Banner */}
        <div className="bg-brand-forest rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-luxury">
          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-lime uppercase tracking-wider">
              Fleet Consultation
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Unsure which vehicle fits your group size?
            </h3>
            <p className="text-xs sm:text-sm text-brand-border/80 max-w-xl">
              Tell us your passenger count, luggage volume, and travel destination. Proprietor S. Thinagaran will recommend the optimal vehicle for comfort and value.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Tempo Traveller')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-lime hover:bg-brand-limeHover text-brand-forest font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-md transform hover:-translate-y-0.5 flex-shrink-0"
          >
            Consult With Us
          </button>
        </div>

      </section>

    </div>
  );
}

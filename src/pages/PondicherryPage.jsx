import React from 'react';
import { Sun, MapPin, ArrowRight, MessageSquare, Compass, Sparkles } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function PondicherryPage({ onOpenEnquiry }) {
  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. Pondicherry Special Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/promenade-beach.png"
            alt="Pondicherry Sightseeing - Suba Tours"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5" />
            <span>Pondicherry Sightseeing & Tours</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Discover the Magic of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Pondicherry
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore colonial French quarters, pristine coastlines, heritage temples, and the universal peace city of Auroville with Suba Tours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry(null, 'Full Day Pondicherry Tour')}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <span>Book Pondicherry Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry', to: 'Pondicherry Sightseeing Tour' })}
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

      {/* 2. Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/50">
            Iconic Spots
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2">
            Top Attractions in Pondicherry
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Comfortable point-to-point and full-day sightseeing packages with experienced local drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.pondicherrySpecial.map((spot) => (
            <div
              key={spot.id}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border/70 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={spot.image}
                  alt={`${spot.title} Pondicherry`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                  <span>Puducherry</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-forest mb-2 group-hover:text-brand-green transition-colors">
                    {spot.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {spot.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(null, spot.title)}
                    className="text-xs font-bold text-brand-green hover:text-brand-forest inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Plan Trip to {spot.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Day Sightseeing Package CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border/80 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-brand-green uppercase tracking-wider bg-brand-limeLight px-3 py-1 rounded-full border border-brand-lime/50">
              Custom Itineraries
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-forest">
              Planning a full-day or weekend trip?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              We provide customizable day itineraries covering Promenade Beach, French Quarter, Auroville, and Paradise Beach with flexible pickup times.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry(null, 'Full Day Pondicherry Sightseeing')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-forest hover:bg-brand-green text-white font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-md transform hover:-translate-y-0.5 flex-shrink-0"
          >
            Get Sightseeing Quote
          </button>
        </div>
      </section>

    </div>
  );
}

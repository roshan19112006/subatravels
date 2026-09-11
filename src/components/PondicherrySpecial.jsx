import React from 'react';
import { siteConfig } from '../config/site';
import { MapPin, Sun, Sparkles, ArrowRight } from 'lucide-react';

export default function PondicherrySpecial({ onOpenEnquiry, onNavigate, isPreview = false }) {
  const displayedSpots = isPreview 
    ? siteConfig.pondicherrySpecial.slice(0, 3) 
    : siteConfig.pondicherrySpecial;

  return (
    <section id="pondicherry" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      
      {/* Subtle Background Accent Decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-brand-green" />
              <span>Local Sightseeing Special</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2.5 tracking-tight">
              Discover Pondicherry
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1.5">
              Explore the beauty of Pondicherry with comfortable transportation and reliable service from Suba Tours.
            </p>
          </div>

          {isPreview ? (
            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('pondicherry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-brand-forest bg-brand-bg hover:bg-brand-limeLight border border-brand-border hover:border-brand-lime shadow-xs transition-all duration-200 self-start md:self-auto"
            >
              <span>View All Tour Spots ({siteConfig.pondicherrySpecial.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry(null, 'Pondicherry City & White Town Tour')}
              className="self-start md:self-auto px-6 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-md transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Explore Pondicherry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Pondicherry Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSpots.map((spot) => (
            <div
              key={spot.id}
              className="group bg-brand-bg rounded-3xl overflow-hidden border border-brand-border/70 hover:border-brand-green/30 hover:bg-white shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
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

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-forest mb-1.5 group-hover:text-brand-green transition-colors">
                    {spot.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {spot.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(null, spot.title)}
                    className="text-xs font-bold text-brand-green hover:text-brand-forest inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Book trip for this spot</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

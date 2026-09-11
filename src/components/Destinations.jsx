import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import DestinationCard from './DestinationCard';
import { Map, ChevronDown, ChevronUp, Compass } from 'lucide-react';

export default function Destinations({ onOpenEnquiry }) {
  const [showAll, setShowAll] = useState(false);

  const displayedDestinations = showAll
    ? siteConfig.destinations
    : siteConfig.destinations.slice(0, 6);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-brand-green" />
            <span>South India Circuits</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest mt-3 tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-2">
            Discover beautiful destinations from Pondicherry with Suba Tours. Seamless point-to-point and round-trip packages.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelectDestination={(destName) => {
                if (onOpenEnquiry) onOpenEnquiry(null, destName);
              }}
            />
          ))}
        </div>

        {/* View All / Collapse Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-bg hover:bg-brand-limeLight border border-brand-border hover:border-brand-lime shadow-sm transition-all duration-300"
          >
            <span>{showAll ? 'Show Fewer Destinations' : `View All Destinations (${siteConfig.destinations.length})`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}

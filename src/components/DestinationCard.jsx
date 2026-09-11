import React from 'react';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { buildWhatsAppEnquiryUrl } from '../config/site';

export default function DestinationCard({ destination, onSelectDestination }) {
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden border border-brand-border/70 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 cursor-pointer"
      onClick={() => onSelectDestination && onSelectDestination(destination.name)}
    >
      {/* Destination Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} Tour from Pondicherry - Suba Tours`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Distance / Route Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-brand-forest shadow-sm backdrop-blur-md flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-green" />
            {destination.distance}
          </span>
        </div>

        {/* Name & Tagline Over Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-display text-2xl font-bold leading-tight group-hover:text-brand-lime transition-colors">
            {destination.name}
          </h3>
          <p className="text-xs text-brand-border/90 font-medium truncate mt-0.5">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Description & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
          {destination.description}
        </p>

        <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-forest group-hover:text-brand-green">
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-brand-green" />
            Plan Trip to {destination.name}
          </span>
          <div className="w-8 h-8 rounded-full bg-brand-bg group-hover:bg-brand-lime flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-4 h-4 text-brand-forest" />
          </div>
        </div>
      </div>

    </div>
  );
}

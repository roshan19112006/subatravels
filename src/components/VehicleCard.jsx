import React from 'react';
import { Users, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppEnquiryUrl } from '../config/site';

export default function VehicleCard({ vehicle, onSelectVehicle }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5">
      
      {/* Vehicle Image & Badge */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-brand-forest/5">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} rental in Pondicherry - Suba Tours`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-forest shadow-sm backdrop-blur-md">
            {vehicle.category}
          </span>
        </div>

        {/* Seating Capacity Pill */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold bg-brand-forest/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <Users className="w-3.5 h-3.5 text-brand-lime" />
          <span>{vehicle.capacity}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Vehicle Name */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-forest mb-2">
            {vehicle.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-brand-muted mb-5 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Feature Bullets */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {vehicle.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-brand-text">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-brand-border flex items-center gap-2.5">
          <button
            onClick={() => onSelectVehicle && onSelectVehicle(vehicle.name)}
            className="flex-1 py-3 px-4 rounded-2xl bg-brand-forest hover:bg-brand-green text-white font-display font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-lime" />
          </button>

          <a
            href={buildWhatsAppEnquiryUrl({ vehicle: vehicle.name, from: 'Pondicherry' })}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-brand-limeLight hover:bg-brand-lime border border-brand-lime text-brand-forest transition-colors duration-200 flex items-center justify-center"
            title={`Enquire ${vehicle.name} on WhatsApp`}
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}

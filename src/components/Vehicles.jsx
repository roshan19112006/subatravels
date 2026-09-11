import React from 'react';
import { siteConfig } from '../config/site';
import VehicleCard from './VehicleCard';
import { Sparkles, Shield, ArrowRight, Key } from 'lucide-react';

export default function Vehicles({ onOpenEnquiry, onNavigate, isPreview = false }) {
  const displayedVehicles = isPreview 
    ? [siteConfig.vehicles[0], siteConfig.vehicles[1], siteConfig.vehicles[4]] 
    : siteConfig.vehicles;

  return (
    <section id="vehicles" className="py-16 sm:py-20 bg-brand-bg border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Well-Maintained Fleet</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2.5 tracking-tight">
              Our Vehicles & Self-Drive
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1.5">
              Choose from spacious Tempo Travellers, premium Innova Crysta MPVs, reliable sedans, and self-drive cars.
            </p>
          </div>

          {isPreview && (
            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('vehicles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-brand-forest bg-white hover:bg-brand-limeLight border border-brand-border hover:border-brand-lime shadow-xs transition-all duration-200"
            >
              <span>Explore Full Fleet ({siteConfig.vehicles.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={(vehicleName) => {
                if (onOpenEnquiry) onOpenEnquiry(vehicleName);
              }}
            />
          ))}
        </div>

        {/* Bottom Fast Action Banner */}
        {isPreview && (
          <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-white border border-brand-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-limeLight flex items-center justify-center text-brand-forest flex-shrink-0">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-brand-forest">
                  Looking for Self-Drive Car Options?
                </h4>
                <p className="text-xs text-brand-muted">
                  Explore available hatchbacks, sedans, and SUVs on our dedicated self-drive page.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('self-drive');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-green text-white font-display font-bold text-xs flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>View Self Drive Cars</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-lime" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

import React from 'react';
import { Award, ShieldCheck, UserCheck, Compass, Key, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  UserCheck: UserCheck,
  Compass: Compass,
  Key: Key
};

export default function TrustFeatures() {
  return (
    <section className="pt-20 sm:pt-28 pb-10 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-green" />
            <span>Why Choose Suba Tours</span>
          </span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-forest mt-2 tracking-tight">
            Crafted for Unmatched Comfort & Reliability
          </h2>
        </div>

        {/* Streamlined & Compact Feature Grid */}
        <div className="bg-white rounded-3xl p-3 sm:p-4 border border-brand-border/80 shadow-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {siteConfig.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || Sparkles;
              return (
                <div
                  key={feature.id}
                  className="group relative bg-brand-bg hover:bg-white rounded-2xl p-4 sm:p-4.5 border border-transparent hover:border-brand-green/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Compact Icon & Step Indicator Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-limeLight group-hover:bg-brand-forest text-brand-forest group-hover:text-brand-lime flex items-center justify-center transition-colors duration-200 border border-brand-lime/50 group-hover:border-transparent shadow-xs">
                        <IconComponent className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-105" />
                      </div>
                      <span className="text-[10px] font-bold text-brand-muted/40 font-display">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Compact Title */}
                    <h3 className="font-display font-bold text-sm text-brand-forest mb-1 group-hover:text-brand-green transition-colors leading-snug">
                      {feature.title}
                    </h3>

                    {/* Compact Description */}
                    <p className="text-[11.5px] sm:text-xs text-brand-muted leading-relaxed font-normal line-clamp-2">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

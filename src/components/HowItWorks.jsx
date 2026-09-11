import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HowItWorks({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-white border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Simple 4-Step Process</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest mt-3 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-2">
            Seamless booking and personalized travel assistance in minutes.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.howItWorks.map((item, idx) => (
            <div
              key={item.step}
              className="group relative bg-brand-bg rounded-3xl p-7 border border-brand-border/80 hover:border-brand-green/30 hover:bg-white shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-3xl text-brand-forest/30 group-hover:text-brand-green transition-colors">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-lime group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="font-display font-bold text-lg text-brand-forest mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/40">
                <span className="text-[11px] font-bold text-brand-forest/60 group-hover:text-brand-green uppercase tracking-wider">
                  Step {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

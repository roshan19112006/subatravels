import React from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';

export default function Testimonials() {
  const placeholderReviews = [
    {
      id: 1,
      route: "Pondicherry Sightseeing Tour",
      quote: "Customer testimonial will be added here once verified feedback is submitted.",
      author: "Verified Traveller",
      location: "Pondicherry / Outstation"
    },
    {
      id: 2,
      route: "Tempo Traveller Family Outstation",
      quote: "Customer testimonial will be added here once verified feedback is submitted.",
      author: "Family Tour Client",
      location: "Chennai to Pondicherry"
    },
    {
      id: 3,
      route: "Innova Crysta Corporate & Airport Trip",
      quote: "Customer testimonial will be added here once verified feedback is submitted.",
      author: "Corporate Guest",
      location: "Pondicherry Airport Transfer"
    }
  ];

  return (
    <section className="py-10 sm:py-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3 py-0.5 rounded-full border border-brand-lime/60 inline-flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-brand-green" />
            <span>Traveller Feedback</span>
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-forest mt-1.5 tracking-tight">
            Client Testimonials
          </h2>
        </div>

        {/* Compact Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {placeholderReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-border/80 shadow-xs flex flex-col justify-between relative group hover:border-brand-green/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-gold" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-brand-lime" />
                </div>

                <p className="text-[11.5px] sm:text-xs text-brand-muted italic leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/50 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-forest">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-brand-muted">
                    {item.route}
                  </p>
                </div>
                <span className="text-[9px] font-bold text-brand-green bg-brand-limeLight px-2 py-0.5 rounded border border-brand-lime/50">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-brand-bg relative z-10 border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-brand-green" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-forest mt-3 tracking-tight">
            Everything You Need to Know About Suba Tours
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2">
            Clear answers about our Pondicherry car rentals, Tempo Travellers, outstation trips, and self-drive bookings.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-green/30 shadow-card'
                    : 'bg-white/80 hover:bg-white border-brand-border/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-brand-forest">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-lime text-brand-forest rotate-180' : 'bg-brand-bg text-brand-muted'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/40 pt-3 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

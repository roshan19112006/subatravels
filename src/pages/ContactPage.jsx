import React from 'react';
import { Mail, MapPin, Phone, User, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

export default function ContactPage({ onOpenEnquiry }) {
  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. Contact Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Suba Tours Pondicherry"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Pondicherry Travel Office</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Contact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Suba Tours
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Reach out directly for instant quotes, outstation itineraries, self-drive availability, and customized tour packages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>

            <a
              href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
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

      {/* 2. Full Contact Section */}
      <ContactSection onOpenEnquiry={onOpenEnquiry} />

      {/* 3. FAQ Section */}
      <FAQSection />

    </div>
  );
}

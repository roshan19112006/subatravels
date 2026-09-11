import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Camera, 
  MapPin, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Car, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl } from '../config/site';

export default function GalleryPage({ onOpenEnquiry, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'fleet', label: 'Chauffeur Fleet' },
    { id: 'self-drive', label: 'Self-Drive Cars' },
    { id: 'attractions', label: 'Pondicherry Sights' },
    { id: 'tours', label: 'Outstation Circuits' }
  ];

  const galleryItems = siteConfig.gallery || [];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* 1. Hero Header */}
      <section className="relative py-12 sm:py-16 bg-brand-forest text-white overflow-hidden mb-12 sm:mb-16">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-hero-badge text-brand-lime text-xs font-bold tracking-wide uppercase shadow-glass">
            <Camera className="w-3.5 h-3.5 text-brand-lime" />
            <span>Suba Tours Visual Gallery</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Fleet & Tour Moments
          </h1>

          <p className="text-sm sm:text-base text-brand-border/90 max-w-2xl mx-auto leading-relaxed">
            Take a closer look at our well-maintained vehicles, chauffeur tour coaches, self-drive rentals, and iconic destinations across Pondicherry and South India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-brand-lime font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-lime" />
              <span>100% Real Fleet Photos</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-brand-lime" />
              <span>Clean & Sanitized Vehicles</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-lime" />
              <span>Pondicherry Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gallery Filter & Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const count = cat.id === 'all' 
              ? galleryItems.length 
              : galleryItems.filter(i => i.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-forest text-white shadow-luxury ring-2 ring-brand-forest/20'
                    : 'bg-white text-brand-text hover:bg-brand-forest/5 border border-brand-border/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  isActive 
                    ? 'bg-brand-lime text-brand-forest' 
                    : 'bg-brand-bg text-brand-muted'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-forest/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-brand-forest/80 backdrop-blur-md text-brand-lime border border-white/10 shadow-sm">
                    {item.tag || item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Location */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-border/90 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenEnquiry) {
                        onOpenEnquiry(item.vehicleName || 'Toyota Innova Crysta', item.destinationName || item.location);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-forest bg-brand-limeLight hover:bg-brand-lime border border-brand-lime/60 transition-all flex items-center gap-1.5"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 text-brand-forest" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-border p-8">
            <Camera className="w-12 h-12 text-brand-muted mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-brand-forest">No photos in this category</h3>
            <p className="text-xs text-brand-muted mt-1">Please select "All Photos" to view the complete fleet.</p>
          </div>
        )}
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="bg-gradient-to-br from-brand-forest via-brand-forest to-brand-green rounded-3xl p-8 sm:p-12 text-white shadow-luxury relative overflow-hidden text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-brand-lime flex items-center justify-center mx-auto border border-white/20">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
            Ready to Experience Comfortable Travel?
          </h2>

          <p className="text-xs sm:text-sm text-brand-border/90 max-w-xl mx-auto leading-relaxed">
            Whether you need an executive Innova Crysta, a spacious Tempo Traveller for your family tour, or a self-drive car for flexible local trips, Suba Tours delivers dependable service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Toyota Innova Crysta')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Book Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-brand-lime" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Interactive Fullscreen Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-fadeIn select-none"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar */}
          <div 
            className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-lime text-brand-forest text-xs font-extrabold">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  {activeItem.title}
                </h4>
                <p className="text-[11px] text-brand-border/80">
                  {activeItem.location}
                </p>
              </div>
            </div>

            <button
              onClick={handleCloseLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image with Previous / Next Arrows */}
          <div 
            className="relative flex-grow flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-xl"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-brand-forest/20">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full max-h-[72vh] object-contain"
              />
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-xl"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar with Details & WhatsApp CTA */}
          <div 
            className="p-4 sm:p-6 bg-brand-forest/90 border-t border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center sm:text-left max-w-xl">
              <p className="text-xs sm:text-sm text-brand-border/90">
                {activeItem.description}
              </p>
              {activeItem.tag && (
                <span className="inline-block mt-1 text-[11px] font-bold text-brand-lime">
                  Registration / Tag: {activeItem.tag}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={buildWhatsAppEnquiryUrl({
                  from: 'Pondicherry',
                  vehicle: activeItem.vehicleName || 'Toyota Innova Crysta',
                  to: activeItem.destinationName || activeItem.location
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-brand-forest bg-brand-lime hover:bg-brand-limeHover transition-all flex items-center justify-center gap-2 shadow-luxury"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire This on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  handleCloseLightbox();
                  if (onOpenEnquiry) {
                    onOpenEnquiry(activeItem.vehicleName || 'Toyota Innova Crysta', activeItem.destinationName || activeItem.location);
                  }
                }}
                className="hidden sm:flex px-5 py-2.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all items-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-brand-lime" />
                <span>Quick Booking</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

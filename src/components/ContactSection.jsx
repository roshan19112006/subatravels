import React, { useState } from 'react';
import { Mail, MapPin, User, Award, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppEnquiryUrl, buildEmailEnquiryUrl } from '../config/site';

export default function ContactSection({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: 'Pondicherry',
    destination: '',
    travelDate: '',
    returnDate: '',
    passengers: '2',
    vehicle: 'Toyota Innova Crysta',
    tripType: 'Round Trip',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppEnquiryUrl({
      from: formData.pickup,
      to: formData.destination,
      travelDate: formData.travelDate,
      returnDate: formData.returnDate,
      vehicle: formData.vehicle,
      passengers: formData.passengers,
      tripType: formData.tripType,
      name: formData.name,
      phone: formData.phone,
      notes: formData.notes
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/60 inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand-green" />
            <span>Connect With Us</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest mt-3 tracking-tight">
            Contact Suba Tours
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-2">
            Reach out for immediate quotes, outstation itineraries, and custom tour packages.
          </p>
        </div>

        {/* Contact Info & Interactive Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Verified Business Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-brand-forest text-white rounded-3xl p-8 shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-lime/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-display text-2xl font-bold mb-6">
                Travel Office & Contact
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-border/70 uppercase font-semibold">Location</span>
                    <p className="font-bold text-white text-base">{siteConfig.location}</p>
                    <p className="text-xs text-brand-border/80">Serving all local & outstation routes</p>
                  </div>
                </div>

                {/* Founder / Owner */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-border/70 uppercase font-semibold">Proprietor / Contact Person</span>
                    <p className="font-bold text-white text-base">{siteConfig.owner}</p>
                    <p className="text-xs text-brand-lime font-medium">18+ Years Industry Experience</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-border/70 uppercase font-semibold">Email Address</span>
                    <p className="font-bold text-white">
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-lime transition-colors underline decoration-brand-lime/50 underline-offset-4">
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone Note */}
                <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-lime flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-border/70 uppercase font-semibold">Direct Phone Support</span>
                    <p className="text-sm font-medium text-brand-border/90">
                      {siteConfig.isPhoneConfigured ? siteConfig.phone : 'Available via WhatsApp & Email Enquiry'}
                    </p>
                    <p className="text-[11px] text-brand-border/60">
                      Quick responses for availability and tariff calculation
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Quick Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppEnquiryUrl({ from: 'Pondicherry' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-brand-forest font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-white/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>

            </div>

            {/* Trust Assurance Card */}
            <div className="p-6 rounded-3xl bg-brand-bg border border-brand-border/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-green shadow-sm flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-brand-forest">
                  100% Genuine Booking Support
                </h4>
                <p className="text-xs text-brand-muted mt-0.5">
                  Direct communication with proprietor S. Thinagaran for transparent quotes.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-bg rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-border/80 shadow-card">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                  Detailed Travel Request
                </span>
                <h3 className="font-display text-2xl font-bold text-brand-forest mt-1">
                  Send Your Travel Enquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-forest">Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pickup Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Pickup Location *</label>
                    <input
                      type="text"
                      name="pickup"
                      required
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="e.g. Pondicherry / Hotel"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Destination *</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Chennai, Mahabalipuram, Kumbakonam"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Travel Date */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Travel Date *</label>
                    <input
                      type="date"
                      name="travelDate"
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all cursor-pointer"
                    />
                  </div>

                  {/* Return Date */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Return Date</label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all cursor-pointer"
                    />
                  </div>

                  {/* Passengers */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Passengers *</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5-7">5 - 7 Persons (Innova)</option>
                      <option value="8-12">8 - 12 Persons (Tempo)</option>
                      <option value="13-20">13 - 20 Persons (Tempo)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vehicle Preference */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Vehicle Preference *</label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Tempo Traveller">Tempo Traveller (12-20 Seats)</option>
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta (7-8 Seats)</option>
                      <option value="Toyota Etios">Toyota Etios (4 Seats)</option>
                      <option value="Maruti Swift Dzire">Maruti Swift Dzire (4 Seats)</option>
                      <option value="Self Drive Cars">Self Drive Cars</option>
                    </select>
                  </div>

                  {/* Trip Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-forest">Trip Type *</label>
                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Round Trip">Round Trip</option>
                      <option value="One Way">One Way Drop</option>
                      <option value="Multi Day Tour">Multi Day Tour</option>
                      <option value="Local Sightseeing">Local Sightseeing</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-forest">Additional Requirements / Notes</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about special requests, luggage, pickup time, or itinerary details..."
                    className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl text-sm text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-display font-bold text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-4 rounded-2xl bg-brand-forest text-white text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
                    <span>Thank you! Your enquiry has been prepared for dispatch to Suba Tours.</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { MapPin, Calendar, Users, Car, ArrowRight, MessageSquare, CheckCircle2, Key, ShieldCheck } from 'lucide-react';
import { buildWhatsAppEnquiryUrl, buildSelfDriveWhatsAppUrl } from '../config/site';

export default function BookingCard({ onOpenCustomEnquiry }) {
  const [bookingMode, setBookingMode] = useState('chauffeur'); // 'chauffeur' | 'selfdrive'
  
  // Chauffeur booking state
  const [chauffeurData, setChauffeurData] = useState({
    from: 'Pondicherry',
    to: '',
    travelDate: new Date().toISOString().split('T')[0],
    vehicle: 'Toyota Innova Crysta',
    passengers: '4'
  });

  // Self-drive booking state
  const [selfDriveData, setSelfDriveData] = useState({
    pickup: 'Pondicherry',
    pickupDate: new Date().toISOString().split('T')[0],
    returnDate: '',
    vehicle: 'Self Drive Hatchback (Swift / i20)',
    drivers: '1'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const chauffeurVehicles = [
    { label: 'Toyota Innova Crysta (7-8 Seater)', value: 'Toyota Innova Crysta' },
    { label: 'Tempo Traveller (12-20 Seater)', value: 'Tempo Traveller' },
    { label: 'Toyota Etios (4 Seater Sedan)', value: 'Toyota Etios' },
    { label: 'Maruti Swift Dzire (4 Seater)', value: 'Maruti Swift Dzire' }
  ];

  const selfDriveVehicles = [
    { label: 'Hatchback (Swift / i20)', value: 'Self Drive Hatchback (Swift / i20)' },
    { label: 'Compact Sedan (Dzire / Etios)', value: 'Self Drive Sedan (Dzire / Etios)' },
    { label: 'Compact SUV (Brezza / Creta)', value: 'Self Drive SUV (Brezza / Creta)' }
  ];

  const handleChauffeurChange = (e) => {
    const { name, value } = e.target;
    setChauffeurData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelfDriveChange = (e) => {
    const { name, value } = e.target;
    setSelfDriveData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let waUrl = '';

    if (bookingMode === 'selfdrive') {
      waUrl = buildSelfDriveWhatsAppUrl({
        pickup: selfDriveData.pickup,
        pickupDate: selfDriveData.pickupDate,
        returnDate: selfDriveData.returnDate,
        vehicle: selfDriveData.vehicle,
        drivers: selfDriveData.drivers
      });
    } else {
      waUrl = buildWhatsAppEnquiryUrl({
        from: chauffeurData.from,
        to: chauffeurData.to || "Pondicherry Sightseeing",
        travelDate: chauffeurData.travelDate,
        vehicle: chauffeurData.vehicle,
        passengers: chauffeurData.passengers,
        tripType: 'Tour Booking'
      });
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-luxury-lg border border-white/90 relative z-20 transition-all">
      
      {/* Top Header: Compact Title & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-brand-border/70">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
          <h3 className="font-display text-base sm:text-lg font-bold text-brand-forest">
            Quick Booking & Instant Quote
          </h3>
        </div>

        {/* Master Booking Mode Selector */}
        <div className="inline-flex p-1 bg-brand-bg rounded-xl border border-brand-border shadow-xs self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setBookingMode('chauffeur')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all duration-150 ${
              bookingMode === 'chauffeur'
                ? 'bg-brand-forest text-white shadow-xs'
                : 'text-brand-muted hover:text-brand-forest'
            }`}
          >
            <Car className="w-3.5 h-3.5 text-brand-lime" />
            <span>Chauffeur & Tours</span>
          </button>

          <button
            type="button"
            onClick={() => setBookingMode('selfdrive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all duration-150 ${
              bookingMode === 'selfdrive'
                ? 'bg-brand-forest text-white shadow-xs'
                : 'text-brand-muted hover:text-brand-forest'
            }`}
          >
            <Key className="w-3.5 h-3.5 text-brand-lime" />
            <span>Self Drive Rental</span>
          </button>
        </div>
      </div>

      {/* Booking Form Content */}
      <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
        
        {/* MODE 1: Chauffeur-Driven Tour Form */}
        {bookingMode === 'chauffeur' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            
            {/* Pickup Location */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-green" />
                <span>Pickup *</span>
              </label>
              <input
                type="text"
                name="from"
                value={chauffeurData.from}
                onChange={handleChauffeurChange}
                required
                placeholder="Pondicherry / Hotel"
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green transition-all"
              />
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-forest" />
                <span>Destination *</span>
              </label>
              <input
                type="text"
                name="to"
                value={chauffeurData.to}
                onChange={handleChauffeurChange}
                required
                placeholder="e.g. Local Sightseeing, Chennai"
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green transition-all"
              />
            </div>

            {/* Vehicle Type */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Car className="w-3 h-3 text-brand-green" />
                <span>Vehicle *</span>
              </label>
              <select
                name="vehicle"
                value={chauffeurData.vehicle}
                onChange={handleChauffeurChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                {chauffeurVehicles.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Date */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-green" />
                <span>Travel Date *</span>
              </label>
              <input
                type="date"
                name="travelDate"
                value={chauffeurData.travelDate}
                onChange={handleChauffeurChange}
                required
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              />
            </div>

            {/* Passengers */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-green" />
                <span>Passengers *</span>
              </label>
              <select
                name="passengers"
                value={chauffeurData.passengers}
                onChange={handleChauffeurChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                <option value="1-2">1 - 2 Persons</option>
                <option value="3-4">3 - 4 Persons</option>
                <option value="5-7">5 - 7 (Innova Crysta)</option>
                <option value="8-12">8 - 12 (Tempo Traveller)</option>
                <option value="13-20">13 - 20 (Large Tempo)</option>
              </select>
            </div>

          </div>
        ) : (
          /* MODE 2: Self-Drive Car Form */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            
            {/* Self-Drive Pickup Location */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-green" />
                <span>Pickup in Pondy *</span>
              </label>
              <input
                type="text"
                name="pickup"
                value={selfDriveData.pickup}
                onChange={handleSelfDriveChange}
                required
                placeholder="White Town / Hotel"
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green transition-all"
              />
            </div>

            {/* Self-Drive Vehicle Option */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Key className="w-3 h-3 text-brand-green" />
                <span>Vehicle Model *</span>
              </label>
              <select
                name="vehicle"
                value={selfDriveData.vehicle}
                onChange={handleSelfDriveChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                {selfDriveVehicles.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Pickup Date */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-green" />
                <span>Pickup Date *</span>
              </label>
              <input
                type="date"
                name="pickupDate"
                value={selfDriveData.pickupDate}
                onChange={handleSelfDriveChange}
                required
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              />
            </div>

            {/* Return Date */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-green" />
                <span>Return Date *</span>
              </label>
              <input
                type="date"
                name="returnDate"
                value={selfDriveData.returnDate}
                onChange={handleSelfDriveChange}
                required
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              />
            </div>

            {/* Drivers */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-green" />
                <span>Drivers (Valid DL) *</span>
              </label>
              <select
                name="drivers"
                value={selfDriveData.drivers}
                onChange={handleSelfDriveChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text font-medium focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                <option value="1">1 Driver</option>
                <option value="2">2 Drivers</option>
                <option value="3+">3+ Drivers</option>
              </select>
            </div>

          </div>
        )}

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-[11px] text-brand-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
            <span>
              {bookingMode === 'selfdrive' 
                ? 'Valid DL required • Sanitized vehicles' 
                : '18+ Years trusted service • Verified drivers'}
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-display font-bold text-xs text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-150 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>
              {bookingMode === 'selfdrive' ? 'Check Self Drive on WhatsApp' : 'Get Instant WhatsApp Quote'}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feedback Alert */}
        {isSubmitted && (
          <div className="p-2.5 rounded-xl bg-brand-forest text-white text-xs flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
              Opening WhatsApp with your trip details...
            </span>
          </div>
        )}

      </form>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, MapPin, Car, MessageSquare, CheckCircle2, Key, Sparkles } from 'lucide-react';
import { buildWhatsAppEnquiryUrl, buildSelfDriveWhatsAppUrl } from '../config/site';

export default function EnquiryModal({ isOpen, onClose, initialVehicle, initialDestination }) {
  const [modalMode, setModalMode] = useState('chauffeur'); // 'chauffeur' | 'selfdrive'
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: 'Pondicherry',
    to: '',
    travelDate: new Date().toISOString().split('T')[0],
    returnDate: '',
    passengers: '4',
    vehicle: 'Toyota Innova Crysta',
    drivers: '1',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialVehicle) {
      if (initialVehicle.toLowerCase().includes('self') || initialVehicle.toLowerCase().includes('drive')) {
        setModalMode('selfdrive');
      } else {
        setModalMode('chauffeur');
      }
      setFormData(prev => ({ ...prev, vehicle: initialVehicle }));
    }
    if (initialDestination) {
      setFormData(prev => ({ ...prev, to: initialDestination }));
    }
  }, [initialVehicle, initialDestination, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    let waUrl = '';

    if (modalMode === 'selfdrive') {
      waUrl = buildSelfDriveWhatsAppUrl({
        name: formData.name,
        phone: formData.phone,
        pickup: formData.from,
        pickupDate: formData.travelDate,
        returnDate: formData.returnDate,
        vehicle: formData.vehicle,
        drivers: formData.drivers,
        notes: formData.notes
      });
    } else {
      waUrl = buildWhatsAppEnquiryUrl({
        name: formData.name,
        phone: formData.phone,
        from: formData.from,
        to: formData.to,
        travelDate: formData.travelDate,
        returnDate: formData.returnDate,
        vehicle: formData.vehicle,
        passengers: formData.passengers,
        tripType: 'Direct Enquiry',
        notes: formData.notes
      });
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const chauffeurVehiclesList = [
    'Toyota Innova Crysta',
    'Tempo Traveller',
    'Toyota Etios',
    'Maruti Swift Dzire'
  ];

  const selfDriveVehiclesList = [
    'Self Drive Hatchback (Swift / i20)',
    'Self Drive Sedan (Dzire / Etios)',
    'Self Drive SUV (Brezza / Creta)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-brand-forest/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-brand-border/80 my-4 max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 rounded-full text-brand-muted hover:text-brand-forest hover:bg-brand-bg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Mode Switcher */}
        <div className="mb-4 pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-limeLight border border-brand-lime/60 text-brand-green text-[10px] font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Suba Tours Quick Booking</span>
          </div>
          
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-forest">
            Plan Your Journey
          </h3>

          {/* Mode Tabs */}
          <div className="grid grid-cols-2 gap-1.5 mt-3 p-1 bg-brand-bg rounded-xl border border-brand-border">
            <button
              type="button"
              onClick={() => {
                setModalMode('chauffeur');
                if (!chauffeurVehiclesList.includes(formData.vehicle)) {
                  setFormData(prev => ({ ...prev, vehicle: 'Toyota Innova Crysta' }));
                }
              }}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                modalMode === 'chauffeur'
                  ? 'bg-brand-forest text-white shadow-xs'
                  : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-brand-lime" />
              <span>Chauffeur & Tours</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setModalMode('selfdrive');
                if (!selfDriveVehiclesList.includes(formData.vehicle)) {
                  setFormData(prev => ({ ...prev, vehicle: 'Self Drive Hatchback (Swift / i20)' }));
                }
              }}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                modalMode === 'selfdrive'
                  ? 'bg-brand-forest text-white shadow-xs'
                  : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <Key className="w-3.5 h-3.5 text-brand-lime" />
              <span>Self Drive Rental</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
          
          {/* User Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest">WhatsApp Number *</label>
              <input
                type="tel"
                inputMode="tel"
                name="phone"
                required
                placeholder="+91 Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-green" />
                <span>Pickup Point *</span>
              </label>
              <input
                type="text"
                name="from"
                required
                value={formData.from}
                onChange={handleChange}
                placeholder="Pondicherry / Hotel"
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-forest" />
                <span>{modalMode === 'selfdrive' ? 'Rental Usage Area' : 'Destination *'}</span>
              </label>
              <input
                type="text"
                name="to"
                required={modalMode !== 'selfdrive'}
                value={formData.to}
                onChange={handleChange}
                placeholder={modalMode === 'selfdrive' ? 'Local / Outstation' : 'e.g. Local Sightseeing, Chennai'}
                className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>

          {/* Vehicle Select */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
              {modalMode === 'selfdrive' ? <Key className="w-3 h-3 text-brand-green" /> : <Car className="w-3 h-3 text-brand-green" />}
              <span>Select Vehicle *</span>
            </label>
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green cursor-pointer"
            >
              {(modalMode === 'selfdrive' ? selfDriveVehiclesList : chauffeurVehiclesList).map((vehName) => (
                <option key={vehName} value={vehName}>
                  {vehName}
                </option>
              ))}
            </select>
          </div>

          {/* Dates & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-green" />
                <span>Travel Date *</span>
              </label>
              <input
                type="date"
                name="travelDate"
                required
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-muted" />
                <span>Return Date</span>
              </label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-green" />
                <span>{modalMode === 'selfdrive' ? 'Drivers' : 'Passengers'}</span>
              </label>
              <select
                name={modalMode === 'selfdrive' ? 'drivers' : 'passengers'}
                value={modalMode === 'selfdrive' ? formData.drivers : formData.passengers}
                onChange={handleChange}
                className="w-full px-2.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                {modalMode === 'selfdrive' ? (
                  <>
                    <option value="1">1 Driver</option>
                    <option value="2">2 Drivers</option>
                    <option value="3+">3+ Drivers</option>
                  </>
                ) : (
                  <>
                    <option value="1-2">1 - 2 Persons</option>
                    <option value="3-4">3 - 4 Persons</option>
                    <option value="5-7">5 - 7 Persons (Innova)</option>
                    <option value="8-12">8 - 12 Persons (Tempo)</option>
                    <option value="13-20">13 - 20 Persons (Tempo)</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-150 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>
                {modalMode === 'selfdrive' ? 'Check Self-Drive on WhatsApp' : 'Get WhatsApp Quote & Availability'}
              </span>
            </button>
          </div>

          {submitted && (
            <div className="p-2.5 rounded-xl bg-brand-forest text-white text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>Redirecting to WhatsApp with your travel itinerary...</span>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Key, 
  Car, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Fuel, 
  Settings2,
  Sparkles,
  Phone
} from 'lucide-react';
import { siteConfig, buildSelfDriveWhatsAppUrl } from '../config/site';

export default function SelfDrivePage({ onOpenGeneralEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: 'Pondicherry City / Hotel',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '10:00 AM',
    returnDate: '',
    returnTime: '10:00 AM',
    vehicle: 'Self Drive Hatchback (Swift / i20)',
    drivers: '1',
    drivingReqs: 'Valid Indian / International Driving License',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const pickupHubs = [
    'White Town / French Quarter',
    'Pondicherry Railway Station',
    'Main Bus Stand',
    'Auroville Main Gate',
    'Hotel Doorstep Delivery'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectCar = (carName) => {
    setFormData(prev => ({ ...prev, vehicle: carName }));
    const formEl = document.getElementById('self-drive-booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildSelfDriveWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      pickup: formData.pickup,
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      returnDate: formData.returnDate,
      returnTime: formData.returnTime,
      vehicle: formData.vehicle,
      drivers: formData.drivers,
      drivingReqs: formData.drivingReqs,
      notes: formData.notes
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      
      {/* 1. Self Drive Cinematic Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-forest text-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl md:rounded-4xl shadow-luxury-lg mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80"
            alt="Self Drive Car in Pondicherry - Suba Tours"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-green/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hero-badge text-brand-lime text-xs font-bold uppercase tracking-wider">
            <Key className="w-3.5 h-3.5" />
            <span>Pondicherry Self Drive Car Rental</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Drive Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-lime">
              Your Way
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-border/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Enjoy the freedom to explore Pondicherry and nearby destinations with our self-drive car options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#self-drive-booking-form"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <Car className="w-4 h-4" />
              <span>Book a Self Drive Car</span>
            </a>

            <a
              href={buildSelfDriveWhatsAppUrl({ vehicle: 'Self Drive Car' })}
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

      {/* 2. Visual 3-Step Process UX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3 py-1 rounded-full border border-brand-lime/50">
            Simple 3-Step Booking
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-forest mt-2">
            How Self-Drive Rental Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Choose Your Car",
              desc: "Select the hatchback, sedan, or compact SUV suitable for your trip."
            },
            {
              step: "02",
              title: "Select Date & Time",
              desc: "Pick your preferred pickup and return schedule in Pondicherry."
            },
            {
              step: "03",
              title: "Send Booking Request",
              desc: "Receive instant vehicle confirmation and pricing on WhatsApp."
            }
          ].map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-6 border border-brand-border/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-3xl text-brand-green/30">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-forest mt-2 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-border/40 text-[11px] font-bold text-brand-forest/60">
                Step {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Self-Drive Vehicles Fleet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-limeLight px-3.5 py-1 rounded-full border border-brand-lime/50 inline-flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5" />
              <span>Confirmed Fleet</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-forest mt-2">
              Available Self-Drive Vehicles
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Sanitized, insured, and well-maintained self-drive options in Pondicherry.
            </p>
          </div>

          <div className="text-xs font-bold text-brand-forest bg-white px-4 py-2 rounded-2xl border border-brand-border shadow-xs">
            ✓ Valid DL & ID Required
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.selfDriveFleet.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 overflow-hidden bg-brand-forest/5">
                <img
                  src={car.image}
                  alt={`${car.name} self drive in Pondicherry - Suba Tours`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-forest shadow-xs backdrop-blur-md">
                    {car.type}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-forest/90 text-brand-lime border border-white/20">
                    Self Drive Available
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-forest mb-1.5">
                    {car.name}
                  </h3>

                  <p className="text-xs text-brand-muted mb-4 leading-relaxed">
                    {car.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-brand-text mb-4 bg-brand-bg p-3 rounded-2xl border border-brand-border/60">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-green" />
                      <span>{car.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Settings2 className="w-3.5 h-3.5 text-brand-green" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-brand-green" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-muted">
                      <span>{car.status}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {car.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-brand-forest font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectCar(car.name)}
                    className="flex-1 py-3 px-4 rounded-xl bg-brand-forest hover:bg-brand-green text-white font-display font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Book {car.type}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-lime" />
                  </button>

                  <a
                    href={buildSelfDriveWhatsAppUrl({ vehicle: car.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-brand-limeLight hover:bg-brand-lime text-brand-forest border border-brand-lime transition-colors flex items-center justify-center"
                    title={`Check ${car.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dedicated Self-Drive Booking Form */}
      <section id="self-drive-booking-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-brand-border/80 shadow-luxury-lg relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider bg-brand-limeLight px-3 py-1 rounded-full border border-brand-lime/50">
              Direct Self-Drive Booking
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-forest mt-1.5">
              Book a Self-Drive Car in Pondicherry
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Visual Vehicle Selector Radio Chips */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-brand-green" />
                <span>Vehicle Preference *</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {siteConfig.selfDriveFleet.map((car) => {
                  const isSelected = formData.vehicle === car.name;
                  return (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, vehicle: car.name }))}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-brand-forest text-white border-brand-forest shadow-xs'
                          : 'bg-brand-bg text-brand-text border-brand-border hover:border-brand-green/40'
                      }`}
                    >
                      <div>
                        <span className="font-display font-bold text-xs block">{car.type}</span>
                        <p className={`text-[11px] truncate ${isSelected ? 'text-brand-border' : 'text-brand-muted'}`}>
                          {car.name}
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isSelected ? 'bg-brand-lime text-brand-forest' : 'bg-brand-border/40 text-brand-muted'}`}>
                        {car.capacity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-forest">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-forest">WhatsApp Number *</label>
                <input
                  type="tel"
                  inputMode="tel"
                  name="phone"
                  required
                  placeholder="+91 Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Pickup Location with Landmark Quick-Pills */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-green" />
                <span>Pickup Location in Pondicherry *</span>
              </label>
              <input
                type="text"
                name="pickup"
                required
                placeholder="e.g. White Town / Hotel / Bus Stand"
                value={formData.pickup}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="text-[10px] font-bold text-brand-muted">Landmarks:</span>
                {pickupHubs.map((hub) => (
                  <button
                    key={hub}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, pickup: hub }))}
                    className="text-[10px] font-medium bg-brand-bg hover:bg-brand-limeLight hover:text-brand-forest px-2 py-0.5 rounded-md border border-brand-border transition-colors text-brand-muted"
                  >
                    + {hub}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-forest">Pickup Date *</label>
                <input
                  type="date"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-forest">Return Date *</label>
                <input
                  type="date"
                  name="returnDate"
                  required
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-forest">Drivers (Valid DL) *</label>
                <select
                  name="drivers"
                  value={formData.drivers}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs text-brand-text cursor-pointer"
                >
                  <option value="1 Driver">1 Driver</option>
                  <option value="2 Drivers">2 Drivers</option>
                  <option value="3+ Drivers">3+ Drivers</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-display font-bold text-xs sm:text-sm text-brand-forest bg-brand-lime hover:bg-brand-limeHover shadow-luxury transition-all duration-150 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Key className="w-4 h-4" />
                <span>Check Availability & Book on WhatsApp</span>
              </button>
            </div>

            {submitted && (
              <div className="p-3 rounded-xl bg-brand-forest text-white text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <span>Your self-drive request is ready! Opening WhatsApp for Suba Tours.</span>
              </div>
            )}

          </form>

        </div>
      </section>

    </div>
  );
}

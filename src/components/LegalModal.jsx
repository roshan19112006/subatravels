import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function LegalModal({ type, isOpen, onClose }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-brand-forest/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-border my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-muted hover:text-brand-forest hover:bg-brand-bg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-brand-green" />
          <h3 className="font-display text-2xl font-bold text-brand-forest">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-brand-muted max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                At <strong>Suba Tours</strong>, we respect your privacy. This policy explains how we collect and use your travel enquiry details.
              </p>
              <h4 className="font-bold text-brand-forest text-sm">1. Information We Collect</h4>
              <p>
                We only collect information voluntarily provided by you during travel enquiries, including your name, contact phone/WhatsApp number, pickup location, travel dates, and vehicle preferences.
              </p>
              <h4 className="font-bold text-brand-forest text-sm">2. Use of Information</h4>
              <p>
                Your contact details are used strictly to provide tariff quotes, confirm vehicle availability, and coordinate tour logistics. We do not sell, rent, or distribute your personal details to any third-party marketing services.
              </p>
              <h4 className="font-bold text-brand-forest text-sm">3. Contact Us</h4>
              <p>
                If you have questions regarding your data, please contact proprietor S. Thinagaran at <a href={`mailto:${siteConfig.email}`} className="text-brand-green underline">{siteConfig.email}</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Suba Tours</strong>. By booking a vehicle or tour service with us, you agree to the following general conditions:
              </p>
              <h4 className="font-bold text-brand-forest text-sm">1. Booking & Quotes</h4>
              <p>
                All tariffs, driver charges, toll fees, and state permit taxes (if applicable for outstation trips) will be communicated transparently before journey confirmation.
              </p>
              <h4 className="font-bold text-brand-forest text-sm">2. Vehicle Use & Safety</h4>
              <p>
                Passengers are requested to observe safety guidelines, adhere to seating capacities for each vehicle type (Tempo Traveller, Innova Crysta, Sedan, Self-Drive), and maintain vehicle cleanliness.
              </p>
              <h4 className="font-bold text-brand-forest text-sm">3. Cancellations & Modifications</h4>
              <p>
                Trip schedule changes or cancellations should be communicated to Suba Tours with reasonable advance notice to allow driver/vehicle rescheduling.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-brand-border text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-brand-forest text-white font-bold text-xs hover:bg-brand-green transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

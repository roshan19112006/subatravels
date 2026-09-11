import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustFeatures from './components/TrustFeatures';
import PondicherrySpecial from './components/PondicherrySpecial';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquiryModal from './components/EnquiryModal';

// Dedicated Standalone Pages
import VehiclesPage from './pages/VehiclesPage';
import SelfDrivePage from './pages/SelfDrivePage';
import PondicherryPage from './pages/PondicherryPage';
import AboutPage from './pages/AboutPage';

import { siteConfig } from './config/site';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('self-drive')) return 'self-drive';
      if (path.includes('vehicles')) return 'vehicles';
      if (path.includes('pondicherry') || path.includes('sightseeing')) return 'pondicherry';
      if (path.includes('about')) return 'about';
    }
    return 'home';
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    vehicle: null,
    destination: null
  });

  // Handle URL changes & sync SEO title & description
  useEffect(() => {
    let seoData = siteConfig.seo.home;
    if (currentPage === 'vehicles') seoData = siteConfig.seo.vehicles;
    else if (currentPage === 'self-drive') seoData = siteConfig.seo.selfDrive;
    else if (currentPage === 'pondicherry') seoData = siteConfig.seo.destinations;
    else if (currentPage === 'about') seoData = siteConfig.seo.about;

    if (seoData) {
      document.title = seoData.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', seoData.description);
    }

    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('self-drive')) setCurrentPage('self-drive');
      else if (path.includes('vehicles')) setCurrentPage('vehicles');
      else if (path.includes('pondicherry') || path.includes('sightseeing')) setCurrentPage('pondicherry');
      else if (path.includes('about')) setCurrentPage('about');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
  };

  const handleOpenEnquiry = (vehicleName = null, destinationName = null) => {
    setModalState({
      isOpen: true,
      vehicle: vehicleName || 'Toyota Innova Crysta',
      destination: destinationName || ''
    });
  };

  const handleCloseEnquiry = () => {
    setModalState({
      isOpen: false,
      vehicle: null,
      destination: null
    });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-lime selection:text-brand-forest">
      
      {/* Sticky Floating Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'vehicles' && (
          <VehiclesPage
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'self-drive' && (
          <SelfDrivePage onOpenGeneralEnquiry={handleOpenEnquiry} />
        )}

        {currentPage === 'pondicherry' && (
          <PondicherryPage onOpenEnquiry={handleOpenEnquiry} />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenEnquiry={handleOpenEnquiry} />
        )}

        {currentPage === 'home' && (
          <>
            <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
            <TrustFeatures />
            <PondicherrySpecial
              onOpenEnquiry={(v, d) => handleOpenEnquiry(v, d)}
              onNavigate={handleNavigate}
              isPreview={true}
            />
            <WhyChooseUs onOpenEnquiry={() => handleOpenEnquiry()} />
            <FAQSection />
            <CTASection onOpenEnquiry={() => handleOpenEnquiry()} />
          </>
        )}
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenEnquiry={(v) => handleOpenEnquiry(v)}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Enquiry Modal */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseEnquiry}
        initialVehicle={modalState.vehicle}
        initialDestination={modalState.destination}
      />
    </div>
  );
}

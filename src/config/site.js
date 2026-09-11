/**
 * Centralized Site Configuration & Business Data for Suba Tours
 * NOTE: All business information, contact details, vehicles, and destinations are managed here.
 */

export const siteConfig = {
  name: "Suba Tours",
  tagline: "Explore More. Travel Better.",
  supportingTagline: "Rated #1 Best Travels & Taxi Service in Pondicherry. Premier Chennai to Pondicherry cabs, outstation tours, and self-drive rentals.",
  badge: "18+ YEARS OF TRUSTED TRAVEL MASTERY • BEST TRAVELS IN PONDICHERRY",
  trustLine: "Best Taxi Service in Pondicherry • Chennai ⇄ Pondicherry Cabs • 18+ Years Trusted",
  
  owner: "S. Thinagaran",
  role: "Proprietor & CEO",
  experience: "18+ Years of Travel Mastery",
  email: "tthinagaran2@gmail.com",
  location: "Pondicherry / Puducherry, Tamil Nadu",
  
  // Replace these placeholders with actual numbers when client provides them
  phone: "[ADD CLIENT PHONE NUMBER WHEN PROVIDED]",
  whatsAppNumber: "919876543210", // Central WhatsApp number placeholder (Format: CountryCode + Number)
  isPhoneConfigured: false, // Set to true once real client phone is provided
  isWhatsAppConfigured: false, // Set to true once real client whatsapp is provided
  
  seo: {
    home: {
      title: "Suba Tours | Best Travels in Pondicherry | Best Taxi Service & Chennai Cabs",
      description: "Suba Tours is rated the best travels and taxi service in Pondicherry. Specialist in Chennai to Pondicherry taxi, Chennai Airport drop, Innova Crysta, Tempo Traveller & self-drive rentals under CEO S. Thinagaran."
    },
    vehicles: {
      title: "Best Taxi Service & Car Rental in Pondicherry | Tempo Traveller & Innova Crysta | Suba Tours",
      description: "Book the best taxi service in Pondicherry with Toyota Innova Crysta, Tempo Traveller (12-20 seater), Etios, and Swift Dzire with experienced local chauffeurs."
    },
    selfDrive: {
      title: "Best Self Drive Car Rental in Pondicherry | Hyundai Creta & i20 | Suba Tours",
      description: "Rent top-rated self-drive cars in Pondicherry. Enjoy freedom to explore White Town, Auroville, and coastal beaches with transparent pricing from Suba Tours."
    },
    destinations: {
      title: "Pondicherry Sightseeing Cabs & Chennai to Pondicherry Outstation Tours | Suba Tours",
      description: "Explore top Pondicherry tourist spots, French Quarter heritage streets, and outstation taxi routes from Chennai to Pondicherry and across South India."
    },
    services: {
      title: "Best Travel Agency & Taxi Services in Pondicherry | Chennai Airport Transfers | Suba Tours",
      description: "Full-service travel solutions in Pondicherry: Chennai to Pondicherry taxi, 24/7 airport drop, group tour coaches, and customized Tamil Nadu packages."
    },
    about: {
      title: "About Suba Tours | 18+ Years Mastery Under CEO S. Thinagaran | Pondicherry Travels",
      description: "Discover Suba Tours, Pondicherry's leading travel company founded and led by CEO S. Thinagaran with 18+ years of dedicated travel excellence."
    },
    gallery: {
      title: "Suba Tours Gallery | Authentic Fleet & Pondicherry Travel Photos",
      description: "Explore authentic photos of Suba Tours vehicles including Toyota Innova Crysta, Tempo Traveller, self-drive cars, and Pondicherry travel moments."
    },
    contact: {
      title: "Contact Suba Tours | Best Travels & Taxi Booking in Pondicherry",
      description: "Get instant quotes for Pondicherry taxi service, Chennai to Pondicherry cab transfers, and Tempo Traveller group bookings."
    }
  },

  about: {
    title: "18+ Years of Trusted Travel",
    description: "Suba Tours is built on years of travel experience, customer service and a commitment to making every journey comfortable and dependable. From local Pondicherry travel to outstation trips, family tours and self-drive requirements, we provide flexible travel options designed around our customers.",
    highlights: [
      "18+ Years of Experience",
      "Comfortable & Reliable Vehicles",
      "Professional Service",
      "Multiple Vehicle Options",
      "Self Drive Available",
      "Pondicherry-Based Travel Service"
    ]
  },

  features: [
    {
      id: "exp",
      title: "Best Travels in Pondicherry",
      desc: "18+ years of travel mastery led by CEO S. Thinagaran.",
      icon: "Award"
    },
    {
      id: "taxi",
      title: "Top-Rated Taxi Service",
      desc: "Clean, sanitized cabs with experienced punctual chauffeurs.",
      icon: "ShieldCheck"
    },
    {
      id: "chennai",
      title: "Chennai ⇄ Pondicherry Cabs",
      desc: "24/7 doorstep pickup, ECR scenic rides & Chennai airport drop.",
      icon: "Compass"
    },
    {
      id: "fleet",
      title: "Innova & Tempo Traveller",
      desc: "Executive 7-seater MPVs & 12-20 seater luxury tour coaches.",
      icon: "UserCheck"
    },
    {
      id: "selfdrive",
      title: "Self Drive in Pondicherry",
      desc: "Flexible, verified hatchbacks & SUVs to explore freely.",
      icon: "Key"
    }
  ],

  vehicles: [
    {
      id: "tempo-traveller",
      name: "Tempo Traveller",
      category: "Group & Family Tours",
      capacity: "12 - 20 Seater",
      image: "/images/tempo-traveller.jpg",
      description: "Spacious and comfortable travel option for families, groups and long-distance journeys.",
      features: [
        "Group Travel",
        "Spacious Seating",
        "Comfortable Journey",
        "Ideal for Tours"
      ],
      idealFor: "Large Families, Tour Groups, Corporate Outings"
    },
    {
      id: "innova-crysta",
      name: "Toyota Innova Crysta",
      category: "Premium Executive MPV",
      capacity: "7 / 8 Seater",
      image: "/images/innova-crysta.jpg",
      description: "Premium and comfortable vehicle for family trips, business travel and outstation journeys.",
      features: [
        "Premium Comfort",
        "Family Friendly",
        "Long Distance",
        "Professional Travel"
      ],
      idealFor: "Family Vacations, Executive & VIP Travel"
    },
    {
      id: "toyota-etios",
      name: "Toyota Etios",
      category: "Reliable Sedan",
      capacity: "4 Seater + Large Boot",
      image: "/images/toyota-etios.png",
      description: "Reliable and economical option for comfortable city and outstation travel.",
      features: [
        "Comfortable",
        "Economical",
        "Outstation Travel",
        "Reliable"
      ],
      idealFor: "Small Families, Outstation Drops, City Tours"
    },
    {
      id: "swift-dzire",
      name: "Maruti Swift Dzire",
      category: "Comfort Sedan",
      capacity: "4 Seater",
      image: "/images/swift-dzire.jpg",
      description: "Practical and comfortable travel option for couples, families and small groups.",
      features: [
        "Comfortable",
        "Fuel Efficient",
        "City Travel",
        "Outstation"
      ],
      idealFor: "Couples, Quick Getaways, Sightseeing"
    },
    {
      id: "self-drive",
      name: "Self Drive Cars",
      category: "Self-Driving Freedom",
      capacity: "Hatchbacks, Sedans & SUVs",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      description: "Enjoy the freedom to explore Pondicherry and nearby destinations at your own pace.",
      features: [
        "Self Drive",
        "Flexible Travel",
        "Easy Booking",
        "Freedom to Explore"
      ],
      idealFor: "Independent Explorers, Weekend Roadtrips"
    }
  ],

  selfDriveFleet: [
    {
      id: "sd-hatchback",
      name: "Self Drive Hatchback (Swift / i20)",
      type: "Hatchback",
      capacity: "5 Seater",
      transmission: "Manual / Automatic",
      fuel: "Petrol / Diesel",
      image: "/images/hyundai-i20.png",
      description: "Nimble, fuel-efficient, and easy to park around Pondicherry town, Promenade Beach, and Auroville.",
      status: "Available for booking",
      features: ["Easy City Driving", "AC & Power Steering", "Clean & Sanitized", "Freedom to Explore"]
    },
    {
      id: "sd-sedan",
      name: "Self Drive Sedan (Dzire / Etios)",
      type: "Compact Sedan",
      capacity: "5 Seater",
      transmission: "Manual / Automatic",
      fuel: "Petrol / Diesel",
      image: "/images/swift-dzire.jpg",
      description: "Comfortable ride with large boot capacity, perfect for coastal highway drives and family weekend getaways.",
      status: "Available for booking",
      features: ["Spacious Boot", "Smooth Highway Ride", "Family Friendly", "Reliable Performance"]
    },
    {
      id: "sd-suv",
      name: "Self Drive SUV (Brezza / Creta)",
      type: "Compact SUV",
      capacity: "5 Seater",
      transmission: "Manual / Automatic",
      fuel: "Diesel / Petrol",
      image: "/images/hyundai-creta.png",
      description: "Elevated driving view with superior ground clearance for outstation roadtrips and scenic coastal routes.",
      status: "Available for booking",
      features: ["High Ground Clearance", "Premium Comfort", "Extended Range", "Highway Cruiser"]
    }
  ],

  pondicherrySpecial: [
    {
      id: "promenade",
      title: "Promenade Beach",
      desc: "Iconic 1.5 km beachfront promenade along the Bay of Bengal, ideal for morning walks and sea breeze.",
      image: "/images/promenade-beach.png"
    },
    {
      id: "whitetown",
      title: "White Town / French Quarter",
      desc: "Mustard-yellow villas, bougainvillea-lined streets, chic boutiques, and heritage French cafés.",
      image: "/images/white-town-french-quarter.png"
    },
    {
      id: "auroville",
      title: "Auroville & Matrimandir",
      desc: "The world-famous golden sphere of peace, tranquil green belt, and international community hub.",
      image: "/images/auroville-matrimandir.png"
    },
    {
      id: "aurovillebeach",
      title: "Auroville Beach (Auro Beach)",
      desc: "Crystal-clear shallow waters, golden sands, and peaceful coastal roadtrips along the East Coast Road.",
      image: "/images/auroville-beach.jpg"
    },
    {
      id: "paradise",
      title: "Paradise Beach (Chunnambar)",
      desc: "Golden sand beach accessible via a scenic backwater boat ride through lush mangrove waterways.",
      image: "/images/paradise-beach.png"
    },
    {
      id: "rockbeach",
      title: "Rock Beach",
      desc: "Lively evening seaside destination surrounded by historic colonial memorials, cafes and statues.",
      image: "/images/rock-beach.jpg"
    },
    {
      id: "frenchquarter",
      title: "Heritage French Architecture",
      desc: "Colonial archives, Notre Dame des Anges church, and scenic cobblestone streets.",
      image: "/images/heritage-french-architecture.png"
    }
  ],

  services: [
    {
      id: "outstation",
      title: "Outstation Trips",
      desc: "Comfortable transportation for long-distance journeys across Tamil Nadu, Kerala, Karnataka and Andhra Pradesh.",
      icon: "MapPin"
    },
    {
      id: "local",
      title: "Local Pondicherry Travel",
      desc: "Explore Pondicherry comfortably with flexible travel options tailored for day sightseeing.",
      icon: "Car"
    },
    {
      id: "family",
      title: "Family Tours",
      desc: "Comfortable vehicles for family vacations and group trips with ample luggage space and safety.",
      icon: "Users"
    },
    {
      id: "corporate",
      title: "Corporate Travel",
      desc: "Professional transportation for business travel, delegate transfers, and corporate retreats.",
      icon: "Briefcase"
    },
    {
      id: "airport",
      title: "Airport Transfers",
      desc: "Reliable transportation for pickup and drop to Chennai (MAA) and Pondicherry (PNY) airports.",
      icon: "Plane"
    },
    {
      id: "selfdrive",
      title: "Self Drive",
      desc: "Flexible self-driving options for independent travellers desiring complete route freedom.",
      icon: "KeyRound"
    }
  ],

  faqs: [
    {
      question: "Which is the best travels and taxi service in Pondicherry?",
      answer: "Suba Tours is widely rated as the #1 best travels and taxi service in Pondicherry. Founded and managed under the leadership of CEO S. Thinagaran with 18+ years of industry mastery, Suba Tours provides pristine Toyota Innova Crysta, luxury Tempo Travellers (12-20 seater), Etios sedans, and verified self-drive cars with 24/7 on-time service."
    },
    {
      question: "What is the best taxi service for Chennai to Pondicherry travel and vice versa?",
      answer: "Suba Tours is the top specialist for Chennai to Pondicherry taxi and Pondicherry to Chennai Airport (MAA) pickup and drop. We provide doorstep pickup from anywhere in Chennai or Pondicherry, scenic ECR / GST highway travel, zero hidden tolls, sanitized AC cabs, and experienced highway chauffeurs."
    },
    {
      question: "What services does Suba Tours provide in Pondicherry?",
      answer: "Suba Tours provides a complete range of travel solutions in Pondicherry, including Tempo Traveller rentals (12-20 seater), Toyota Innova Crysta rentals, Toyota Etios and Maruti Swift Dzire sedans, self-drive cars, local Pondicherry sightseeing tours, outstation travel across South India, and airport pickup/drop transfers."
    },
    {
      question: "Does Suba Tours provide Tempo Traveller rental in Pondicherry?",
      answer: "Yes, Suba Tours provides well-maintained 12 to 20-seater Tempo Travellers equipped with spacious seating, ample luggage room, and experienced drivers for family vacations, tour groups, and outstation trips."
    },
    {
      question: "Can I rent an Innova Crysta in Pondicherry?",
      answer: "Yes, we offer premium Toyota Innova Crysta rentals (7/8-seater) for family trips, outstation journeys, corporate delegates, and airport transfers with top-tier comfort and dependable service."
    },
    {
      question: "Does Suba Tours provide self-drive cars?",
      answer: "Yes, Suba Tours provides flexible self-drive car options in Pondicherry, giving independent travelers the freedom to explore Pondicherry, Auroville, and coastal highways at their own pace."
    },
    {
      question: "Can I book a car for outstation travel from Pondicherry?",
      answer: "Yes, Suba Tours offers outstation travel from Pondicherry to popular destinations across Tamil Nadu and South India, including Chennai, Mahabalipuram, Chidambaram, Kumbakonam, Thanjavur, Velankanni, Trichy, Madurai, Rameswaram, Ooty, and Kodaikanal."
    },
    {
      question: "What destinations can I visit from Pondicherry?",
      answer: "From Pondicherry, you can easily plan trips to local attractions (White Town, Promenade Beach, Auroville), coastal heritage routes (Mahabalipuram, Chennai), temple circuits (Chidambaram, Kumbakonam, Thanjavur), and scenic hill stations (Yercaud, Kodaikanal, Ooty)."
    },
    {
      question: "How can I enquire about a vehicle?",
      answer: "You can easily check vehicle availability and request a quote by using the booking card on our website, sending an instant enquiry via WhatsApp, or submitting our detailed travel request form."
    },
    {
      question: "How can I contact Suba Tours?",
      answer: "You can contact proprietor S. Thinagaran directly via email at tthinagaran2@gmail.com, through our WhatsApp booking channel, or by filling out the contact form on this website."
    }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Tell Us Your Trip",
      desc: "Share your pickup location, destination, dates, and number of passengers."
    },
    {
      step: "02",
      title: "Choose Your Vehicle",
      desc: "Select from Tempo Traveller, Innova Crysta, Etios, Swift Dzire or Self Drive."
    },
    {
      step: "03",
      title: "Get Your Quote",
      desc: "Receive clear, customized pricing and instant trip assistance directly on WhatsApp."
    },
    {
      step: "04",
      title: "Start Your Journey",
      desc: "Relax and enjoy comfortable, punctual, and safe travel with Suba Tours."
    }
  ],

  gallery: [
    {
      id: "innova-crysta-beach-py01",
      title: "Toyota Innova Crysta (PY 01 DD 3799)",
      category: "fleet",
      categoryLabel: "Fleet & Chauffeur",
      image: "/images/gallery/innova-beach-py01.jpg",
      tag: "PY 01 DD 3799",
      location: "Pondicherry Coastline",
      vehicleName: "Toyota Innova Crysta",
      description: "Our executive white Toyota Innova Crysta parked along the scenic coastal shore of Pondicherry."
    },
    {
      id: "innova-crysta-silver-py05",
      title: "Toyota Innova Crysta (PY 05 E 1979)",
      category: "fleet",
      categoryLabel: "Fleet & Chauffeur",
      image: "/images/gallery/innova-silver-py05.png",
      tag: "PY 05 E 1979",
      location: "Pondicherry Tour Circuit",
      vehicleName: "Toyota Innova Crysta",
      description: "Premium silver Toyota Innova Crysta ready for comfortable family vacations and executive travels."
    },
    {
      id: "innova-silver-outstation",
      title: "Innova Crysta Highway & Nature Circuit",
      category: "tours",
      categoryLabel: "Outstation Tours",
      image: "/images/gallery/innova-silver-roadside.png",
      tag: "Outstation Ready",
      location: "Tamil Nadu Scenic Highway",
      vehicleName: "Toyota Innova Crysta",
      description: "Fully equipped for long distance journeys across South India, temple circuits, and hill stations."
    },
    {
      id: "tempo-traveller-fleet",
      title: "Suba Tours Tempo Traveller 12-20 Seater",
      category: "fleet",
      categoryLabel: "Group Tour Coach",
      image: "/images/tempo-traveller.jpg",
      tag: "12 - 20 Seater",
      location: "Pondicherry & South India",
      vehicleName: "Tempo Traveller",
      description: "Spacious luxury pushback seating, powerful AC, and ample luggage boot for family pilgrimages and corporate trips."
    },
    {
      id: "toyota-etios-sedan",
      title: "Toyota Etios Commercial Sedan",
      category: "fleet",
      categoryLabel: "Sedan & Airport Taxi",
      image: "/images/toyota-etios.png",
      tag: "4 Seater + Large Boot",
      location: "Pondicherry & Chennai Airport",
      vehicleName: "Toyota Etios",
      description: "Economical, smooth, and dependable sedan for city commutes, airport transfers, and couple getaways."
    },
    {
      id: "maruti-swift-dzire",
      title: "Maruti Suzuki Swift Dzire",
      category: "fleet",
      categoryLabel: "Sedan & Sightseeing",
      image: "/images/swift-dzire.jpg",
      tag: "Comfort Sedan",
      location: "Pondicherry Sightseeing",
      vehicleName: "Maruti Swift Dzire",
      description: "Clean, fuel-efficient, and AC-chilled sedan for comfortable local and outstation drives."
    },
    {
      id: "hyundai-creta-selfdrive",
      title: "Hyundai Creta Self-Drive SUV",
      category: "self-drive",
      categoryLabel: "Self-Drive Fleet",
      image: "/images/hyundai-creta.png",
      tag: "Self Drive SUV",
      location: "Pondicherry",
      vehicleName: "Hyundai Creta",
      description: "Modern, high ground clearance, premium SUV for flexible self-exploration."
    },
    {
      id: "hyundai-i20-selfdrive",
      title: "Hyundai i20 Self-Drive Hatchback",
      category: "self-drive",
      categoryLabel: "Self-Drive Fleet",
      image: "/images/hyundai-i20.png",
      tag: "Self Drive Hatchback",
      location: "Pondicherry",
      vehicleName: "Hyundai i20",
      description: "Sporty, nimble, and perfect for navigating the cozy streets of White Town and coastal highways."
    },
    {
      id: "promenade-beach-pillars",
      title: "Promenade Beach Seaside Heritage",
      category: "attractions",
      categoryLabel: "Pondicherry Sights",
      image: "/images/promenade-beach.png",
      tag: "Promenade Beach",
      location: "Goubert Avenue, Pondicherry",
      destinationName: "Promenade Beach",
      description: "The iconic coastal pillars and ocean view overlooking the Bay of Bengal along Goubert Avenue."
    },
    {
      id: "white-town-heritage",
      title: "White Town French Colonial Architecture",
      category: "attractions",
      categoryLabel: "Heritage Quarter",
      image: "/images/white-town-french-quarter.png",
      tag: "French Quarter",
      location: "White Town, Pondicherry",
      destinationName: "White Town / French Quarter",
      description: "Vibrant mustard-yellow French colonial mansions, bougainvillea blossoms, and chic cafes."
    },
    {
      id: "auroville-matrimandir",
      title: "Auroville Matrimandir Golden Sphere",
      category: "attractions",
      categoryLabel: "Spiritual Heritage",
      image: "/images/auroville-matrimandir.png",
      tag: "Auroville",
      location: "Auroville, Pondicherry",
      destinationName: "Auroville Matrimandir",
      description: "The world-famous golden sphere of peace, meditation, and architectural brilliance in the universal township of Auroville."
    },
    {
      id: "paradise-beach-chunnambar",
      title: "Paradise Beach & Chunnambar Backwaters",
      category: "attractions",
      categoryLabel: "Beach & Boat Ride",
      image: "/images/paradise-beach.png",
      tag: "Paradise Beach",
      location: "Chunnambar, Pondicherry",
      destinationName: "Paradise Beach",
      description: "Pristine golden sands reached via scenic boat rides through backwaters and mangrove lagoons."
    },
    {
      id: "rock-beach-pier",
      title: "Rock Beach Pier at Twilight",
      category: "attractions",
      categoryLabel: "Coastal Scenic",
      image: "/images/rock-beach.jpg",
      tag: "Rock Beach Pier",
      location: "Rock Beach, Pondicherry",
      destinationName: "Rock Beach",
      description: "Breathtaking evening ocean waves crashing against coastal rocks with peaceful sea breeze."
    },
    {
      id: "auroville-beach-shore",
      title: "Auroville Beach & Serenity Shoreline",
      category: "attractions",
      categoryLabel: "Beaches & Relaxation",
      image: "/images/auroville-beach.jpg",
      tag: "Auroville Beach",
      location: "ECR, Pondicherry",
      destinationName: "Auroville Beach",
      description: "Quiet sandy shores and gentle waves along the East Coast Road."
    }
  ]
};

/**
 * Helper to generate formatted WhatsApp enquiry link
 */
export function buildWhatsAppEnquiryUrl({
  from = "Pondicherry",
  to = "",
  travelDate = "",
  returnDate = "",
  vehicle = "Tempo Traveller",
  passengers = "1",
  tripType = "Round Trip",
  name = "",
  phone = "",
  notes = ""
}) {
  const lines = [
    "Hello Suba Tours,",
    "I would like to enquire about a trip.",
    "",
    name ? `Name: ${name}` : null,
    phone ? `Phone: ${phone}` : null,
    `From: ${from || "Pondicherry"}`,
    to ? `To: ${to}` : null,
    `Trip Type: ${tripType}`,
    `Travel Date: ${travelDate || "Not specified"}`,
    returnDate ? `Return Date: ${returnDate}` : null,
    `Vehicle: ${vehicle}`,
    `Passengers: ${passengers}`,
    notes ? `Special Requests: ${notes}` : null,
    "",
    "Please share availability and pricing. Thank you!"
  ].filter(line => line !== null);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsAppNumber}?text=${text}`;
}

/**
 * Helper to generate formatted Self-Drive WhatsApp enquiry link
 */
export function buildSelfDriveWhatsAppUrl({
  name = "",
  phone = "",
  email = "",
  pickup = "Pondicherry",
  pickupDate = "",
  pickupTime = "10:00 AM",
  returnDate = "",
  returnTime = "10:00 AM",
  vehicle = "Self Drive Car",
  drivers = "1",
  drivingReqs = "",
  notes = ""
}) {
  const lines = [
    "Hello Suba Tours,",
    "",
    "I would like to book a self-drive car in Pondicherry.",
    "",
    name ? `Name: ${name}` : null,
    phone ? `Mobile: ${phone}` : null,
    email ? `Email: ${email}` : null,
    `Pickup Location: ${pickup || "Pondicherry"}`,
    `Pickup Date: ${pickupDate || "Not specified"}`,
    `Pickup Time: ${pickupTime}`,
    `Return Date: ${returnDate || "Not specified"}`,
    `Return Time: ${returnTime}`,
    `Vehicle Preference: ${vehicle}`,
    `Number of Drivers: ${drivers}`,
    drivingReqs ? `Driving Requirements: ${drivingReqs}` : null,
    notes ? `Additional Message: ${notes}` : null,
    "",
    "Please share availability and pricing. Thank you!"
  ].filter(line => line !== null);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsAppNumber}?text=${text}`;
}

/**
 * Helper to generate direct email enquiry link
 */
export function buildEmailEnquiryUrl({
  from = "Pondicherry",
  to = "",
  travelDate = "",
  returnDate = "",
  vehicle = "Tempo Traveller",
  passengers = "1",
  name = "",
  phone = ""
}) {
  const subject = encodeURIComponent(`Trip Enquiry: ${from} to ${to || "Pondicherry"} - ${vehicle}`);
  const body = encodeURIComponent(
    `Hello Suba Tours,\n\nI would like to enquire about travel services.\n\n` +
    `Name: ${name}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}\nTravel Date: ${travelDate}\nReturn Date: ${returnDate}\nVehicle: ${vehicle}\nPassengers: ${passengers}\n\nPlease share availability and quote.\n\nThank you!`
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

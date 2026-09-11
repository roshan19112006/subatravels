/**
 * Centralized Site Configuration & Business Data for Suba Tours
 * NOTE: All business information, contact details, vehicles, and destinations are managed here.
 */

export const siteConfig = {
  name: "Suba Tours",
  tagline: "Explore More. Travel Better.",
  supportingTagline: "Comfortable journeys, trusted service and premium travel experiences from Pondicherry.",
  badge: "18+ YEARS OF TRUSTED TRAVEL SERVICE",
  trustLine: "Comfortable Rides • Reliable Service • Memorable Journeys",
  
  owner: "S. Thinagaran",
  experience: "18+ Years",
  email: "tthinagaran2@gmail.com",
  location: "Pondicherry / Puducherry, Tamil Nadu",
  
  // Replace these placeholders with actual numbers when client provides them
  phone: "[ADD CLIENT PHONE NUMBER WHEN PROVIDED]",
  whatsAppNumber: "919876543210", // Central WhatsApp number placeholder (Format: CountryCode + Number)
  isPhoneConfigured: false, // Set to true once real client phone is provided
  isWhatsAppConfigured: false, // Set to true once real client whatsapp is provided
  
  seo: {
    home: {
      title: "Suba Tours Pondicherry | Car Rental, Tempo Traveller & Self Drive",
      description: "Suba Tours offers reliable travel services in Pondicherry including Tempo Traveller, Innova Crysta, Etios, Swift Dzire and self-drive cars for local and outstation travel."
    },
    vehicles: {
      title: "Car Rental & Tempo Traveller in Pondicherry | Suba Tours",
      description: "Rent Tempo Traveller, Toyota Innova Crysta, Etios, and Swift Dzire in Pondicherry with professional drivers and well-maintained fleet."
    },
    selfDrive: {
      title: "Self Drive Car Rental in Pondicherry | Suba Tours",
      description: "Enjoy the freedom to explore Pondicherry and nearby destinations with flexible, well-maintained self-drive car options from Suba Tours."
    },
    destinations: {
      title: "Pondicherry Travel Destinations & Tours | Suba Tours",
      description: "Explore popular tourist spots in Pondicherry, French Quarter heritage streets, and outstation circuits across Tamil Nadu & South India."
    },
    services: {
      title: "Travel Services in Pondicherry | Suba Tours",
      description: "Comprehensive travel solutions from Pondicherry including outstation trips, local sightseeing, corporate travel, family tours, and airport transfers."
    },
    about: {
      title: "About Suba Tours | 18+ Years of Travel Experience",
      description: "Suba Tours is led by proprietor S. Thinagaran with 18+ years of dedicated travel expertise, dependable vehicles, and transparent service in Pondicherry."
    },
    contact: {
      title: "Contact Suba Tours Pondicherry | Book Your Journey",
      description: "Contact Suba Tours in Pondicherry for immediate vehicle quotes, customized tour itineraries, Tempo Traveller booking, and self-drive enquiries."
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
      title: "18+ Years Experience",
      desc: "Experienced travel service you can trust.",
      icon: "Award"
    },
    {
      id: "comfort",
      title: "Comfortable Vehicles",
      desc: "Travel comfortably with well-maintained vehicles.",
      icon: "ShieldCheck"
    },
    {
      id: "service",
      title: "Professional Service",
      desc: "Reliable service from enquiry to journey.",
      icon: "UserCheck"
    },
    {
      id: "flexible",
      title: "Flexible Travel Options",
      desc: "Choose the vehicle that fits your trip.",
      icon: "Compass"
    },
    {
      id: "selfdrive",
      title: "Self Drive Available",
      desc: "Convenient self-driving options available.",
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

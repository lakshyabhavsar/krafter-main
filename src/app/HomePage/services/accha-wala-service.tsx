"use client";
import React, { useState } from "react";
import AnimatedScrollContainer from "@/components/AnimatedScrollContainer";

const serviceCategories = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
    icon: "/images/home/vr1.png",
    details: [
      {
        title: "Android Apps",
        description:
          "Custom Android app development for scalable, high-performance mobile solutions. Boost your business with user-friendly, feature-rich Android applications tailored to your needs.",
      },
      {
        title: "IOS Apps",
        description:
          "Professional iOS app development for seamless, secure, and engaging experiences on iPhone and iPad. Enhance your brand with top-rated iOS mobile applications.",
      },
      {
        title: "Hybrid Apps",
        description:
          "Cross-platform hybrid app development using the latest frameworks. Reach both Android and iOS users with cost-effective, high-quality hybrid mobile apps.",
      },
      {
        title: "Progressive Apps",
        description:
          "Progressive Web App (PWA) development for fast, reliable, and engaging mobile experiences. Increase conversions with installable, offline-capable web apps.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
    icon: "/images/home/vr4.png",
    details: [
      {
        title: "Corporate Website",
        description:
          "Professional corporate website development to establish a strong online presence, enhance brand credibility, and engage clients with a modern, responsive design optimized for search engines.",
      },
      {
        title: "E-commerce Website",
        description:
          "Custom e-commerce website solutions for seamless online shopping experiences, secure payment integration, and scalable platforms designed to boost sales and improve SEO rankings.",
      },
      {
        title: "Service Website",
        description:
          "Tailored service website development to showcase your offerings, attract new customers, and drive conversions with user-friendly layouts and SEO-focused content.",
      },
      {
        title: "Portal Development",
        description:
          "Robust portal development for businesses and organizations, enabling efficient information management, user collaboration, and secure access with SEO best practices.",
      },
      {
        title: "Dharma ERP",
        description:
          "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
      },
      {
        title: "CRM",
        description:
          "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
      },
      {
        title: "Sub Contracting",
        description:
          "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
      },
      {
        title: "Sales",
        description:
          "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
      },
      {
        title: "Finance",
        description:
          "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Expert advice and strategic planning to help your business navigate complex challenges and achieve sustainable growth.",
    icon: "/images/home/vr2.png",
    details: [
      {
        title: "Dharma ERP",
        description:
          "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
      },
      {
        title: "CRM",
        description:
          "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
      },
      {
        title: "Sub Contracting",
        description:
          "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
      },
      {
        title: "Sales",
        description:
          "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
      },
      {
        title: "Finance",
        description:
          "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | typeof serviceCategories[0]>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] pb-20">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-r from-[#1a237e] via-[#3949ab] to-[#90caf9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#90caf9]/30 via-transparent to-transparent pointer-events-none" />
        <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg mb-4">
          Our Services
        </h1>
        <p className="mt-2 text-lg sm:text-2xl text-white/90 max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology, creative solutions, and strategic growth.
        </p>
        <button className="mt-8 px-8 py-3 rounded-full bg-white text-[#463cc9] font-bold text-lg shadow-lg hover:bg-[#e0e7ff] transition-all duration-300">
          Get Started
        </button>
      </section>

      {/* Service Categories */}
      <section className="max-w-6xl mx-auto mt-[-60px] z-10 relative px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceCategories.map((cat, idx) => (
          <AnimatedScrollContainer key={cat.id} animationClass="animate-fadeInUp">
            <div
              className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition-all duration-500 cursor-pointer border border-transparent hover:border-[#463cc9]"
              onClick={() => setSelectedCategory(cat)}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#463cc9] to-[#90caf9] flex items-center justify-center mb-6 shadow-lg overflow-hidden">
                <img src={cat.icon} alt={cat.title} className="w-16 h-16 object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text">
                {cat.title}
              </h2>
              <p className="text-gray-700 text-base mb-4 min-h-[60px]">{cat.description}</p>
              <span className="mt-auto text-[#463cc9] font-semibold group-hover:underline">See Details →</span>
            </div>
          </AnimatedScrollContainer>
        ))}
      </section>

      {/* Modal for Service Details */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 relative animate-fadeInUp max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-[#463cc9] text-2xl font-bold"
              onClick={() => setSelectedCategory(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#463cc9] to-[#90caf9] flex items-center justify-center mb-2 shadow-lg overflow-hidden">
                <img src={selectedCategory.icon} alt={selectedCategory.title} className="w-10 h-10 object-contain" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text mb-1">
                {selectedCategory.title}
              </h2>
              <p className="text-gray-700 text-sm text-center mb-2">{selectedCategory.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedCategory.details.map((detail, idx) => (
                <div key={idx} className="bg-[#f0f4ff] rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base font-semibold mb-1 text-[#463cc9]">{detail.title}</h3>
                  <p className="text-gray-700 text-xs">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;

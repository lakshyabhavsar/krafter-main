"use client";
import React, { useState, useRef, useEffect } from "react";
import AnimatedScrollContainer from "@/components/AnimatedScrollContainer";
import InfiniteCarousel from "@/components/mobile";
import PortfolioGrid from "@/app/digital-marketing/portfolio/demo";

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
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Scroll handler to update active sidebar option
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.map(ref => ref.current?.getBoundingClientRect().top ?? 0);
      const activeIdx = offsets.findIndex((offset, idx) => {
        if (idx === offsets.length - 1) return offset < window.innerHeight / 2;
        return offset < window.innerHeight / 2 && offsets[idx + 1] > window.innerHeight / 2;
      });
      setActiveSection(activeIdx === -1 ? 0 : activeIdx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  // Scroll to section on sidebar click
  const scrollToSection = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] pb-20">
      {/* Hero Section */}
      <AnimatedScrollContainer>
        <section className="w-full flex flex-col items-start justify-center py-4 sm:py-8 px-2 sm:px-4 text-left bg-gradient-to-r from-[#e0e7ff] via-[#c5d3ff] to-[#f0f4ff] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#90caf9]/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text drop-shadow-lg mb-2 sm:mb-4">
              Our Services
            </h1>
            <p className="mt-2 text-base xs:text-lg sm:text-2xl text-[#3949ab] max-w-full sm:max-w-2xl">
              Empowering your business with cutting-edge technology, creative solutions, and strategic growth.
            </p>
          </div>
        </section>
      </AnimatedScrollContainer>
      <hr className="my-8 border-t-2 border-[#e0e7ff] w-full" />

      {/* Sidebar + Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-4 mt-[-30px] md:mt-[-60px] z-10 relative">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 sticky top-32 self-start">
          <nav className="flex flex-col gap-4 bg-white/80 rounded-2xl shadow-xl p-6">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === idx
                    ? "bg-gradient-to-r from-[#463cc9] to-[#90caf9] text-white shadow-lg"
                    : "bg-transparent text-[#463cc9] hover:bg-[#e0e7ff]"
                }`}
                onClick={() => scrollToSection(idx)}
              >
                {cat.title}
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content Sections */}
        <div className="flex-1 flex flex-col gap-4 bg-transparent">
          {serviceCategories.map((cat, idx) => (
            <React.Fragment key={cat.id}>
              <div
                ref={sectionRefs[idx]}
                className="scroll-mt-32"
              >
                <AnimatedScrollContainer animationClass="animate-fadeInUp">
                  <div className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-500 border border-transparent">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text">
                      {idx === 0 ? 'We Develop' : cat.title}
                    </h2>
                    <p className="text-gray-700 text-base mb-4 min-h-[60px] text-center">{cat.description}</p>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 w-full mt-4 sm:mt-6">
                      {cat.details.map((detail, dIdx) => (
                        <div key={dIdx} className="bg-[#f0f4ff] rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300">
                          <h3 className="text-base font-semibold mb-1 text-[#463cc9]">{detail.title}</h3>
                          <p className="text-gray-700 text-xs">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                    {idx === 0 && (
                      <div className="w-full mt-8">
                        <InfiniteCarousel />
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="w-full mt-8">
                        <PortfolioGrid />
                      </div>
                    )}
                  </div>
                </AnimatedScrollContainer>
              </div>
              {idx < serviceCategories.length - 1 && (
                <hr className="my-12 border-t-2 border-[#e0e7ff] w-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <AnimatedScrollContainer>
            <div className="bg-white/80 rounded-3xl shadow-2xl max-w-full w-full p-2 xs:p-4 sm:p-6 relative animate-fadeInUp max-h-[80vh] overflow-y-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-[#463cc9] text-2xl font-bold"
                onClick={() => setSelectedCategory(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex flex-col items-center mb-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text mb-1">
                  {selectedCategory.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4">
                {selectedCategory.details.map((detail, idx) => (
                  <div key={idx} className="bg-[#f0f4ff] rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-base font-semibold mb-1 text-[#463cc9]">{detail.title}</h3>
                    <p className="text-gray-700 text-xs">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedScrollContainer>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;

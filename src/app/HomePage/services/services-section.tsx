"use client";
import React, { useState, useRef, useEffect } from "react";

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Responsive: track if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of section visible
    };
    observerRef.current = new window.IntersectionObserver((entries) => {
      let maxRatio = 0;
      let visibleSection = activeSection;
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleSection = idx + 1;
        }
      });
      setActiveSection((prev) => (prev !== visibleSection ? visibleSection : prev));
    }, options);
    sectionRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleMenuClick = (sectionId: number) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId - 1]?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    {
      id: 1,
      title: "Mobile App Development",
      description:
        "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
      bgImage: "/images/home/vr1.png",
      cards: [
        {
          title: "Android Apps",
          description: "Custom Android app development for scalable, high-performance mobile solutions. Boost your business with user-friendly, feature-rich Android applications tailored to your needs.",
        },
        {
          title: "IOS Apps",
          description: "Professional iOS app development for seamless, secure, and engaging experiences on iPhone and iPad. Enhance your brand with top-rated iOS mobile applications.",
        },
        {
          title: "Hybrid Apps",
          description: "Cross-platform hybrid app development using the latest frameworks. Reach both Android and iOS users with cost-effective, high-quality hybrid mobile apps.",
        },
        {
          title: "Progressive Apps",
          description: "Progressive Web App (PWA) development for fast, reliable, and engaging mobile experiences. Increase conversions with installable, offline-capable web apps.",
        },
      ],
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
      bgImage: "/images/home/vr4.png",
      cards: [
        {
          title: "Corporate Website",
          description: "Professional corporate website development to establish a strong online presence, enhance brand credibility, and engage clients with a modern, responsive design optimized for search engines.",
        },
        {
          title: "E-commerce Website",
          description: "Custom e-commerce website solutions for seamless online shopping experiences, secure payment integration, and scalable platforms designed to boost sales and improve SEO rankings.",
        },
        {
          title: "Service Website",
          description: "Tailored service website development to showcase your offerings, attract new customers, and drive conversions with user-friendly layouts and SEO-focused content.",
        },
        {
          title: "Portal Development",
          description: "Robust portal development for businesses and organizations, enabling efficient information management, user collaboration, and secure access with SEO best practices.",
        },
        {
          title: "Dharma ERP",
          description: "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
        },
        {
          title: "CRM",
          description: "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
        },
        {
          title: "Sub Contracting",
          description: "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
        },
        {
          title: "Sales",
          description: "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
        },
        {
          title: "Finance",
          description: "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
        },
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Expert advice and strategic planning to help your business navigate complex challenges and achieve sustainable growth.",
      bgImage: "/images/home/vr2.png",
      cards: [
        {
          title: "Dharma ERP",
          description: "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
        },
        {
          title: "CRM",
          description: "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
        },
        {
          title: "Sub Contracting",
          description: "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
        },
        {
          title: "Sales",
          description: "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
        },
        {
          title: "Finance",
          description: "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#f0f0f0]">
      <div className="w-full bg-gray-100 py-12 text-left shadow-md px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl sm:text-9xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#1a237e] via-[#3949ab] to-[#90caf9] text-transparent bg-clip-text drop-shadow-lg"
          style={{ letterSpacing: "0.1em" }}
        >
          Services
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1a237e] via-[#3949ab] to-[#90caf9] rounded-full mt-4 mb-2"></div>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Immerse yourself in the magical world of 3D
        </p>
      </div>
      <div className="relative" id="vertical-menu-section">
        {/* Sidebar for desktop, horizontal bar for mobile */}
        {!isMobile ? (
          <div className="sticky top-[20%] left-0 h-0 z-20 pointer-events-auto">
            <div className="absolute left-8 transition-opacity duration-300 opacity-100">
              <div className="flex flex-col space-y-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleMenuClick(section.id)}
                    aria-current={activeSection === section.id ? "true" : undefined}
                    aria-label={section.title}
                    className={`text-left transition-all duration-300 group focus:outline-none relative ${
                      activeSection === section.id
                        ? "text-black scale-105"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-1 h-8 mr-4 transition-all duration-300 ${
                          activeSection === section.id
                            ? "bg-[#463cc9]"
                            : "bg-transparent"
                        }`}
                      />
                      <span className="text-lg font-medium relative">
                        {section.title.replace(".", "")}
                        {activeSection === section.id && (
                          <span
                            className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-[#463cc9] to-[#90caf9] rounded-full animate-fadeInOut"
                            style={{ transition: "all 0.3s" }}
                          ></span>
                        )}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto flex space-x-4 py-4 px-2 bg-white sticky top-0 z-30 border-b border-gray-200">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleMenuClick(section.id)}
                aria-current={activeSection === section.id ? "true" : undefined}
                aria-label={section.title}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 focus:outline-none relative ${
                  activeSection === section.id
                    ? "bg-[#463cc9] text-white scale-105 shadow-lg"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {section.title.replace(".", "")}
                {activeSection === section.id && (
                  <span
                    className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-[#463cc9] to-[#90caf9] rounded-full animate-fadeInOut"
                    style={{ transition: "all 0.3s" }}
                  ></span>
                )}
              </button>
            ))}
          </div>
        )}
        {/* Main Content */}
        <div className="w-full snap-y snap-mandatory h-screen overflow-y-auto">
          {sections.map((section, idx) => (
            <React.Fragment key={section.id}>
              {idx !== 0 && (
                <div className="w-full flex justify-center">
                  <div className="h-0.5 w-3/4 bg-gray-300 my-0" />
                </div>
              )}
              <div
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[section.id - 1] = el;
                }}
                className="relative h-screen w-full flex items-center bg-[#e3e3e3] snap-start snap-always"
              >
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="mb-8 text-gray-700">{section.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {section.cards.map((card, cardIdx) => (
                      <div key={cardIdx} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

'use client';
import { useState,} from 'react';
import Image from 'next/image';

interface SectionData {
  id: string;
  title: string;
  rows: {
    content: string;
    image: string;
  }[];
}

const sections: SectionData[] = [
  {
    id: 'products',
    title: 'Products',
    rows: [
      { content: 'Product 1 Description', image: '/product1.jpg' },
      { content: 'Product 2 Description', image: '/product2.jpg' },
      { content: 'Product 3 Description', image: '/product3.jpg' },
      { content: 'Product 4 Description', image: '/product4.jpg' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    rows: [
      { content: 'Service 1 Description', image: '/service1.jpg' },
      { content: 'Service 2 Description', image: '/service2.jpg' },
      { content: 'Service 3 Description', image: '/service3.jpg' },
      { content: 'Service 4 Description', image: '/service4.jpg' },
    ],
  },
];

export default function ScrollableSection() {
  const [activeSection, setActiveSection] = useState('products');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="relative w-full max-w-[1200px] h-[700px] flex">
        {/* Vertical Menu - Now positioned within container */}
        <div className="w-24 h-full flex items-center">
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container - Adjusted margin */}
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-full overflow-y-auto">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`${activeSection === section.id ? 'block' : 'hidden'}`}
              >
                {section.rows.map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row border-b last:border-b-0"
                  >
                    <div className="flex-1 p-6 md:p-8">
                      <h3 className="text-xl font-semibold mb-4">
                        {section.title} {index + 1}
                      </h3>
                      <p className="text-gray-600">{row.content}</p>
                    </div>
                    <div className="flex-1 relative h-48 md:h-auto">
                      <Image
                        src={row.image}
                        alt={`${section.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
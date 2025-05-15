'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ITServicesDropdown, DataScienceDropdown } from './Dropdowns';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Centered and responsive */}
          <div className="flex items-center relative">
            <Link href="/" className="group relative flex items-center">
              <Image 
                src="/images/logo3-infinity.png" 
                alt="Logo" 
                width={80} 
                height={41}
                className="w-[70px] md:w-[80px] transition-transform duration-300 group-hover:translate-x-[-10px]"
                priority
              />
              <Image 
                src="/images/logo3-code.png" 
                alt="Secondary Logo" 
                width={94} 
                height={47}
                className="absolute left-full w-[74px] md:w-[94px] opacity-0 transition-all duration-300 transform translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-[-5px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[18px]">
            <div className="relative group">
              <button 
                className=" text-gray-800 hover:text-[#823dd9] py-4 flex items-center gap-1"
              >
                IT Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block">
                <ITServicesDropdown isVisible={true} />
              </div>
            </div>

            <div className="relative group">
              <button 
                className=" text-gray-800 hover:text-[#823dd9] py-4 flex items-center gap-1"
              >
                Data Science
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block">
                <DataScienceDropdown isVisible={true} />
              </div>
            </div>

            <Link href="/digital-marketing" className=" text-gray-800 hover:text-[#823dd9]">
              Digital Marketing
            </Link>
            <Link href="/about" className=" text-gray-800 hover:text-[#823dd9]">
              About Us
            </Link>
            <Link href="/careers" className=" text-gray-800 hover:text-[#823dd9]">
              Careers
            </Link>
            <Link href="/PortfolioPage" className=" text-gray-800 hover:text-[#823dd9]">
            Portfolio
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button - Now on the right */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2  text-gray-800 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-3 text-[18px]">
            <div className="space-y-2">
              <button 
                onClick={() => toggleDropdown('it')}
                className="w-full text-left px-3 py-2  text-gray-800 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'it' && <ITServicesDropdown isMobile />}
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => toggleDropdown('data')}
                className="w-full text-left px-3 py-2  text-gray-800 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>Data Science</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'data' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'data' && <DataScienceDropdown isMobile />}
            </div>

            <Link href="/digital-marketing" 
              className="block px-3 py-2  text-gray-800 hover:bg-gray-100"
            >
              Digital Marketing
            </Link>
            <Link href="/about" 
              className="block px-3 py-2   text-gray-800 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link href="/careers" 
              className="block px-3 py-2  text-gray-800 hover:bg-gray-100"
            >
              Careers
            </Link>
            <Link href="/projects" 
              className="block px-3 py-2  text-gray-800 hover:bg-gray-100"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
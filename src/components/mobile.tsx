'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const carouselItems = [
  '/images/home/frame1.png',
  '/images/home/mobile1.png',
  '/images/home/frame3.png',
  '/images/home/frame4.png',
  '/images/home/frame5.png',
  '/images/home/frame6.png',
  '/images/home/frame1.png',
  '/images/home/mobile1.png',
  '/images/home/frame3.png',
  '/images/home/frame4.png',
  '/images/home/frame5.png',
  '/images/home/frame6.png',
  
];

export default function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const normalizedIndex = currentIndex % carouselItems.length;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[100%] bg-[#e1e2e3] ">
      {/* Heading and Description */}
      <div className="text-center m-6 px-4">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Mobile Application
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Your World. Their Fingertips. We are masters in developing Robust & High performant Mobile Applications.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full overflow-hidden">
        {/* Phone frame overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[300px] sm:w-[320px] md:w-[340px] lg:w-[286px] 
                      h-[470px] sm:h-[470px] md:h-[520px] lg:h-[535px] 
                      border-[12px] border-black/50 rounded-[40px] z-20">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                        w-24 sm:w-32 h-4 sm:h-6 bg-red rounded-b-2xl"></div>
          
          {/* Camera dot */}
          <div className="absolute top-2 right-1/4 w-2 h-2 rounded-full bg-black"></div>
          
          {/* Speaker */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 
                        w-16 sm:w-20 h-1 bg-black rounded-full"></div>
        </div>

        <motion.div
          ref={carouselRef}
          className="flex items-center z-10"
          animate={{ x: `-${(normalizedIndex * 100) / (isMobile ? 1 : 3)}%` }}
          transition={{ 
            ease: 'linear', 
            duration: 1,
            type: "tween"
          }}
        >
          {[...carouselItems, ...carouselItems].map((src, index) => (
            <div key={index} className="w-full md:w-1/3 h-auto flex-shrink-0 flex items-center justify-center p-4">
              <img 
                src={src} 
                alt={`Slide ${index}`} 
                className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[267px] 
                         h-[446px] sm:h-[450px] md:h-[500px] lg:h-[516px] 
                         object-cover rounded-[30px] shadow-lg relative z-0" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

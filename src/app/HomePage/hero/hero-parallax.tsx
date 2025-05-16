"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 60, damping: 20, bounce: 10 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]), 
    springConfig
  );
  // Adjust the opacity spring configuration
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]), // Changed from [0.2, 1] to [0.6, 1]
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-500, -150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] md:h-[200vh] py-4 md:py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-r from-[#e7e5e8]40 to-[#464444]/50"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="px-2 md:px-4"
      >
        <motion.div className="flex flex-col gap-10 md:gap-20">
          {/* First Row */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">Web and App Development</h3>
            <motion.div className="flex flex-row space-x-10 md:space-x-20 mb-10 md:mb-10 overflow-visible">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Second Row */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">AI ML Development</h3>
            <motion.div className="flex flex-row space-x-10 md:space-x-20 mb-10 md:mb-10 overflow-visible">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Third Row */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">Erp and Software Development</h3>
            {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 overflow-visible"> */}
            <motion.div className="flex flex-row space-x-10 md:space-x-20 mb-10 md:mb-10 overflow-visible">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-40 flex flex-col md:items-start items-center md:pl-20">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-black text-center md:text-left">
        Your Next <br /> WWW Is Here
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-black text-center md:text-left">
        Welcome to the future of IT Services
      </p>
    </div>
  );
};
export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-50 w-[20rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="250"
          width="250"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none"></div>
      {/* Changed opacity-80 to opacity-60 for hover state */}
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

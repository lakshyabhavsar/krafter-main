"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Section {
    title: string;
    content: string;
    image: string;
}

const AnimatedScrollSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const sections: Section[] = [
        {
            title: "Section One",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/images/section1.jpg"
        },
        {
            title: "Section Two",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "/images/section2.jpg"
        },
        {
            title: "Section Three",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "/images/section3.jpg"
        },
        {
            title: "Section Four",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/section4.jpg"
        }
    ];

    const SectionRow = ({ title, content, image, index }: Section & { index: number }) => {
        const opacity = useTransform(
            scrollYProgress,
            [(index - 0.5) * 0.25, index * 0.25, (index + 0.5) * 0.25],
            [0, 1, 0]
        );

        const y = useTransform(
            scrollYProgress,
            [(index - 0.5) * 0.25, index * 0.25, (index + 0.5) * 0.25],
            [50, 0, -50]
        );

        return (
            <motion.div
                style={{ opacity, y }}
                className="flex flex-col md:flex-row items-center justify-between gap-8 h-[600px] sticky top-0"
            >
                <div className="flex-1 px-6">
                    <motion.h2 
                        className="text-3xl font-bold mb-4 text-white"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-100"
                    >
                        {content}
                    </motion.p>
                </div>
                <motion.div
                    className="relative w-full md:w-[300px] h-[250px] flex-shrink-0"
                >
                    <Image 
                        src={image} 
                        alt={`Section ${index + 1}`}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className="w-full max-w-[1440px] mx-auto px-4 bg-blue-500">
            <div className="max-w-[1200px] mx-auto h-[2400px]">
                {sections.map((section, index) => (
                    <SectionRow
                        key={index}
                        {...section}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedScrollSection;
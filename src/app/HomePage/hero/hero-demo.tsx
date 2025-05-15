"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export function HeroSection() { 
  return (
    <div className="relative min-h-screen w-[full]">
      <div className="relative w-full space-y-0">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com", 
    thumbnail:
      "/images/home/canva.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/home/bg2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/home/bg3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/home/bg4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/images/home/bg1.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/images/home/bg2.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/images/home/bg3.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/images/home/bg4.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/home/bg1.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/home/bg2.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/home/bg3.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/images/home/bg4.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/images/home/bg1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/home/bg2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/home/bg4.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/home/bg2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/home/bg4.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/home/bg2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/home/bg4.png",
  },
];

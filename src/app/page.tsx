


import Overlay from "./HomePage/overlay";
import { HeroSection } from "./HomePage/hero/hero-demo";
import { SplineSceneBasic } from "./HomePage/Robot/robot-demo";
import TrustedBy from "./HomePage/trusted";
import FooterNav from "@/components/Footer/FooterNav";
import BannerGrid from "./HomePage/certificate/allBanner";
import { HeroDemo } from "./HomePage/spotlight/demo";
import InfiniteCarousel from "./about/component/mobile";
import PortfolioGrid from "./digital-marketing/portfolio/demo";
import { AnimatedBeamDemo } from "./digital-marketing/annimated-beam/demo";







export default function Home() {
  return (
    <>
      <HeroSection />
      <SplineSceneBasic />
      <AnimatedBeamDemo />

      <HeroDemo />
      <Overlay />
      <InfiniteCarousel />

      <div className="space-y-13 pb-0 bg-[#f2f3f4] mt-20">

        <BannerGrid />
        <TrustedBy />
        <PortfolioGrid />

        <div className="-mb-24">
          <FooterNav />
        </div>
      </div>
    </>
  );
}

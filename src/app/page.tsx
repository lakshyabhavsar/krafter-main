import Overlay from "../components/overlay";
import { HeroSection } from "./HomePage/hero/hero-demo";
import { RobotSection } from "./HomePage/robot/robot-demo";
import TrustedBy from "../components/trusted";
import FooterNav from "@/components/Footer/FooterNav";
import BannerGrid from "./HomePage/certificate/allBanner";
import { HeroDemo } from "./HomePage/spotlight/demo";
import InfiniteCarousel from "../components/mobile";
import PortfolioGrid from "./digital-marketing/portfolio/demo";
import { AnimatedBeamDemo } from "./digital-marketing/annimated-beam/demo";
import AboutSection from "./HomePage/about-section/about-section";
import ServicesSection from "./HomePage/services/services-section";
import { RevealImageListDemo } from "./HomePage/reveal-images/demo";



export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <RobotSection />
      <AboutSection />
      <ServicesSection />
      <RevealImageListDemo/>
      <HeroDemo />
      <AnimatedBeamDemo />

      <Overlay />
      <InfiniteCarousel />

      {/* <div className="space-y-13 pb-0 bg-[#f2f3f4] mt-20">
        <BannerGrid />
        <TrustedBy />
        <PortfolioGrid />
      </div> */}

      <div className="-mb-24">
          <FooterNav />
        </div>
    </>
  );
}

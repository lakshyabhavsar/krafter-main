import Overlay from "../components/overlay";
import { RobotSection } from "./HomePage/robot/robot-demo";
import FooterNav from "@/components/Footer/FooterNav";
import { HeroDemo } from "./HomePage/spotlight/demo";
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
      {/* <AnimatedBeamDemo /> */}
      <Overlay />

      {/* <div className="space-y-13 pb-0 bg-[#f2f3f4] mt-20">
        <BannerGrid />
        <TrustedBy />
      </div> */}

      <FooterNav />
    </>
  );
}

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
      <RobotSection />
      <AboutSection />
      <ServicesSection />
      <RevealImageListDemo/>
      <HeroDemo />
      <Overlay />
      <FooterNav />
    </>
  );
}

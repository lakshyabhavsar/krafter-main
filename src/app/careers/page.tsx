import FeatureCards from "../../components/card";
import DharmaERP from "../../components/dharma-erp";
import HeroSection from "../../components/hero";
import { ImageSection } from "../../components/img";
import MobileCarousel from "../../components/mobileCaraousel";
import Overlay from "../../components/overlay";
import VerticalMenu from "./vertical-menu";
import CareerSection from "./career/demo";
import EmailSubscription from "./email/demo";
import CareerSection2 from "./section2/demo";

export default function career() {
    return (
      <>
        <div className="space-y-24">
          
          <CareerSection/>
          <CareerSection2/>
          <EmailSubscription/>
          <DharmaERP/>
          
          <HeroSection/> 
          <MobileCarousel/>
          <FeatureCards/>
          <VerticalMenu/>
          <ImageSection/> 
          <Overlay/>
        </div>
      </>
    );
  }
  
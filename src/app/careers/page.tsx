import FeatureCards from "../HomePage/card";
import DharmaERP from "../HomePage/dharma-erp";
import HeroSection from "../HomePage/hero";
import { ImageSection } from "../HomePage/img";
import MobileCarousel from "../HomePage/mobileCaraousel";
import Overlay from "../HomePage/overlay";
import VerticalMenu from "../HomePage/vertical-menu";
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
  
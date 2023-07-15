import React from "react";
import HeroSection from "./Sections/HeroSection";
import RepairServices from "./Sections/RepairServices";
import Whycontactus from "./Sections/Whycontactus";
import Footer from "./Sections/Footer";
function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <HeroSection />
      <RepairServices />
      <Whycontactus />
    </div>
  );
}

export default HomePage;

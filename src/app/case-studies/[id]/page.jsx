import CaseStudiesDetail from "@/components/case-studies/deatils/case-studies-detail";
import HeroSection from "@/components/ui/hero-section";
import React from "react";

const CaseStudiesPage = () => {
  return (
    <>
      {/* <HeroSection
        tagText="Case STUDIES"
        whiteText="Engineered for Resilient"
        highlightText="Network Performance"
        description="Engineered for performance, uptime, and security—no matter the scale. Our network architecture ensures stability against threats, failures, and unexpected load."
        backgroundImage="/images/home/bg-hero.png"
      /> */}
      <CaseStudiesDetail />
    </>
  );
};

export default CaseStudiesPage;

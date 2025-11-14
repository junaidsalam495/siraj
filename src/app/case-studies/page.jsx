import CaseStudiesTabs from "@/components/case-studies/case-studies-tabs";
import ContactUs from "@/components/home/contact-us";
import HeroSection from "@/components/ui/hero-section";
import React from "react";

const CaseStudiesPage = () => {
  return (
    <>
      <HeroSection
        tagText="Case STUDIES"
        whiteText="Real Success, Real"
        highlightText="Results"
        description="Empowering brands through strategic digital innovation. See how our solutions drive measurable growth."
        backgroundImage="/images/home/bg-hero.png"
      />
      <CaseStudiesTabs />
      <ContactUs />
    </>
  );
};

export default CaseStudiesPage;

import AboutDrivingInnovation from "@/components/about/about-driving-innovation";
import AboutExperience from "@/components/about/about-experience";
import AboutExpertTeam from "@/components/about/about-expert-team";
import AboutProgress from "@/components/about/about-progress";
import AboutUnlockBuisness from "@/components/about/about-unlock-buisness";
import HeroSection from "@/components/ui/hero-section";

const AboutPage = () => {
  return (
    <>
      <HeroSection
        tagText="ABOUT US"
        whiteText="Get to Know Our"
        highlightText="Company Better."
        description="IT-focused innovation, industry expertise, and client-first values that help businesses grow smarter, faster, and safer."
        backgroundImage="/images/home/bg-hero.png"
      />
      <AboutProgress />
      <AboutUnlockBuisness />
      <AboutDrivingInnovation />
      <AboutExpertTeam />
      <AboutExperience />
    </>
  );
};

export default AboutPage;

import AboutUs from "@/components/home/about-us";
import BlogUs from "@/components/home/blog-us";
import ChooseUs from "@/components/home/choose-us";
import ContactUs from "@/components/home/contact-us";
import ExpertTeam from "@/components/home/expert-team";
import FaqUs from "@/components/home/faq-us";
import HowItsWork from "@/components/home/how-its-work";
import ProjectUs from "@/components/home/project-us";
import ServiceUs from "@/components/home/service-us";
import TeamUs from "@/components/home/team-us";
import TestimonialsUs from "@/components/home/testimonials-us";
import HeroSection from "@/components/ui/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection
        tagText="BEST IT SOLUTION SERVICE"
        whiteText="Modern Your Business with"
        highlightText="IT Service."
        description="IT solutions refer to a broad range of services and technologies designed to address specific business needs, streamline operations, and drive growth."
        backgroundImage="/images/home/bg-hero.png"
        isBtn={true}
      />
      <AboutUs />
      <ServiceUs />
      <ChooseUs />
      <HowItsWork />
      <ProjectUs />
      <TeamUs />
      <ExpertTeam />
      <TestimonialsUs />
      <ContactUs />
      <FaqUs />
      <BlogUs />
    </>
  );
}

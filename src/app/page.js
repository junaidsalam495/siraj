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
      <HeroSection />
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

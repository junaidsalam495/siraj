import ContactDetail from "@/components/contact/contact-detail";
import ContactMap from "@/components/contact/contact-map";
import HeroSection from "@/components/ui/hero-section";

const ContactPage = () => {
  return (
    <>
      <HeroSection
        tagText="CONTACT US"
        whiteText="Get in Touch With Our Team of"
        highlightText="IT Experts"
        description="Were here to help you with inquiries, support, and project discussions. Connect with us anytime to explore the right tech solutions for your business."
        backgroundImage="/images/home/bg-hero.png"
      />
      <ContactDetail />
      <ContactMap />
    </>
  );
};

export default ContactPage;

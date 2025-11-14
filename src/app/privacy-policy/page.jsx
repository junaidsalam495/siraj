import PrivacyPolicyMain from "@/components/privacy-policy/privacy-policy-main";
import HeroSection from "@/components/ui/hero-section";

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeroSection
        tagText="PRIVACY POLICY"
        whiteText="Protecting Your Data,"
        highlightText="Securing Your Trust"
        description="Your privacy matters to us. We responsibly collect, store, and process information to ensure a safe and transparent digital experience for every user."
        backgroundImage="/images/home/bg-hero.png"
      />
      <PrivacyPolicyMain />
    </>
  );
};

export default PrivacyPolicyPage;

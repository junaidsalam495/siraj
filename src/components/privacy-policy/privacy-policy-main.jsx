import PrivacyPolicyTabs from "./privacy-policy-tabs";
import PrivacyPolicyContent from "./privacy-policy-content";

const PrivacyPolicyMain = () => {
  return (
    <section className="relative w-full py-14 md:py-20 mx-auto px-4 md:px-20">
      <div className="grid md:grid-cols-12 gap-4">
        <PrivacyPolicyTabs />
        <PrivacyPolicyContent />
      </div>
    </section>
  );
};

export default PrivacyPolicyMain;

import { privacyPolicy } from "@/mock/privacy-policy";
import * as Icons from "lucide-react";
import { ParagraphText, SubHeading } from "../ui/text/heading-text";

const PrivacyPolicyContent = () => {
  return (
    <>
      <div className="flex-1 border border-white rounded-xl md:p-8 p-4 space-y-12 md:col-span-8">
        {privacyPolicy?.map((section) => {
          const Icon = Icons[section?.icon];
          return (
            <div key={section?.id} id={section?.id}>
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-yellow-500" />
                <SubHeading text={section?.title} />
              </div>
              <div className="space-y-4 pl-4 text-gray-300">
                {section?.content?.map((txt, i) => (
                  <ParagraphText key={i} text={txt} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PrivacyPolicyContent;

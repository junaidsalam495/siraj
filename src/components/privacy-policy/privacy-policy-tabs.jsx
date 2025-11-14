"use client";
import * as Icons from "lucide-react";
import { ParagraphText, SubHeading } from "../ui/text/heading-text";
import { privacyPolicy } from "@/mock/privacy-policy";
import { useState } from "react";

const PrivacyPolicyTabs = () => {
  const [active, setActive] = useState("introduction");

  return (
    <>
      <ul className="space-y-3 p-4 rounded-lg service-card md:h-1/4 md:col-span-3">
        <SubHeading text="Quick Navigation" />
        {privacyPolicy?.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => setActive(sec.id)}
              className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg transition
                ${active === sec.id && "bg-primary"}`}
            >
              {(() => {
                const Icon = Icons[sec.icon];
                return <Icon className="w-5 h-5" />;
              })()}
              <ParagraphText text={sec.title} className="text-white" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PrivacyPolicyTabs;

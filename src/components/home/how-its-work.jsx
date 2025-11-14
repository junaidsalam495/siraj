import React from "react";
import UnderlineTitle from "../ui/text/underline-title";
import { howItsWorkSteps } from "@/mock/how-its-work";
import InfoCard from "../ui/card/info-card";
import { SectionHeading } from "../ui/text/heading-text";

const HowItsWork = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12 max-w-md mx-auto">
          <UnderlineTitle text="WORKING PROCESS" />
          <SectionHeading whiteText="How To Work" highlightText="It" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {howItsWorkSteps?.map((service, index) => (
            <InfoCard
              key={index}
              title={service?.title}
              icon={service?.icon}
              description={service?.description}
              isButton={false}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItsWork;

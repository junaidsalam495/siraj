import React from "react";
import { services } from "@/mock/service";
import UnderlineTitle from "../ui/text/underline-title";
import InfoCard from "../ui/card/info-card";
import { SectionHeading } from "../ui/text/heading-text";

const ServiceUs = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12 max-w-xl mx-auto">
          <UnderlineTitle text="OUR SERVICES" />
          <SectionHeading
            whiteText="Innovative IT Services Tailored"
            highlightText="For Your Success."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {services?.map((service, index) => (
            <InfoCard
              key={index}
              title={service?.title}
              icon={service?.icon}
              description={service?.description}
              isButton={true}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceUs;

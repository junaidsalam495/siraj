import React from "react";
import { ButtonArrow } from "../ui/button";
import { features } from "@/mock/about-us";
import Image from "next/image";
import {
  ParagraphText,
  SectionHeading,
  SubHeading,
} from "../ui/text/heading-text";

const AboutDrivingInnovation = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 md:px-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 ">
        <div className="space-y-4">
          <SectionHeading
            whiteText="Driving Innovation: Our Mission Vision at Eitech"
            highlightText=""
            align="start"
          />
          <ParagraphText text="At the of innovation, our cutting-edge IT solutions are designed transform your business ETech operations." />
          <div className="space-y-5">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 md:gap-5 items-start service-card p-4 !border-0"
              >
                <Image
                  className="w-14 h-[55px] md:w-20 md:h-[74px] flex-shrink-0"
                  alt={feature.title}
                  src={feature.icon}
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <div className="space-y-1 md:space-y-2">
                  <SubHeading text={feature.title} />
                  <ParagraphText text={feature.description} />
                </div>
              </div>
            ))}
          </div>
          <ButtonArrow text="See How We Can Help" />
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          <Image
            alt="Driving Image"
            src="/images/about/driving1.png"
            width={400}
            height={400}
            className="rounded-lg w-full h-64 object-cover md:col-span-12"
            loading="lazy"
          />
          <Image
            alt="Driving Image"
            src="/images/about/driving2.png"
            width={400}
            height={400}
            className="rounded-lg w-full object-cover md:col-span-6"
            loading="lazy"
          />
          <Image
            alt="Driving Image"
            src="/images/about/driving3.jpg"
            width={400}
            height={400}
            className="rounded-lg w-full object-cover md:col-span-6"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDrivingInnovation;

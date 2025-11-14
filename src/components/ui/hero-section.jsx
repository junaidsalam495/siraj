import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { ParagraphText, SectionHeading } from "./text/heading-text";

const HeroSection = () => {
  const buttons = [{ text: "Discover More" }, { text: "Let's Talk" }];

  return (
    <section
      className="relative py-20 mx-auto px-4 md:px-20 flex items-center justify-start min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/bg-hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-[700px] px-4 space-y-5">
        <div className="text-primary text-sm md:text-base lg:text-xl">
          BEST IT SOLUTION SERVICE
        </div>
        <SectionHeading
          whiteText="Modern Your Business with"
          highlightText="It Service."
          className="font-bold text-white text-3xl md:text-6xl"
          align="start"
        />
        <ParagraphText
          text="IT solutions refer to a broad range of services and technologies
          designed to address specific business needs, streamline operations,
          and drive growth."
          className="text-white text-lg"
        />

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className="flex items-center justify-center w-full sm:w-auto px-6 md:px-8 h-[45px] md:h-[54px] text-[15px] md:text-[17px]"
            >
              {button.text}
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

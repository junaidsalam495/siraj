import React from "react";
import { ButtonArrow } from "./button";
import { ParagraphText, SectionHeading } from "./text/heading-text";

const buttons = [{ text: "Get Started" }, { text: "Learn More" }];

const HeroSection = ({
  tagText,
  whiteText,
  highlightText,
  description,
  backgroundImage,
  isBtn = false,
}) => {
  return (
    <section
      className="relative py-20 mx-auto px-4 md:px-20 flex items-center justify-start min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-[700px] px-4 space-y-5">
        <div className="text-primary text-sm md:text-base lg:text-xl">
          {tagText}
        </div>
        <SectionHeading
          whiteText={whiteText}
          highlightText={highlightText}
          className="font-bold text-white text-3xl md:text-6xl"
          align="start"
        />
        <ParagraphText text={description} className="text-white text-lg" />
        {isBtn && (
          <>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {buttons?.map((button, index) => (
                <ButtonArrow key={index} text={button.text} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

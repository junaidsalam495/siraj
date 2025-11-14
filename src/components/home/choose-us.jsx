import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon, Phone } from "lucide-react";
import { progressData } from "@/mock/choose-us";
import ProgressBar from "../ui/progress-bar";
import UnderlineTitle from "../ui/text/underline-title";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <>
      <section className="relative w-full py-14 md:py-20 mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          <div className="space-y-6 md:space-y-8">
            <UnderlineTitle text="WHY CHOOSE US" />

            <SectionHeading
              whiteText="Elevate Growth With Our IT Solutions"
              highlightText="For Success."
              align="start"
            />

            <ParagraphText text="Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering" />

            <div className="space-y-4 md:space-y-5">
              {progressData?.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item?.label}
                  percentage={item?.percentage}
                />
              ))}
            </div>

            <div className="flex md:flex-row flex-col items-start md:items-center gap-6 pt-2 md:pt-4">
              <Button className="h-[50px] md:h-[54px] px-6 md:px-8">
                <span className="font-medium text-white text-[16px] md:text-[17px]">
                  Learn More
                </span>
                <ArrowRightIcon className="ml-2 w-3.5 h-3.5" />
              </Button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary flex justify-center items-center rounded-full">
                  <Phone />
                </div>
                <div className="space-y-1">
                  <ParagraphText text="Call Us Any Time" />
                  <ParagraphText
                    className="font-semibold text-white text-lg"
                    text="+088 (000) 000-00-00"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full">

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] 
              rounded-full border-2 border-dashed border-primary" />

            <div className="absolute top-16 sm:top-20 right-0 w-[250px] h-[240px] sm:w-[320px] sm:h-[300px] md:w-[400px] md:h-[380px] rounded-[5px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                alt="IT Solutions"
                src="/images/choose/choose1.png"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>

            <div className="absolute text-center top-6 sm:top-10 left-0 p-3 sm:p-4 bg-primary rounded-tl-md rounded-tr-md rounded-bl-md w-[130px] sm:w-auto">
              <div className="font-semibold text-white text-lg sm:text-xl">12K +</div>
              <div className="text-white text-lg sm:text-xl">Active Clients</div>

              <div className="absolute bottom-0 right-0 translate-y-full w-0 h-0 border-t-[10px] sm:border-t-[12px] border-l-[12px] border-t-primary border-l-transparent"></div>
            </div>
            <div className="absolute top-[120px] sm:top-[140px] md:top-[148px] left-0 
              w-[200px] h-[260px] sm:w-[260px] sm:h-[310px] md:w-[310px] md:h-[350px]
              rounded-[20px_250px_20px_20px] border-t-[8px] sm:border-t-[10px] 
              border-r-[8px] sm:border-r-[10px] border-[#edf0fa] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                alt="Customer service"
                src="/images/choose/choose2.png"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-5 
              w-[200px] sm:w-[240px] md:w-[272px] h-[70px] sm:h-[75px] md:h-[79px]
              bg-primary rounded-[10px] border-4 border-white flex justify-center items-center overflow-hidden">
              <span className="font-medium text-white text-lg sm:text-xl">
                24/7 Customer Service
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChooseUs;

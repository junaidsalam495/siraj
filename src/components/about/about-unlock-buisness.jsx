import { ButtonArrow } from "../ui/button";
import { Check } from "lucide-react";
import { progressCircleData } from "@/mock/choose-us";
import { ProgressBarCircle } from "../ui/progress-bar";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";

const AboutUnlockBuisness = () => {
  return (
    <>
      <section
        className="relative py-16 md:py-20 px-4 md:px-20 min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url('/images/about/unlock-bg.jpg')` }}
      >
        <div className="absolute inset-0 unlock-bg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="relative flex md:flex-row flex-col md:items-start items-center gap-5">
            <Image
              className="rounded-lg object-cover w-[80%] sm:w-[320px] md:w-[380px]"
              alt="IT Solutions"
              src="/images/about/unlock1.png"
              width={400}
              height={400}
              loading="lazy"
            />
            <div className="space-y-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-lg object-cover w-[70%] sm:w-[260px] md:w-[310px]"
                alt="Customer service"
                src="/images/about/unlock2.png"
                width={400}
                height={400}
                loading="lazy"
              />
              <Image
                className="rounded-lg object-cover w-[70%] sm:w-[260px] md:w-[310px]"
                alt="Customer service"
                src="/images/about/unlock3.png"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div
              className="bg-white p-4 rounded-lg absolute top-44 left-44 
              w-72 gap-4 items-start shadow-md md:flex hidden"
            >
              <span className="bg-primary p-1 rounded-full flex justify-center items-center">
                <Check className="text-white w-4 h-4" />
              </span>
              <ParagraphText
                text="With 15+ years of experience IT solution help community."
                className="text-black font-semibold"
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-4 mt-20 md:mt-0">
            <SectionHeading
              whiteText="Unlock Business Potential with Tailored IT Services"
              highlightText=""
              align="start"
            />
            <ParagraphText
              text="At Eitech, we understand that every business is unique, which is why we offer customized IT solutions designed to meet each need."
              className="text-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {progressCircleData?.map((item, index) => (
                <ProgressBarCircle
                  key={index}
                  label={item.label}
                  sub={item.sub}
                  percentage={item.percentage}
                />
              ))}
            </div>
            <div className="bg-white border-8 border-l-primary p-4 border-t-0 border-b-0 border-r-0 rounded-lg">
              <ParagraphText
                text="“The right IT solutions don't just support your business—they transform it, at Eitech, we believe.”"
                className="text-black"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <ButtonArrow text="See How We Can Help" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUnlockBuisness;

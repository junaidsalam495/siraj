import { ButtonArrow } from "../ui/button";
import { progressData } from "@/mock/choose-us";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";
import { ProgressBar } from "../ui/progress-bar";

const AboutProgress = () => {
  return (
    <>
      <section className="relative w-full py-14 md:py-20 px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              whiteText="End-to-End IT Solutions for Growing Businesses"
              highlightText=""
              align="start"
            />

            <ParagraphText
              text="We provide comprehensive, end-to-end IT solutions designed to support businesses at every stage of growth."
              className="text-white"
            />
            <div className="space-y-4 bg-white/10 backdrop-blur-md md:p-6 p-3 rounded-lg">
              {progressData?.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item.label}
                  percentage={item.percentage}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <ButtonArrow text="Discover Our Solutions" />
            </div>
          </div>
          <div className="relative h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px] w-full flex justify-center">
            <Image
              className="border-2 border-white rounded-lg object-cover absolute right-0 top-10 sm:top-14 w-[220px] sm:w-[260px] md:w-[330px] lg:w-[380px]"
              alt="IT Solutions"
              src="/images/about/progress2.png"
              width={400}
              height={400}
              loading="lazy"
            />
            <Image
              className="border-2 border-white rounded-lg object-cover absolute bottom-10 left-0 sm:left-4 w-[200px] sm:w-[240px] md:w-[300px] lg:w-[340px]"
              alt="Customer service"
              src="/images/about/progress1.png"
              width={360}
              height={360}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProgress;

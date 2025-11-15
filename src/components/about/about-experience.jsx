import { Quote, StarIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";
import { testimonials } from "@/mock/testimonials-us";

const AboutExperience = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 md:px-10 lg:px-20 mx-auto">
      <div className="max-w-lg mx-auto my-5">
        <SectionHeading
          whiteText="Experience the Difference Through Our Clients' Eyes"
          highlightText=""
          align="center"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="relative space-y-4 md:col-span-5">
          <Image
            alt="Client icons"
            src="/images/about/experience.png"
            width={400}
            height={400}
            className="rounded-lg w-full h-80 object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-10 md:col-span-5">
          <div className="relative bg-primary p-4 rounded-lg flex flex-col justify-center space-y-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    className={`fill-white text-primary`}
                  />
                ))}
              </div>
              <Quote size={28} className="text-white" />
            </div>
            <ParagraphText
              className="text-white"
              text="Partnering with ETech has transformed our IT Solution Their tailored solutions help streamline our"
            />
            <ParagraphText
              className="text-white"
              text="operations, improve cybersecurity, and drive efficiency across the board. We've experienced
                fewer disruptions, faster an.”"
            />
            <div
              class="w-0 h-0 translate-y-12 rotate-90 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent 
            border-l-[30px] border-l-primary"
            />
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/testimonials/men1.jpg"
              className="rounded-full"
              alt="Ben Stokes"
              width={60}
              height={60}
              loading="lazy"
            />
            <div>
              <div className="font-medium text-white text-xl">Ben Stokes</div>
              <ParagraphText text="Owner Taxfirm" />
            </div>
          </div>
        </div>
        <div className="space-y-4 md:col-span-2 md:block hidden">
          {testimonials?.map((testimonial, index) => (
            <Image
              key={index}
              src={testimonial?.image}
              className="rounded-full"
              alt="Ben Stokes"
              width={60}
              height={60}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;

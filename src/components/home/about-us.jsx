import { Play } from "lucide-react";
import {  ButtonArrow } from "../ui/button";
import { features } from "@/mock/about-us";
import Image from "next/image";
import UnderlineTitle from "../ui/text/underline-title";
import {
  ParagraphText,
  SectionHeading,
  SubHeading,
} from "../ui/text/heading-text";

const AboutUs = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 md:px-10 lg:px-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-6 md:space-y-8">
          <UnderlineTitle text="ABOUT US" />
          <SectionHeading
            whiteText="Boost Business with Our Innovative"
            highlightText="IT Solutions"
            align="start"
          />

          <ParagraphText text="Innovating and empowering businesses with tailored solutions for success and growth. Empowering businesses to create meaningful innovation." />

          <div className="space-y-5">
            {features?.map((feature, index) => (
              <div key={index} className="flex gap-4 md:gap-5 items-start">
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

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <ButtonArrow text="Learn More" />
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary p-1.5">
                <div className="w-full h-full rounded-full border border-primary bg-[url(/images/about/men.jpg)] bg-cover bg-center" />
              </div>

              <div className="space-y-1">
                <SubHeading text="Adam Smith" />
                <ParagraphText text="CEO, ITZone" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
            <Image
              alt="Client icons"
              src="/images/about/about1.jpg"
              width={400}
              height={400}
              className="rounded-lg w-full sm:w-[60%] object-cover"
              loading="lazy"
            />

            <div className="flex flex-col items-center justify-center border-4 border-primary rounded-lg w-full sm:w-[40%] h-28 md:h-32">
              <h2 className="text-3xl md:text-4xl font-bold">225+</h2>
              <ParagraphText
                className="text-white text-nowrap"
                align="center"
                text="Years of Experience"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-primary rounded-md w-full sm:w-64 h-28 md:h-32">
            <div className="flex">
              <Image
                src="/images/testimonials/men1.jpg"
                alt="Client icons"
                className="rounded-full -ml-2"
                width={40}
                height={40}
                loading="lazy"
              />
              <Image
                src="/images/testimonials/men2.jpg"
                alt="Client icons"
                className="rounded-full -ml-2"
                width={40}
                height={40}
                loading="lazy"
              />
              <Image
                src="/images/testimonials/men3.jpg"
                alt="Client icons"
                className="rounded-full -ml-2"
                width={40}
                height={40}
                loading="lazy"
              />
            </div>

            <ParagraphText
              className="text-white text-lg md:text-xl mt-1"
              text="120K Satisfied Clients"
            />
          </div>

          <Image
            alt="Client icons"
            src="/images/about/about2.png"
            width={360}
            height={360}
            className="absolute bottom-0 right-0 rounded-lg hidden md:block"
            loading="lazy"
          />

          <div className="w-16 h-16 md:w-24 md:h-24 bg-primary rounded-full justify-center items-center absolute top-32 right-72 hidden md:flex">
            <Play size={28} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

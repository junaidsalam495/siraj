import { testimonials } from "@/mock/testimonials-us";
import React from "react";
import TestimonialsCard from "../ui/card/testimonials-card";
import { dots } from "@/mock/project-us";
import BottomDots from "../ui/bottom-dots";
import UnderlineTitle from "../ui/text/underline-title";
import { SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";

const TestimonialsUs = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Background"
          src="/images/testimonials/bg-testimonials.png"
          width={800}
          height={800}
          loading="lazy"
        />
        <div className="flex flex-col items-center max-w-md mx-auto">
          <UnderlineTitle text="TESTIMONIALS" />
          <SectionHeading
            whiteText="What Client Say"
            highlightText="About us"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {testimonials?.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              text={testimonial?.text}
              image={testimonial?.image}
              role={testimonial?.role}
              name={testimonial?.name}
              rating={testimonial?.rating}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 relative z-10">
          {dots?.map((dot, index) => (
            <BottomDots key={index} active={dot?.active} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsUs;

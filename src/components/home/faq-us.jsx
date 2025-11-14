import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { faqItems } from "@/mock/faq-us";
import Image from "next/image";
import UnderlineTitle from "../ui/text/underline-title";
import AccordionRender from "../ui/accordion/accordion-render";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";

const FaqUs = () => {
  return (
    <section className="relative w-full py-20 mx-auto px-4 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <UnderlineTitle text="FREQUENTLY ASK QUESTION" />
          <SectionHeading
            whiteText="Have Questions in Your Mind?"
            highlightText="Get the Answers Now"
            align="start"
          />

          <Accordion
            type="single"
            collapsible
            defaultValue="item-2"
            className="space-y-4"
          >
            {faqItems?.map((item) => (
              <AccordionRender
                key={item?.id}
                id={item?.id}
                question={item?.question}
                answer={item?.answer}
              />
            ))}
          </Accordion>
        </div>

        <div className="relative h-full">
          <Image
            alt="Client icons"
            src="/images/faq/faq1.jpg"
            width={400}
            height={400}
            className="rounded-lg md:absolute right-20 top-0 z-10"
            loading="lazy"
          />
          <Image
            alt="Client icons"
            src="/images/faq/faq2.png"
            width={500}
            height={500}
            className="rounded-lg md:block hidden absolute bottom-0 left-0"
            loading="lazy"
          />
          <div className="md:flex flex-col items-center justify-center bg-primary rounded-lg w-48 h-40 absolute top-8 left-8 z-10 hidden">
            <h2 className="text-4xl font-bold">55</h2>
            <ParagraphText
              className="text-white text-nowrap"
              align="center"
              text="Years of Experience"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqUs;

import React from "react";
import ContactForm from "../ui/form/contact-form";
import UnderlineTitle from "../ui/text/underline-title";
import { Phone } from "lucide-react";
import Image from "next/image";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";

const ContactUs = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <UnderlineTitle text="GET IN TOUCH" />
            <SectionHeading
              whiteText="Let's Talk About Business"
              highlightText="Solutions With Us"
              align="left"
            />
            <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
              <Image
                src="/images/contact/contact.png"
                alt="Contact"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                <ParagraphText text="We&#39;re here to listen! Whether you have questions, feedback, or just want to say hello, feel free to reach out." />
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
          </div>
          <ContactForm />
        </div>
        <Image
          src="/images/gradient-circle.png"
          width={600}
          height={600}
          alt="Gradient"
          className="absolute right-0 bottom-0"
        />
      </section>
    </>
  );
};

export default ContactUs;

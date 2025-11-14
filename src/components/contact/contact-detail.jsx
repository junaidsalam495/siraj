import ContactForm from "../ui/form/contact-form";
import { ParagraphText, SectionHeading } from "../ui/text/heading-text";
import { contactInfo } from "@/mock/contact-us";

const ContactDetail = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <SectionHeading
              whiteText="solutions are for people, Contact Our Office."
              highlightText=""
              align="left"
            />
            <div className="grid md:grid-cols-2 gap-10 py-10">
              {contactInfo?.map((item) => {
                const Icon = item?.icon;
                return (
                  <div key={item?.id} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary flex justify-center items-center rounded-full">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <ParagraphText text={item?.title} />
                      {item?.lines.map((line, idx) => (
                        <ParagraphText
                          key={idx}
                          text={line}
                          className="font-semibold text-white text-lg"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactDetail;

import { CheckIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { caseStudiesDetail } from "@/mock/case-studies";
import { ParagraphText, SubHeading } from "@/components/ui/text/heading-text";
import Image from "next/image";

const CaseStudiesDetail = () => {
  return (
    <div className="w-full bg-black min-h-screen">
      {/* <button className="fixed top-4 left-4 md:top-6 md:left-6 z-40 p-2 md:p-3 bg-[#ffffff0a] hover:bg-[#ffffff1a] border border-[#ffffff1a] rounded-full transition-all">
        <ArrowLeftIcon className="w-5 h-5 text-white" />
      </button>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-[#ffffff05]">
        <img
          src={caseStudiesDetail?.cover_image}
          alt={caseStudiesDetail?.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div> */}

      <SubHeading text="Building Resilient Networks" />
      <ParagraphText
        text="In today’s connected world, network resilience is for uninterrupted business
        operations. Our approach focuses on designing, implementing, and maintaining robust networks that can withstand disruptions whether from cyberattacks, hardware failures."
      />
      <hr className="h-1.6 w-full bg-white" />
      <div className="grid md:grid-cols-4">
        <div>
          <SubHeading text="Category" />
          <ParagraphText text="IT Service & Technology" />
        </div>
        <div>
          <SubHeading text="Category" />
          <ParagraphText text="IT Service & Technology" />
        </div>
        <div>
          <SubHeading text="Category" />
          <ParagraphText text="IT Service & Technology" />
        </div>
        <div>
          <SubHeading text="Category" />
          <ParagraphText text="IT Service & Technology" />
        </div>
      </div>
      <hr className="h-1.6 w-full bg-white" />
      <Image
        src="/images/case-studies/case-detail-bg.png"
        width={600}
        height={600}
        alt="Detail Image"
      />
      <SubHeading text="Ready Networks for Seamless Connectivity" />
      <ParagraphText
        text="Our resilient network solutions are designed to provide businesses with the
        reliability & flexibility needed to thrive in a digital-first environment. We integrate
        redundancy, load balancing, real-time monitoring tools to minimize downtime and maximize performance."
      />
      <ParagraphText
        text="Whether you're managing multiple locations or cloud environments, our
        solutions keep your data flowing smoothly and securely across your entire infrastructure minimizing."
      />
      <div className="bg-white border-8 border-l-primary p-4 border-t-0 border-b-0 border-r-0 rounded-lg">
        <ParagraphText
          text="We build networks anticipate challenges & respond instantly. Through intelligent"
          className="text-black"
        />
        <ParagraphText
          text="monitoring, automated recovery processes, & secure backup systems, our resilient"
          className="text-black"
        />
        <ParagraphText
          text="networks are prepared for the unexpected. From network redundancy to disaster."
          className="text-black"
        />
      </div>
      <hr className="h-1.6 w-full bg-white" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="[font-family:'Barlow',Helvetica] font-semibold text-[#cda924] text-xs md:text-sm px-3 py-1 bg-[#cda92420] rounded-full">
              {caseStudiesDetail?.category}
            </span>
            <span className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-xs md:text-sm">
              {caseStudiesDetail?.timeline}
            </span>
          </div>

          <h1 className="[font-family:'Barlow',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            {caseStudiesDetail?.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mb-8 pb-8 border-b border-[#ffffff1a]">
            <div className="flex items-center gap-4">
              {caseStudiesDetail?.client_image && (
                <img
                  src={caseStudiesDetail?.client_image}
                  alt={caseStudiesDetail?.client_name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#cda924]"
                  loading="lazy"
                />
              )}
              <div>
                <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-xs md:text-sm">
                  Client
                </p>
                <p className="[font-family:'Barlow',Helvetica] font-bold text-white text-base md:text-lg">
                  {caseStudiesDetail?.client_name}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {caseStudiesDetail?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="[font-family:'Nunito',Helvetica] font-normal text-xs px-3 py-1 bg-[#cda92420] text-[#cda924] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-base md:text-lg leading-[1.8] mb-8">
              {caseStudiesDetail?.full_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-[#ffffff1a]">
            <div>
              <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-xl md:text-2xl mb-4">
                Challenge
              </h3>
              <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-base leading-[1.8]">
                {caseStudiesDetail?.challenge}
              </p>
            </div>
            <div>
              <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-xl md:text-2xl mb-4">
                Solution
              </h3>
              <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-base leading-[1.8]">
                {caseStudiesDetail?.solution}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-xl md:text-2xl mb-6">
              Key Results & Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudiesDetail?.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff05] border border-[#ffffff1a] rounded-[10px] p-4 md:p-6 text-center"
                >
                  <div className="[font-family:'Barlow',Helvetica] font-bold text-white text-2xl md:text-3xl text-[#cda924] mb-2">
                    {result.value}
                  </div>
                  <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm md:text-base">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {caseStudiesDetail?.images &&
            caseStudiesDetail?.images.length > 0 && (
              <div className="mb-12 pb-12 border-b border-[#ffffff1a]">
                <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-xl md:text-2xl mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {caseStudiesDetail?.images.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-[10px] overflow-hidden bg-[#ffffff05] h-[250px] md:h-[300px]"
                    >
                      <img
                        src={image}
                        alt={`${caseStudiesDetail?.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {caseStudiesDetail?.testimonial && (
            <div className="bg-[#cda92420] border border-[#cda924] rounded-[10px] p-6 md:p-8 mb-12">
              <p className="[font-family:'Nunito',Helvetica] font-normal text-white text-base md:text-lg leading-[1.8] mb-6 italic">
                &quot;{caseStudiesDetail?.testimonial}&quot;
              </p>
              <div className="flex items-center gap-4">
                {caseStudiesDetail?.testimonial_image && (
                  <img
                    src={caseStudiesDetail?.testimonial_image}
                    alt={caseStudiesDetail?.testimonial_author}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <p className="[font-family:'Barlow',Helvetica] font-bold text-white">
                    {caseStudiesDetail?.testimonial_author}
                  </p>
                  <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm">
                    {caseStudiesDetail?.testimonial_role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <Card className="bg-[#ffffff05] border border-[#ffffff1a] rounded-[10px]">
              <CardContent className="p-6 md:p-8">
                <h4 className="[font-family:'Barlow',Helvetica] font-bold text-white text-lg mb-4">
                  Quick Info
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm mb-1">
                      Category
                    </p>
                    <p className="[font-family:'Barlow',Helvetica] font-bold text-white">
                      {caseStudiesDetail?.category}
                    </p>
                  </div>

                  <div>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm mb-1">
                      Duration
                    </p>
                    <p className="[font-family:'Barlow',Helvetica] font-bold text-white">
                      {caseStudiesDetail?.timeline}
                    </p>
                  </div>

                  <div>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm mb-1">
                      Client
                    </p>
                    <p className="[font-family:'Barlow',Helvetica] font-bold text-white">
                      {caseStudiesDetail?.client_name}
                    </p>
                  </div>

                  <div>
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudiesDetail?.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="[font-family:'Nunito',Helvetica] font-normal text-xs px-2 py-1 bg-[#cda92420] text-[#cda924] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#cda924] rounded-[10px]">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <h4 className="[font-family:'Barlow',Helvetica] font-bold text-black text-lg">
                    Interested in Similar Project?
                  </h4>
                  <p className="[font-family:'Nunito',Helvetica] font-normal text-black text-sm leading-relaxed">
                    Let&apos;s discuss how we can help your business achieve
                    similar results.
                  </p>
                  <Button className="w-full bg-black hover:bg-[#ffffff1a] text-white rounded-[5px] [font-family:'Nunito',Helvetica] font-bold">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#ffffff05] border border-[#ffffff1a] rounded-[10px]">
              <CardContent className="p-6 md:p-8">
                <h4 className="[font-family:'Barlow',Helvetica] font-bold text-white text-lg mb-4">
                  Key Highlights
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-[#cda924] flex-shrink-0 mt-0.5" />
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm">
                      Results-driven approach
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-[#cda924] flex-shrink-0 mt-0.5" />
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm">
                      Expert team & technology
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-[#cda924] flex-shrink-0 mt-0.5" />
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm">
                      Proven track record
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-[#cda924] flex-shrink-0 mt-0.5" />
                    <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] text-sm">
                      Timely delivery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-24 py-12 md:py-16 lg:py-20 border-t border-[#ffffff1a]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-2xl md:text-3xl mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="[font-family:'Nunito',Helvetica] font-normal text-[#afafaf] mb-6">
              Let&apos;s create your success story together
            </p>
            <Button className="bg-[#cda924] hover:bg-[#b8961f] text-black rounded-[5px] [font-family:'Nunito',Helvetica] font-bold">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesDetail;

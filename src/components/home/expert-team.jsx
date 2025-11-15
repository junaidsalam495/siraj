import { teamMembers } from "@/mock/team-us";
import React from "react";
import UnderlineTitle from "../ui/text/underline-title";
import { SectionHeading } from "../ui/text/heading-text";
import Image from "next/image";
import { ExpertTeamCard } from "../ui/card/expert-team-card";

const ExpertTeam = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12 mx-auto">
          <UnderlineTitle text="OUR EXPERT TEAM" />
          <SectionHeading
            whiteText="We have world expert"
            highlightText="team"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] max-w-[1140px] mx-auto">
          {teamMembers?.map((member, index) => (
            <ExpertTeamCard
              key={index}
              image={member?.image}
              name={member?.name}
              role={member?.role}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-end">
        <Image
          src="/images/team/banner.png"
          className="flex"
          alt="Banner Image"
          width={1200}
          height={200}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ExpertTeam;

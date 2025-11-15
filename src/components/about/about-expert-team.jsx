import { aboutExpertTeam } from "@/mock/team-us";
import React from "react";
import { AboutExpertTeamCard } from "../ui/card/expert-team-card";
import { SectionHeading } from "../ui/text/heading-text";

const AboutExpertTeam = () => {
  return (
    <>
      <section
        className="relative py-20 mx-auto px-4 md:px-20 min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/about/expert-bg.png')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <SectionHeading whiteText="Meet Our Expert Team" highlightText="" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {aboutExpertTeam?.map((member, index) => (
            <AboutExpertTeamCard
              key={index}
              image={member?.image}
              name={member?.name}
              role={member?.role}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutExpertTeam;

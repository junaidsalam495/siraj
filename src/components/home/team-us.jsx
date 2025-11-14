import React from "react";
import TeamCard from "../ui/card/team-card";
import { teams } from "@/mock/team-us";
import Image from "next/image";

const TeamUs = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-40">
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Background"
          src="/images/team/team.png"
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {teams?.map((stat, index) => (
            <TeamCard
              key={index}
              label={stat?.label}
              value={stat?.value}
              icon={stat?.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamUs;

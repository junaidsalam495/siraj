import React from "react";
import UnderlineTitle from "../ui/text/underline-title";
import ProjectCard from "../ui/card/project-card";
import { dots, projects } from "@/mock/project-us";
import BottomDots from "../ui/bottom-dots";
import { SectionHeading } from "../ui/text/heading-text";

const ProjectUs = () => {
  return (
    <>
      <section className="relative w-full py-20 mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center max-w-md mx-auto">
          <UnderlineTitle text="PORTFOLIO" />
          <SectionHeading
            whiteText="Explore Our Recent"
            highlightText="Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-10">
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              title1={project?.title1}
              title2={project?.title2}
              backgroundImage={project?.backgroundImage}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          {dots?.map((dot, index) => (
            <BottomDots key={index} active={dot?.active} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectUs;

import React from "react";
import { Card, CardContent } from "../card";

const ProjectCard = ({ backgroundImage, title1, title2 }) => {
  return (
    <>
      <Card className="flex-shrink-0 w-[255px] h-[500px] overflow-hidden border-0 bg-transparent mx-auto">
        <CardContent className="relative w-full h-full p-0">
          <div
            className="absolute w-full h-full top-0 left-0 rounded-md overflow-hidden bg-cover bg-center"
            style={{ background: backgroundImage }}
          >
            <div className="w-full h-full rounded-md bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)]" />
          </div>
          <div className="absolute top-[332px] -left-10 flex flex-col gap-[5px] -rotate-90">
            <div className="font-bold text-white text-xl tracking-[0] leading-[29px] whitespace-nowrap">
              {title1}
            </div>
            <div className="font-bold text-white text-xl tracking-[0] leading-[29px] whitespace-nowrap">
              {title2}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;

import React from "react";
import { Card, CardContent } from "../card";
import { Share2 } from "lucide-react";
import { ParagraphText } from "../text/heading-text";
import Image from "next/image";

export const ExpertTeamCard = ({ image, name, role }) => {
  return (
    <>
      <Card className="relative border-0">
        <CardContent className="p-0">
          <div className="relative mb-10">
            <div
              className="w-full h-[255px] rounded-[5px_5px_0px_0px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div
              className="bg-black w-14 h-14 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
            flex justify-center items-center"
            >
              <div className="bg-primary rounded-full w-10 h-10 flex justify-center items-center">
                <Share2 size={18} />
              </div>
            </div>
          </div>

          <div className="font-bold text-white text-2xl text-center">
            {name}
          </div>
          <ParagraphText text={role} align="center" />
        </CardContent>
      </Card>
    </>
  );
};

export const AboutExpertTeamCard = ({ image, name, role }) => {
  return (
    <>
      <Card className="relative border-0 bg-transparent">
        <CardContent className="p-0 relative">
          <Image src={image} alt={name} width={400} height={400} />
          <div
            className="flex items-center justify-between bg-light-gradient p-4 rounded-lg  w-80 bg-black/30 mx-auto
            -translate-y-12"
          >
            <div className="space-y-2">
              <ParagraphText text={name} className="text-white !text-xl" />
              <ParagraphText text={role} className="text-white" />
            </div>
            <div className="bg-primary rounded-full w-10 h-10 flex justify-center items-center">
              <Share2 size={18} />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

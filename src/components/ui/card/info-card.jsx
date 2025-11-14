import React from "react";
import { Card, CardContent } from "../card";
import { Button } from "../button";
import { ArrowRightIcon } from "lucide-react";
import { ParagraphText } from "../text/heading-text";
import Image from "next/image";

const InfoCard = ({ title, icon, description, isButton = false }) => {
  return (
    <>
      <Card className="relative service-card">
        <CardContent className="relative flex flex-col justify-center items-center p-5 h-72 space-y-4">
          <Image
            alt={`${title} icon`}
            src={icon}
            width={80}
            height={80}
            loading="lazy"
          />
          <h3 className="font-bold text-white text-xl text-center text-nowrap">
            {title}
          </h3>
          <ParagraphText text={description} align="center" />
          {isButton ? (
            <Button className="absolute -bottom-5">
              <span className="text-white text-md">Read More</span>
              <ArrowRightIcon className="w-3 h-3.5" />
            </Button>
          ) : (
            <div className="absolute -bottom-8 z-50 service-card w-16 h-16 rounded-full flex justify-center items-center">
              <div className="w-8 h-8 rounded-full bg-white" />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default InfoCard;

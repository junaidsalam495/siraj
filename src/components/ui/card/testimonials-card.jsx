import { Quote, StarIcon } from "lucide-react";
import React from "react";
import { ParagraphText } from "../text/heading-text";
import Image from "next/image";

const TestimonialsCard = ({ text, image, role, name, rating }) => {
  return (
    <>
      <div className="relative h-[348px] service-card p-4 rounded-lg flex flex-col justify-center space-y-4">
        <div className="flex gap-2">
          {[...Array(5)].map((_, starIndex) => (
            <StarIcon
              key={starIndex}
              className={`w-[18px] h-[18px] ${
                starIndex < rating
                  ? "fill-primary text-primary"
                  : "fill-none text-primary"
              }`}
            />
          ))}
        </div>
        <ParagraphText className="text-white" text={text} />
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Image
              src={image}
              className="rounded-full"
              alt={name}
              width={60}
              height={60}
              loading="lazy"
            />
            <div>
              <div className="font-medium text-white text-xl">{name}</div>
              <div className="text-muted-foreground text-sm">{role}</div>
            </div>
          </div>
          <Quote size={40} className="text-muted-foreground" />
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;

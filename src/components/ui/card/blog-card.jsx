import React from "react";
import { Card, CardContent } from "../card";
import Image from "next/image";
import { Badge } from "../badge";
import { CalendarIcon, MessageSquareIcon } from "lucide-react";
import { ButtonArrow } from "../button";
import { ParagraphText, SubHeading } from "../text/heading-text";

export const BlogCardLarge = ({
  tags,
  authorImage,
  author,
  date,
  comments,
  title,
  description,
}) => {
  return (
    <>
      <Card className="bg-black rounded-md shadow-[-10px_0px_60px_#00000017] border-0 row-span-2">
        <CardContent className="p-4 md:p-6 space-y-4">
          <div className="relative">
            <Image
              src="/images/blog/blog1.jpg"
              alt="Blog post"
              className="w-full h-full object-cover"
              width={500}
              height={300}
              loading="lazy"
            />
            <div className="absolute bottom-3.5 left-3.5 flex gap-2.5">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  className="h-7 bg-primary rounded-[5px] font-medium text-sm text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <Image
                src={authorImage}
                alt={author}
                className="w-8 h-8 rounded-2xl object-cover"
                width={60}
                height={60}
                loading="lazy"
              />
              <span className="font-bold text-white mt-12 -ml-7 rotate-90 text-nowrap">
                {author}
              </span>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="text-primary mr-2" size={20} />
                  <ParagraphText text={date} />
                </div>
                <div className="w-[1.33px] h-4 border-l border-primary" />
                <div className="flex items-center">
                  <MessageSquareIcon className="text-primary mr-2" size={20} />
                  <ParagraphText text={comments} />
                </div>
              </div>
              <SubHeading text={title} />
              <ParagraphText text={description} />
              <ButtonArrow text="Read More" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export const BlogCardSmall = ({
  tags,
  image,
  authorImage,
  author,
  date,
  comments,
  title,
  description,
}) => {
  return (
    <>
      <Card className="bg-black rounded-md shadow-[-10px_0px_60px_#00000017] border-0">
        <CardContent className="p-4 flex md:flex-row flex-col gap-4">
          <div className="relative w-[250px] h-52 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt="Blog post"
              className="w-full h-full object-cover"
              width={200}
              height={200}
              loading="lazy"
            />
            <div className="absolute bottom-3.5 left-3.5 flex gap-2.5">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="h-7 bg-primary rounded-[5px] font-medium text-sm text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <Image
                src={authorImage}
                alt={author}
                className="w-8 h-8 rounded-2xl object-cover"
                width={60}
                height={60}
                loading="lazy"
              />
              <span className="font-bold text-white mt-12 -ml-7 rotate-90 text-nowrap">
                {author}
              </span>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="text-primary mr-2" size={20} />
                  <ParagraphText text={date} />
                </div>
                <div className="w-[1.33px] h-4 border-l border-primary" />
                <div className="flex items-center">
                  <MessageSquareIcon className="text-primary mr-2" size={20} />
                  <ParagraphText text={comments} />
                </div>
              </div>
              <SubHeading text={title} />
              <ParagraphText text={description} />
              <ButtonArrow text="Read More" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export const BlogCardSimple = ({
  image,
  date,
  comments,
  title,
  description,
}) => {
  return (
    <Card className="service-card rounded-xl shadow-[-10px_0px_60px_#00000017] border-0 h-full">
      <CardContent className="p-0 flex flex-col justify-between h-full">
        <div className="p-4 md:p-6 space-y-3">
          <SubHeading text={title} />
          <ParagraphText
            text={description}
            className="text-white line-clamp-3"
          />
        </div>
        <Image
          src={image}
          alt="Blog post"
          className="w-full h-48 object-cover"
          width={200}
          height={200}
          loading="lazy"
        />
        <div className="flex justify-between items-center gap-4 p-6">
          <div className="flex items-center">
            <CalendarIcon className="mr-2" size={20} />
            <ParagraphText text={date} className="text-white" />
          </div>
          <div className="flex items-center">
            <MessageSquareIcon className="mr-2" size={20} />
            <ParagraphText text={comments} className="text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

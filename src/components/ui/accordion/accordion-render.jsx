import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { ParagraphText } from "../text/heading-text";

const AccordionRender = ({ id, question, answer }) => {
  return (
    <>
      <AccordionItem
        value={id}
        className="bg-[#ffffff03] rounded-[5px] border-none overflow-hidden"
      >
        <AccordionTrigger className="px-[25px] py-[17px] hover:no-underline [&[data-state=open]>svg]:text-white [&>svg]:text-primary">
          <span className="[font-family:'Barlow',Helvetica] font-bold text-white text-lg tracking-[0] leading-[30px] text-left">
            {question}
          </span>
        </AccordionTrigger>
        {answer && (
          <AccordionContent className="px-[25px] pb-[25px]">
            <ParagraphText text={answer} />
          </AccordionContent>
        )}
      </AccordionItem>
    </>
  );
};

export default AccordionRender;

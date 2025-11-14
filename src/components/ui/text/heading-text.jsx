import React from "react";

export const ParagraphText = ({ text, align = "left", className = "" }) => {
  return (
    <p
      className={`font-normal text-[#afafaf] text-sm md:text-base leading-relaxed text-${align} ${className}`}
    >
      {text}
    </p>
  );
};

export const SectionHeading = ({
  whiteText,
  highlightText,
  align = "center",
  className = "",
}) => {
  return (
    <h2
      className={`font-extrabold relative capitalize z-10 text-3xl md:text-5xl leading-snug text-${align} ${className}`}
    >
      <span className="text-white">{whiteText} </span>
      <span className="text-primary">{highlightText}</span>
    </h2>
  );
};

export const SubHeading = ({ text, className = "" }) => {
  return (
    <>
      <h3 className={`font-bold text-white capitalize text-xl md:text-2xl ${className}`}>{text}</h3>
    </>
  );
};

import React from "react";

const UnderlineTitle = ({ text }) => {
  return (
    <>
      <div className="relative w-fit">
        <p className="font-semibold text-primary text-base tracking-[0] leading-5 whitespace-nowrap mb-2 text-center">
          {text}
        </p>
        <div className="absolute left-0 right-0 top-3 translate-y-3 flex justify-center">
          <div className="relative w-full h-0.5 bg-primary">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-2 rounded-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderlineTitle;

import React from "react";

const ProgressBar = ({ label, percentage }) => {
  return (
    <>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="[font-family:'Barlow',Helvetica] font-bold text-white text-lg tracking-[0] leading-[26px]">
            {label}
          </span>
          <span className="[font-family:'Nunito',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[26px]">
            {percentage}%
          </span>
        </div>
        <div className="relative h-[7px] bg-[#ffffff1a] rounded-[5px]">
          <div
            className="absolute h-full bg-primary rounded-[5px]"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute top-[calc(50%-6px)] right-[-3px] w-3 h-3 bg-primary rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;

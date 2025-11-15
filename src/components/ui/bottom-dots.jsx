import React from "react";

const BottomDots = ({ active }) => {
  return (
    <>
      <div className="w-[15px] h-[15px] bg-primary rounded-[7.5px] flex items-center justify-center">
        {active && (
          <div className="w-[9px] h-[9px] bg-primary rounded-[4.5px]" />
        )}
      </div>
    </>
  );
};

export default BottomDots;

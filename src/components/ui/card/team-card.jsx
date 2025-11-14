import Image from "next/image";
import React from "react";

const TeamCard = ({ label, value, icon }) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <Image alt={label} src={icon} width={80} height={80} loading="lazy" />
        <div className="font-bold text-white text-4xl text-center">{value}</div>
        <div className="font-medium text-[#ffffffb2] text-lg ">{label}</div>
      </div>
    </>
  );
};

export default TeamCard;

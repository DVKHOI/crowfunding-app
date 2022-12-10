import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampFeature = () => {
  return (
    <div className="w-full max-w-[1048px] flex items-center gap-x-[30px] ">
      <CampImage className="h-[266px] flex-1 "></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory
          text="Architecture"
          className="mb-3 text-sm"
        ></CampCategory>
        <CampTitle className="text-xl font-bold leading-[30px] mb-[15px]">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm font-normal mb-[22px]">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-[22px]">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex gap-x-[65px] justify-between">
          <CampMeta text="Raised of $2,500" size="big"></CampMeta>
          <CampMeta amount="173" text="Total backers" size="big"></CampMeta>
          <CampMeta amount="30" text="Days left" size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampFeature;

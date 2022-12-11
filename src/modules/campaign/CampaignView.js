import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React, { Fragment } from "react";
import CampaignGrid from "./CampaignGrid";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 gradient-banner flex items-center justify-center text-white font-bold text-[40px] mb-10">
        <h1>Educaiton</h1>
      </div>
      <div className="w-full max-w-[1066px] flex items-start gap-x-[30px] ">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src={defaultImage}
                  alt=""
                  className="w-[89px] h-[70px] rounded-lg object-cover cursor-pointer"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Film" className="mb-3 text-sm"></CampCategory>
          <CampTitle className="text-xl font-bold leading-[30px] mb-[15px]">
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDesc className="text-sm font-normal mb-[22px]">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-[22px]">
            <div className="w-3/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex gap-x-[65px] justify-between mb-4">
            <CampMeta text="Raised of $2,500" size="big"></CampMeta>
            <CampMeta amount="173" text="Total backers" size="big"></CampMeta>
            <CampMeta amount="30" text="Days left" size="big"></CampMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[94px] bg-white shadow-sm py-5 px-12 rounded-lg mb-6">
        <div className="flex items-center gap-x-[60px] text-sm text-text3 font-medium ">
          <span className="font-semibold text-secondary">Campaign</span>
          <span>Ricks</span>
          <span>FAQ</span>
          <span>Update</span>
          <span>Comment</span>
        </div>
        <div>
          <Button kind="primary">Back this project</Button>
        </div>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-xl font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;

import { Button } from "components/button";
import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampFeature from "modules/campaign/CampFeature";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="mb-10 bg-white rounded-[20px] flex items-center justify-between px-10 py-[31px]">
        <div className="flex items-start gap-x-[25px] ">
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-[22px] font-semibold ">Create Your Campaign</h3>
            <span className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </span>
            <a href="/" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <div>
          <Button
            href="/start-campaign"
            kind="ghost"
            className="px-[30px] py-[13px]"
          >
            Create campaign
          </Button>
        </div>
      </div>
      <Heading number="4">Your campaign</Heading>
      <CampaignGrid type="col">
        <CampFeature></CampFeature>
        <CampFeature></CampFeature>
        <CampFeature></CampFeature>
        <Button kind="ghost" className="w-[150px] mx-auto">
          See more+
        </Button>
      </CampaignGrid>
      <Gap></Gap>
      <Heading number="4">Your campaign</Heading>
      <CampaignGrid type="col">
        <CampFeature></CampFeature>
        <CampFeature></CampFeature>
        <CampFeature></CampFeature>
        <Button kind="ghost" className="w-[150px] mx-auto">
          See more+
        </Button>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignPage;

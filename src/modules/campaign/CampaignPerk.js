import React from "react";
import rectangle from "../../images/rectangle81.png";

const CampaignPerk = () => {
  return (
    <div className="bg-white rounded-lg shadow-1">
      <img src={rectangle} alt="" className="max-h-[323px] w-full mb-5" />
      <div className="pb-5 pl-5">
        <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-lg bg-secondary">
          Featured
        </span>
        <h3 className="mb-1 text-xl font-semibold">Special One Camera</h3>
        <div className="flex gap-x-[10px] items-center mb-4">
          <span className="text-xl font-bold">$2,724 USD</span>
          <span className="text-sm font-medium text-error">
            $1,504 USD (12% OFF)
          </span>
        </div>
        <div className="flex flex-col mb-4 gap-y-1">
          <p className="font-medium ">Estimated Shipping</p>
          <p className="text-sm font-normal text-text2">October 2022</p>
        </div>
        <p className="mb-4 text-sm font-normal text-text2">
          <strong>05</strong> claimed
        </p>
        <p className="text-sm font-normal text-text2">Ships worldwide</p>
      </div>
    </div>
  );
};

export default CampaignPerk;

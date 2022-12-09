import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div className="">
      <div className="h-[158px]">
        <img
          src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link
          to="/"
          className="flex items-baseline mb-4 text-sm font-medium gap-x-3 text-text3"
        >
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="mb-4 text-xs font-normal text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex justify-between mb-5">
          <div>
            <p className="text-sm font-semibold text-text2">$2,000</p>
            <p className="text-xs font-normal text-text4">Raised of $1,900</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text2">173</p>
            <p className="text-xs font-normal text-text4">Total backers</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8">
            <img
              src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <p className="text-xs text-text4">
            by{" "}
            <span className="text-xs font-semibold text-text2">
              Mahfuzul Nabil
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;

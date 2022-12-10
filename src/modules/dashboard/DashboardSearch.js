import { defaultImage } from "constants/global";
import React from "react";
import { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center w-full p-2 bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full px-5 text-sm bg-transparent text-text1 placeholder:text-text4"
          />
        </div>
        <button className="w-[72px] h-10 flex justify-center items-center bg-primary text-white rounded-full flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="w-[327px] md:w-[500px] lg:w-[843px] search-results bg-white absolute top-full left-0 translate-y-5 rounded-3xl z-50 pb-6">
          <div className="p-[10px] flex items-center justify-between bg-graySoft rounded-3xl">
            <h4 className=" text-sm font-medium pl-4 underline">
              See all 10,124 fundraisier
            </h4>
            <button className="flex justify-center items-center w-[72px] h-[50px] bg-error bg-opacity-20 rounded-[10px] text-error ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
            <div className="flex flex-col text-sm gap-y-[10px]">
              <span>
                <strong>education</strong> fund
              </span>
              <span>schoralship fund</span>
              <span>
                <strong>education</strong> and schools fund
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center  gap-x-5">
      <img
        src={defaultImage}
        className="w-[50px] h-[50px] rounded-lg object-cover"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="font-semibold mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <span className="text-text3">By Durgham Family</span>
      </div>
    </div>
  );
}
export default DashboardSearch;

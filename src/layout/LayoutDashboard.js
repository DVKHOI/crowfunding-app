import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import Overlay from "components/common/Overlay";
import { Input } from "components/input";
import { Label } from "components/label";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lineBG">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay bg-black bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center"
        className="outline-none  modal-content w-full max-w-[521px] bg-white rounded-2xl  p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden"
      >
        <button className="absolute z-10 right-10 top-[10px] text-text1">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] leading-[38px] text-center mb-10">
          Back this project
        </h2>
        <div className="mb-[60px]">
          <p className="mb-2 text-sm font-medium text-text2">
            Enter the contribute amount
          </p>
          <input
            type="text"
            placeholder="$10"
            name="name"
            className="px-5 py-3 mb-5 text-lg font-medium text-text4"
          ></input>
          <p className="mb-5 text-sm font-normal text-text3">
            Contribution are not associatied with perks
          </p>
          <Button kind="primary" className="px-11">
            Continue
          </Button>
        </div>
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <div className="mb-10">
              <CampaignPerk showBtn key={index}></CampaignPerk>
            </div>
          ))}
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;

import { Button } from "components/button";
import React from "react";
import logo from "../../images/logo.png";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";
const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img src={logo} alt="crowfunding-app" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          type="button"
          className="bg-secondary w-[191px]  px-[26px] py-[13px] "
        >
          Start a campaign
        </Button>
        <img
          src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;

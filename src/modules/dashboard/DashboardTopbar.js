import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";
const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/">
          <img src={logo} alt="crowfunding-app" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          href="/campaign"
          type="button"
          kind="secondary"
          className="px-6 py-3"
        >
          Start a campaign
        </Button>
        <img src={defaultImage} alt="" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopbar;

import React from "react";
import classNames from "utils/classNames";

const CampaignGrid = ({ children, type = "default", className = "" }) => {
  if (type !== "default")
    return (
      <div className={classNames("grid grid-cols-1 gap-y-10", className)}>
        {children}
      </div>
    );
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

export default CampaignGrid;

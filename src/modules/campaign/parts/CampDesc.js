import React from "react";
import classNames from "utils/classNames";

const CampDesc = ({ children = "", className = "text-xs mb-[15px] " }) => {
  return (
    <p className={classNames(" font-normal text-text3", className)}>
      {children}
    </p>
  );
};

export default CampDesc;

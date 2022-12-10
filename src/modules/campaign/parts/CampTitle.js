import React from "react";
import classNames from "utils/classNames";

const CampTitle = ({ children, className = "mb-1 font-semibold" }) => {
  return (
    <div>
      <h3 className={classNames("  text-text1", className)}>{children}</h3>
    </div>
  );
};
// Fun, durable and reusable boxes with eco-friendly options.

export default CampTitle;

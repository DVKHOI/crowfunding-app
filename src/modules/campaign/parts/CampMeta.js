import React from "react";
import classNames from "utils/classNames";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p
        className={classNames(
          "  text-text2",
          size === "small" ? "text-sm font-semibold" : "text-xl font-bold"
        )}
      >
        {amount}
      </p>
      <p
        className={classNames(
          " font-normal text-text4",
          size === "small" ? "text-xs" : ""
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default CampMeta;

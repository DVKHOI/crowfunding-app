import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children, className = "", htmlFor = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text-3 ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;

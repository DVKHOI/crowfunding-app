import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={` p-4 text-base font-semibold leading-6 text-white rounded-lg flex justify-center items-center min-h-[56px] ${
        isLoading ? "pointer-events-none opacity-50" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;

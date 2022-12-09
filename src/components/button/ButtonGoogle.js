import React from "react";
import google from "../../images/google.png";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full font-semibold gap-x-2 leading-[26px] py-3 border border-strock rounded-xl mb-5 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img src={google} alt="google" /> <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});

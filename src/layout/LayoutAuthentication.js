import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import ellipse from "../images/ellipse.png";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { useSelector } from "react-redux";

const LayoutAuthentication = (props) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user && user.email) return null;
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lineBG dark:bg-darkBG isolate">
      <img
        src={ellipse}
        alt="bg"
        className="hidden lg:block absolute w-full bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src={logo} alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary px-5 py-8 lg:px-12 lg:py-16 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});

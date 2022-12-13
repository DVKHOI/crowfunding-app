import CampAddNew from "modules/campaign/CampAddNew";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Fragment>
      <CampAddNew></CampAddNew>
    </Fragment>
  );
};

export default StartCampPage;

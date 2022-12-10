import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampFeature from "modules/campaign/CampFeature";
import React, { Fragment } from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your Campaign </Heading>
      <CampFeature></CampFeature>
      <Gap></Gap>
      <Heading>Popular Campaign </Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Heading className="mt-[30px]">Recent Campaign </Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;

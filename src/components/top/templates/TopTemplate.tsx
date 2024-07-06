import React from "react";
import GroupDescriptionContainer from "../organisms/GroupDescriptionContainer";
import PortfolioListContainer from "../organisms/PortfolioListContainer";
import MemberListContainer from "../organisms/MemberListContainer";
import SnsListContainer from "../organisms/SnsListContainer";

const TopTemplate: React.FC = () => (
  <>
    <GroupDescriptionContainer />
    <PortfolioListContainer />
    <MemberListContainer />
    <SnsListContainer />
  </>
);

export default TopTemplate;

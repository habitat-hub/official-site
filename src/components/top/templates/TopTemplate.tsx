import React from "react";
import GroupDescriptionContainer from "../organisms/GroupDescriptionContainer";
import PortfolioListContainer from "../organisms/PortfolioListContainer";
import MemberListContainer from "../organisms/MemberListContainer";
import SnsListContainer from "../organisms/SnsListContainer";
import QiitaPostsContainer from "../organisms/QiitaPostsContainer";
import { getQiitaPosts } from "../utils/qiitaApiUtil";

const TopTemplate: React.FC = async () => {
  const { qiitaPosts, hasQiitaPosts } = await getQiitaPosts();

  return (
    <>
      <GroupDescriptionContainer />
      <PortfolioListContainer />
      <MemberListContainer />
      {hasQiitaPosts && <QiitaPostsContainer qiitaPosts={qiitaPosts} />}
      <SnsListContainer hasQiitaPosts={hasQiitaPosts} />
    </>
  );
};

export default TopTemplate;

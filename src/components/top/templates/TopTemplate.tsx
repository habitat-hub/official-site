"use client";
import React from "react";
import GroupDescriptionContainer from "../organisms/GroupDescriptionContainer";
import PortfolioListContainer from "../organisms/PortfolioListContainer";
import MemberListContainer from "../organisms/MemberListContainer";
import SnsListContainer from "../organisms/SnsListContainer";
import useQiitaPosts from "../hooks/useQiitaPosts";
import QiitaPostsContainer from "../organisms/QiitaPostsContainer";

const TopTemplate: React.FC = () => {
  const { qiitaPosts, hasQiitaPosts } = useQiitaPosts();

  return (
    <>
      <GroupDescriptionContainer />
      <PortfolioListContainer />
      <MemberListContainer />
      {/* TODO: cloudflarePageで定数ファイルを定義する */}
      {hasQiitaPosts && <QiitaPostsContainer qiitaPosts={qiitaPosts} />}
      <SnsListContainer hasQiitaPosts={hasQiitaPosts} />
    </>
  );
};

export default TopTemplate;

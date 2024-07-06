import React from "react";
import { constant } from "../constant";
import SiteSummary from "../organisms/ui/SiteSummary";
import SiteDetail from "../organisms/ui/SiteDetail";
import HeadingContainer from "../atoms/HeadingContainer";

type Props = {
  portfolioId: string;
};

const PortfolioTemplate: React.FC<Props> = ({ portfolioId }) => {
  const portfolioContent = constant[portfolioId];

  return (
    <>
      <div className="bg-light-dark">
        <article className="container mx-auto md:p-9 p-6">
          <HeadingContainer />
          <SiteSummary portfolioContent={portfolioContent} />
          <SiteDetail portfolioContent={portfolioContent} />
        </article>
      </div>
    </>
  );
};
export default PortfolioTemplate;

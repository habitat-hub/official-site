import React from "react";
import { constant } from "../constant";
import HeadingContainer from "../atoms/HeadingContainer";
import SiteSummaryContainer from "../organisms/SiteSummaryContainer";
import SiteDetailContainer from "../organisms/SiteDetailContainer";

type Props = {
  portfolioId: string;
};

const PortfolioTemplate: React.FC<Props> = ({ portfolioId }) => {
  const portfolioContent = constant[portfolioId];

  return (
    <div className="bg-light-dark">
      <article className="container mx-auto md:p-9 p-6">
        <HeadingContainer />
        <SiteSummaryContainer portfolioContent={portfolioContent} />
        <SiteDetailContainer portfolioContent={portfolioContent} />
      </article>
    </div>
  );
};
export default PortfolioTemplate;

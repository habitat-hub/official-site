import React from "react";
import { constant } from "../constant";
import HeadingContainer from "../atoms/HeadingContainer";
import SiteSummaryContainer from "../organisms/SiteSummaryContainer";
import SiteDetailContainer from "../organisms/SiteDetailContainer";
import PortfolioTemplateLayout from "./layout/PortfolioTemplateLayout";

type Props = {
  portfolioId: string;
};

const PortfolioTemplate: React.FC<Props> = ({ portfolioId }) => {
  const portfolioContent = constant[portfolioId];

  return (
    <PortfolioTemplateLayout>
      <HeadingContainer />
      <SiteSummaryContainer portfolioContent={portfolioContent} />
      <SiteDetailContainer portfolioContent={portfolioContent} />
    </PortfolioTemplateLayout>
  );
};
export default PortfolioTemplate;

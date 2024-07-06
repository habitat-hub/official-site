import React from "react";

import PortfolioTemplate, { PortfolioProps } from "./ui/PortfolioTemplate";

const PortfolioTemplateContainer: React.FC<PortfolioProps> = ({
  mainVisualUrl,
  title,
  releaseDate,
  siteUrl,
  enabledDevice,
  siteImageUrls,
  description,
}) => (
  <PortfolioTemplate
    mainVisualUrl={mainVisualUrl}
    title={title}
    releaseDate={releaseDate}
    siteUrl={siteUrl}
    enabledDevice={enabledDevice}
    siteImageUrls={siteImageUrls}
    description={description}
  />
);

export default PortfolioTemplateContainer;

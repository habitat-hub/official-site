import React from "react";
import PortfolioContainer from "../organisms/PortfolioContainer";

type Props = {
  portfolioId: string;
};

const PortfolioTemplate: React.FC<Props> = ({ portfolioId }) => {
  return <PortfolioContainer portfolioId={portfolioId} />;
};
export default PortfolioTemplate;

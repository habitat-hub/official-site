import React from "react";

import Portfolio from "./ui/Portfolio";

type Props = {
  portfolioId: string;
};

const PortfolioContainer: React.FC<Props> = ({ portfolioId }) => (
  <Portfolio portfolioId={portfolioId} />
);

export default PortfolioContainer;

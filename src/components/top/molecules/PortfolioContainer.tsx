import React from "react";
import Portfolio, { PortfolioProps } from "./ui/Portfolio";

const PortfolioContainer: React.FC<PortfolioProps> = (props) => (
  <Portfolio {...props} />
);

export default PortfolioContainer;

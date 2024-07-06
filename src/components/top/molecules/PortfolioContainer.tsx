import React from "react";

import Portfolio, { PortfolioProps } from "./ui/Portfolio";

const PortfolioContainer: React.FC<PortfolioProps> = ({
  title,
  imageUrl,
  href,
}) => <Portfolio title={title} imageUrl={imageUrl} href={href} />;

export default PortfolioContainer;

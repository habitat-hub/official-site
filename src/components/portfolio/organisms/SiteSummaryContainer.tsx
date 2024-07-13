import React from "react";
import SiteSummary, { SiteSummaryProps } from "./ui/SiteSummary";

const SiteSummaryContainer: React.FC<SiteSummaryProps> = (props) => (
  <SiteSummary {...props} />
);

export default SiteSummaryContainer;

import React from "react";
import SiteSummary from "./ui/SiteSummary";
import { Portfolio } from "../types";

type Props = {
  portfolioContent: Portfolio;
};

const SiteSummaryContainer: React.FC<Props> = ({ portfolioContent }) => (
  <SiteSummary portfolioContent={portfolioContent} />
);
export default SiteSummaryContainer;

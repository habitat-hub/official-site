import React from "react";
import { Portfolio } from "../types";
import SiteDetail from "./ui/SiteDetail";

type Props = {
  portfolioContent: Portfolio;
};

const SiteDetailContainer: React.FC<Props> = ({ portfolioContent }) => (
  <SiteDetail portfolioContent={portfolioContent} />
);
export default SiteDetailContainer;

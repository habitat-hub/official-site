import React from "react";
import SiteDetail, { SiteDetailProps } from "./ui/SiteDetail";

const SiteDetailContainer: React.FC<SiteDetailProps> = (props) => (
  <SiteDetail {...props} />
);

export default SiteDetailContainer;

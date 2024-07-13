import React from "react";
import MemberCard, { MemberCardProps } from "./ui/MemberCard";

const MemberCardContainer: React.FC<MemberCardProps> = (props) => (
  <MemberCard {...props} />
);

export default MemberCardContainer;

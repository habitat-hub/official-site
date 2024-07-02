import { MemberInformation } from "./ui/MemberCard";
import MemberCard from "./ui/MemberCard";

type Props = {
  member: MemberInformation;
};

const MemberCardContainer = ({ member }: Props) => (
  <MemberCard member={member} />
);

export default MemberCardContainer;

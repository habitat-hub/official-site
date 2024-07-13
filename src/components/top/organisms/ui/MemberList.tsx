import React from "react";
import { MemberInformation } from "../../molecules/ui/MemberCard";
import MemberCardContainer from "../../molecules/MemberCardContainer";

type Props = {
  gsapRef: React.MutableRefObject<null>;
  title: string;
  memberInformationList: MemberInformation[];
};

const MemberList: React.FC<Props> = ({
  gsapRef,
  title,
  memberInformationList,
}) => (
  <section className="p-8 bg-dark max-w-full" ref={gsapRef}>
    <div className="text-center">
      <h2 className="members__heading font-fantasy text-3xl font-bold inline-block border-b border-current opacity-0 scale-50">
        {title}
      </h2>
    </div>
    <div className="members__body mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0">
      {memberInformationList.map((member, index) => (
        <MemberCardContainer key={index} member={member} />
      ))}
    </div>
  </section>
);

export default MemberList;

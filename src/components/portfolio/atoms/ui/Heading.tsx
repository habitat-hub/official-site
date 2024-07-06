import React from "react";

type Props = {
  heading: string;
};

const Heading: React.FC<Props> = ({ heading }) => (
  <div className="text-center md:mb-12 mb-6">
    <h2 className=" text-3xl opacity-40 font-fantasy font-bold">{heading}</h2>
  </div>
);
export default Heading;

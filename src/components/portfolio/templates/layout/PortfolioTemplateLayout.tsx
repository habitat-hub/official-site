import React from "react";

type Props = {
  children: React.ReactNode;
};

const PortfolioTemplateLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-light-dark">
      <article className="container mx-auto md:p-9 p-6">{children}</article>
    </div>
  );
};
export default PortfolioTemplateLayout;

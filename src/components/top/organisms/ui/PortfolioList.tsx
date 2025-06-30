import React from "react";

import { PortfolioProps } from "../../molecules/ui/Portfolio";
import PortfolioContainer from "../../molecules/PortfolioContainer";

type Props = {
  gsapRef: React.MutableRefObject<null>;
  title: string;
  portfolios: PortfolioProps[];
};

const PortfolioList: React.FC<Props> = ({ gsapRef, title, portfolios }) => (
  <section className="p-8 md:p-10 sm:p-4 bg-light-dark" ref={gsapRef}>
    <div className="portfolio__heading text-center mb-10 opacity-0">
      <h2 className="font-fantasy text-3xl font-bold">
        <span className="inline-block border-b-2 border-white pb-2.5">
          {title}
        </span>
      </h2>
    </div>
    <div className="portfolio__body grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-12 opacity-0">
      {portfolios.map((portfolio, index) => (
        <div key={`Portfolio_${portfolio.title}`} className="max-w-80 max-h-80">
          <PortfolioContainer {...portfolio} />
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioList;

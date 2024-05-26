import React from "react";
import Image from "next/image";

const PortfolioList: React.FC = () => {
  const portfolios = [
    {
      title: "Daydule",
      imageUrl: "/portfolio/daydule/daydule_icon.png",
      href: "/portfolio/daydule",
    },
    {
      title: "Time is Money",
      imageUrl: "/portfolio/time-is-money/time-is-money_icon.png",
      href: "/portfolio/time-is-money",
    },
    { title: "Coming Soon ...", imageUrl: "/background.jpeg" },
    { title: "Coming Soon ...", imageUrl: "/background.jpeg" },
  ];

  return (
    <section className="p-8 md:p-10 sm:p-4 bg-light-dark">
      <div className="text-center mb-10">
        <h2 className="font-fantasy text-3xl font-bold">
          <span className="inline-block border-b-2 border-white pb-2.5">
            Portfolio
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {portfolios.map((portfolio, index) => (
          <a
            key={index}
            href={portfolio.href || undefined}
            className="group block relative w-full h-0 pb-[100%] overflow-hidden rounded-3xl"
          >
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="text-white font-bold">{portfolio.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;

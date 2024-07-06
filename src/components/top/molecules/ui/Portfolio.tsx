import React from "react";

import Image from "next/image";

export type PortfolioProps = {
  title: string;
  imageUrl: string;
  href?: string;
};

const Portfolio: React.FC<PortfolioProps> = ({ title, imageUrl, href }) => (
  <a
    href={href || undefined}
    className="group block relative w-full h-0 pb-[100%] overflow-hidden rounded-3xl"
  >
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      <span className="text-white font-bold">{title}</span>
    </div>
  </a>
);

export default Portfolio;

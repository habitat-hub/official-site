import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Portfolio } from "../../types";

export type SiteSummaryProps = {
  portfolioContent: Portfolio;
};

const SiteSummary: React.FC<SiteSummaryProps> = ({ portfolioContent }) => (
  <div className="max-w-3xl mx-auto">
    {/* メインビジュアル */}
    <div className="w-full md:h-[400px] h-52 relative md:mb-9 mb-6">
      <Image
        src={portfolioContent.mainVisualUrl}
        alt={portfolioContent.title + " メインビジュアル"}
        fill
        style={{
          objectFit: "contain",
        }}
        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>

    {/* サイト名 */}
    <div className="text-center md:mb-9 mb-6 text-3xl">
      <h2 className=" text-3xl font-fantasy font-bold">
        {portfolioContent.title}
      </h2>
    </div>

    {/* サイト情報 */}
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 md:mb-9 mb-6">
      <div className="text-center">
        <p className="font-extralight">RELEASE</p>
        <p className="mt-2">{portfolioContent.releaseDate}</p>
      </div>
      <div className="text-center">
        <p className="font-extralight">対象デバイス</p>
        <p className="mt-2">{portfolioContent.enabledDevice.join(", ")}</p>
      </div>
      <div className="text-center">
        <p className="font-extralight">URL</p>
        <div className="mt-2">
          <a
            href={portfolioContent.siteUrl}
            target="_blank"
            className="underline"
          >
            {portfolioContent.title}
          </a>
          <FiExternalLink className="inline-block ml-1" />
        </div>
      </div>
    </section>
  </div>
);
export default SiteSummary;

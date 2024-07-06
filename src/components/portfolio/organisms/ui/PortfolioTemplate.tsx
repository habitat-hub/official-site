import Image from "next/image";
import React from "react";
import HeaderContainer from "../../../common/organisms/HeaderContainer";
import FooterContainer from "../../../common/atoms/FooterContainer";
import { FiExternalLink } from "react-icons/fi";
import { constant } from "@/components/portfolio/constant";

type Props = {
  portfolioId: string;
};

export interface Portfolio {
  mainVisualUrl: string;
  title: string;
  releaseDate: string;
  siteUrl: string;
  enabledDevice: string[];
  siteImageUrls: string[];
  description: string;
}

const PortfolioTemplate: React.FC<Props> = ({ portfolioId }) => {
  const portfolioContent = constant[portfolioId];

  return (
    <>
      <div className="bg-light-dark">
        <article className="container mx-auto md:p-9 p-6">
          {/* 見出し */}
          <div className="text-center md:mb-12 mb-6">
            <h2 className=" text-3xl opacity-40 font-fantasy font-bold">
              Portfolio
            </h2>
          </div>

          {/* サイト概要 */}
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
                <p className="mt-2">
                  {portfolioContent.enabledDevice.join(", ")}
                </p>
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

          {/* サイト詳細 */}
          <div className="max-w-2xl mx-auto">
            {/* サイト画像 */}
            <div className="md:mb-9 mb-6">
              {portfolioContent.siteImageUrls.map((imageUrl, index) => (
                <div
                  key={`site_image_${index}`}
                  className="w-full md:h-80 h-40 relative mb-6"
                >
                  <Image
                    src={imageUrl}
                    alt={
                      portfolioContent.title + ` スクリーンショット${index + 1}`
                    }
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* サイト説明 */}
            <div className="text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: portfolioContent.description,
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default PortfolioTemplate;

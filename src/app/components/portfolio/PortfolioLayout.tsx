import Image from "next/image";
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface Props {
  mainVisualUrl: string;
  title: string;
  releaseDate: string;
  siteUrl: string;
  siteImageUrls: string[];
  description: string;
}

const PortfolioLayout: React.FC<Props> = ({
  mainVisualUrl,
  title,
  releaseDate,
  siteUrl,
  siteImageUrls,
  description,
}) => {
  return (
    <>
      <Header />
      <div className="bg-light-dark">
        <article className="container mx-auto md:p-9 p-6">
          {/* 見出し */}
          <div className="text-center md:mb-12 mb-6">
            <h2 className=" text-3xl opacity-40 font-fantasy font-bold">
              Portfolio
            </h2>
          </div>

          {/* サイト概要 */}
          <div className="max-w-4xl mx-auto">
            {/* メインビジュアル */}
            <div className="w-full md:h-[400px] h-52 relative md:mb-9 mb-6">
              <Image
                src={mainVisualUrl}
                alt={"メインビジュアル"}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* サイト名 */}
            <div className="text-center md:mb-9 mb-6 text-3xl">
              <h2 className=" text-3xl font-fantasy font-bold">{title}</h2>
            </div>

            {/* サイト情報 */}
            <section className="flex justify-around md:mb-9 mb-6">
              <div className="text-center">
                <p className="font-extralight">RELEASE</p>
                <p className="mt-2">{releaseDate}</p>
              </div>
              <div className="text-center">
                <p className="font-extralight">URL</p>
                <p className="mt-2">
                  <a href={siteUrl} target="_blank">
                    {siteUrl}
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* サイト詳細 */}
          <div className="max-w-2xl mx-auto">
            {/* サイト画像 */}
            <div className="md:mb-9 mb-6">
              {siteImageUrls.map((imageUrl, index) => (
                <div
                  key={`site_image_${index}`}
                  className="w-full md:h-80 h-40 relative mb-6"
                >
                  <Image
                    src={imageUrl}
                    alt={`サイトのサンプル画像${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* サイト説明 */}
            <div className="text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioLayout;

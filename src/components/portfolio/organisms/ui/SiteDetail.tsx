import Image from "next/image";
import React from "react";
import { Portfolio } from "../../types";

export type SiteDetailProps = {
  portfolioContent: Portfolio;
};

const SiteDetail: React.FC<SiteDetailProps> = ({ portfolioContent }) => (
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
            alt={portfolioContent.title + ` スクリーンショット${index + 1}`}
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
);
export default SiteDetail;

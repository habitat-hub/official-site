import React from "react";
import Image from "next/image";

export type QiitaPostProps = {
  likesCount: number;
  ogpImageUrl: string;
  url: string;
  title: string;
  createdAt: string;
};

const QiitaPost: React.FC<QiitaPostProps> = ({
  likesCount,
  ogpImageUrl,
  url,
  title,
  createdAt,
}) => (
  <div className="w-full pt-8">
    <a
      className="group block relative w-full h-0 pb-[50%] overflow-hidden"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        src={ogpImageUrl}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </a>
    <div className="w-full mt-2 pr-2">
      <p className="text-white text-right">{createdAt}</p>
      <p className="text-white text-right">{likesCount} LGTM</p>
    </div>
  </div>
);

export default QiitaPost;

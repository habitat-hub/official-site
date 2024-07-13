"use client";
import React from "react";
import GroupDescriptionContainer from "../organisms/GroupDescriptionContainer";
import PortfolioListContainer from "../organisms/PortfolioListContainer";
import MemberListContainer from "../organisms/MemberListContainer";
import SnsListContainer from "../organisms/SnsListContainer";
import useQiitaPosts from "../hooks/useQiitaPosts";
import Image from "next/image";

const TopTemplate: React.FC = () => {
  const { qiitaPosts } = useQiitaPosts();
  const hasQiitaPosts = qiitaPosts.length > 0;

  return (
    <>
      <GroupDescriptionContainer />
      <PortfolioListContainer />
      <MemberListContainer />
      {/* TODO: コンポーネント化 */}
      {/* TODO: 他のメンバーのtoken情報をもらう */}
      {/* TODO: cloudflarePageで定数ファイルを定義する */}
      {hasQiitaPosts && (
        <section className="p-8 bg-light-dark max-w-full">
          <div className="text-center">
            <h2 className="font-fantasy text-2xl font-bold text-light">
              <span className="inline-block border-b-2 border-white pb-2.5">
                Qiita の記事
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
            {qiitaPosts.map(
              ({ id, likesCount, ogpImageUrl, url, title, createdAt }) => {
                return (
                  <div className="w-full pt-8" key={id}>
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
              }
            )}
          </div>
        </section>
      )}
      <SnsListContainer hasQiitaPosts={hasQiitaPosts} />
    </>
  );
};

export default TopTemplate;

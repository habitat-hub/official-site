import React from "react";
import { ParsedQiitaPost } from "../../type";
import QiitaPostContainer from "../../atoms/QiitaPostContainer";

type Props = {
  title: string;
  qiitaPosts: ParsedQiitaPost[];
};

const QiitaPosts: React.FC<Props> = ({ title, qiitaPosts }) => (
  <section className="p-8 bg-light-dark max-w-full">
    <div className="text-center">
      <h2 className="font-fantasy text-2xl font-bold text-light">
        <span className="inline-block border-b-2 border-white pb-2.5">
          {title}
        </span>
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
      {qiitaPosts.map(
        ({ id, likesCount, ogpImageUrl, url, title, createdAt }) => {
          return (
            <QiitaPostContainer
              key={id}
              {...{ likesCount, ogpImageUrl, url, title, createdAt }}
            />
          );
        }
      )}
    </div>
  </section>
);

export default QiitaPosts;

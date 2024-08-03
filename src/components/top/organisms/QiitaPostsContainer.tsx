import React from "react";
import { ParsedQiitaPost } from "../type";
import QiitaPosts from "./ui/QiitaPosts";

type Props = {
  qiitaPosts: ParsedQiitaPost[];
};

const QiitaPostsContainer: React.FC<Props> = (qiitaPostsProps) => (
  <QiitaPosts {...qiitaPostsProps} title={"Qiitaの最新記事"} />
);

export default QiitaPostsContainer;

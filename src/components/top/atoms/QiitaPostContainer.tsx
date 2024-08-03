import React from "react";
import QiitaPost, { QiitaPostProps } from "./ui/QiitaPost";

const QiitaPostContainer: React.FC<QiitaPostProps> = (qiitaPostProps) => (
  <QiitaPost {...qiitaPostProps} />
);

export default QiitaPostContainer;

import React from "react";
import SnsList, { SnsButton } from "./ui/SnsList";

const SnsListContainer: React.FC = () => {
  const buttons: SnsButton[] = [
    { name: "GitHub", url: "https://github.com/habitat-hub" },
    { name: "Qiita", url: "https://qiita.com/organizations/habitatHub" },
    { name: "Zenn", url: "https://zenn.dev/p/habitat_hub" },
  ];

  return <SnsList title="SNS" buttons={buttons} />;
};

export default SnsListContainer;

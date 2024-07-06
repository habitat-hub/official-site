"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import GroupDescription from "./ui/GroupDescription";

const GroupDescriptionContainer: React.FC = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ dafaults: { ease: "power-2.inOut" } });
      tl.fromTo(
        ".description__image",
        { scale: 1 },
        { scale: 1, opacity: 0.75, duration: 1.1 }
      );
      tl.fromTo(
        ".description__heading",
        { y: 20, scale: 0.5 },
        { y: 0, scale: 1, opacity: 1, duration: 1.1 },
        "-=0.7"
      );
      tl.fromTo(".description__body", { scale: 0.5 }, { scale: 1, opacity: 1 });
    },
    { scope: container }
  );

  const title = "Habitat Hub とは";
  const description = `Habitat Hubは、エンジニアとして働く4人のメンバーによるチームです。Webサイトやアプリの開発を手掛け、QiitaなどでIT関連の記事の投稿を行なっています。私たちの活動方針は、世の中の人々にちょっとした喜びを与え、世の中をより便利にすることです。IT技術を通じて日常にささやかな幸せを届け、より豊かな生活をサポートします。`;
  return (
    <GroupDescription
      gsapRef={container}
      title={title}
      description={description}
    />
  );
};

export default GroupDescriptionContainer;

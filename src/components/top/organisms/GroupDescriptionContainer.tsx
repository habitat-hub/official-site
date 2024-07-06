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
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
  possimus in vero fugit provident dolorum ullam necessitatibus nesciunt
  voluptas tenetur laborum tempora, error ab eaque. Maxime et dicta
  cupiditate dolorum.`;
  return (
    <GroupDescription
      gsapRef={container}
      title={title}
      description={description}
    />
  );
};

export default GroupDescriptionContainer;

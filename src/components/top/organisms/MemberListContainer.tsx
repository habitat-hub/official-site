"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MemberInformation } from "../molecules/ui/MemberCard";
import MemberList from "./ui/MemberList";

const memberInformationList: MemberInformation[] = [
  {
    name: "mellbrother",
    imageUrl: "/memberImage/Mellbrother.jpeg",
    details: [
      { title: "Role", description: "Full Stack Developer / Project Manager" },
      {
        title: "Who?",
        description:
          "静岡でリモートワークしているエンジニア。<br/>趣味はキャンプ・ツーリング・ボドゲ。",
      },
      {
        title: "GitHub",
        description: "@Mellbrother",
        url: "https://github.com/Mellbrother",
      },
      {
        title: "Skills",
        description:
          "TypeScript / React / Next.js / NodeJS  / Express / ReactNative",
      },
    ],
  },
  {
    name: "tom-takeru",
    imageUrl: "/memberImage/tom-takeru.jpeg",
    details: [
      { title: "Role", description: "Full Stack Developer / Project Manager" },
      {
        title: "Who?",
        description:
          "都内に本社のあるIT企業に所属するエンジニア。開発が好き。ボードゲームが好き。",
      },
      {
        title: "GitHub",
        description: "@tom-takeru",
        url: "https://github.com/tom-takeru",
      },
      {
        title: "Skills",
        description:
          "TypeScript / React / Next.js / Angular / ReactNative / Express / Java / Spring Boot / Ruby / Docker",
      },
    ],
  },
  {
    name: "atok",
    imageUrl: "/memberImage/atok.jpeg",
    details: [
      { title: "Role", description: "Full Stack Developer" },
      {
        title: "Who?",
        description: "都内のIT企業に所属するエンジニア。辛い食べ物が好き。",
      },
      {
        title: "GitHub",
        description: "@atoook",
        url: "https://github.com/atoook",
      },
      {
        title: "Skills",
        description: "TypeScript / React / Next.js / ReactNative / Java",
      },
    ],
  },
  {
    name: "kzk",
    imageUrl: "/memberImage/kzk.png",
    details: [
      { title: "Role", description: "Frontend Developer" },
      {
        title: "Who?",
        description:
          "都内に本社のあるIT企業に所属するエンジニア。MARVELと散歩が好き。",
      },
      {
        title: "GitHub",
        description: "@kzk27",
        url: "https://github.com/kzk27",
      },
      {
        title: "Skills",
        description:
          "HTML / CSS / JavaScript / TypeScript / React / Next.js / ReactNative",
      },
    ],
  },
];

const animateElement = (elementClass: string) => {
  gsap.to(elementClass, {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: elementClass,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
      markers: false,
    },
  });
};

const MemberListContainer: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  useGSAP(
    () => {
      animateElement(".members__heading");
      animateElement(".members__body");
    },
    { scope: container }
  );

  return (
    <MemberList
      gsapRef={container}
      title="Members"
      memberInformationList={memberInformationList}
    />
  );
};

export default MemberListContainer;

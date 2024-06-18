"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MemberCard from "./MemberCard";

export type MemberInformation = {
  name: string;
  imageUrl: string;
  details: { title: string; description: string; url?: string }[];
};

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
    name: "kazukiiii",
    imageUrl: "/background.jpeg",
    details: [
      { title: "Role", description: "Digital Marketing" },
      { title: "経歴", description: "SEO, PPC campaigns" },
      { title: "スキルセット", description: "Google Analytics, SEMrush" },
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

const MemberList: React.FC = () => {
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
    <section className="p-8 bg-dark max-w-full" ref={container}>
      <div className="text-center">
        <h2 className="members__heading font-fantasy text-3xl font-bold inline-block border-b border-current opacity-0 scale-50">
          Members
        </h2>
      </div>
      <div className="members__body mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0">
        {memberInformationList.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

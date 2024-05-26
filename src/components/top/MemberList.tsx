import React from "react";
import MemberCard from "./MemberCard";

export type MemberInformation = {
  name: string;
  imageUrl: string;
  details: { title: string; description: string; url?: string }[];
};

const memberInformationList: MemberInformation[] = [
  {
    name: "mellbrother",
    imageUrl: "/background.jpeg",
    details: [
      { title: "Role", description: "User Experience Design" },
      { title: "経歴", description: "App redesign, Website overhaul" },
      { title: "スキルセット", description: "Sketch, Figma, Adobe XD" },
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
    imageUrl: "/background.jpeg",
    details: [
      { title: "Role", description: "Project Coordination" },
      {
        title: "経歴",
        description: "Multiple cross-disciplinary projects",
      },
      { title: "スキルセット", description: "Jira, Trello, Slack" },
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

const MemberList: React.FC = () => {
  return (
    <section className="p-8 bg-dark max-w-full">
      <div className="text-center">
        <h2 className="font-fantasy text-3xl font-bold inline-block border-b border-current">
          Members
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {memberInformationList.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

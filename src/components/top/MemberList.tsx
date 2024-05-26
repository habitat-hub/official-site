import React from "react";
import MemberCard from "./MemberCard";

export type Member = {
  name: string;
  role: string;
  imageUrl: string;
  details: { title: string; description: string }[];
};

const members: Member[] = [
  {
    name: "mellbrother",
    role: "Designer",
    imageUrl: "/background.jpeg",
    details: [
      { title: "自己紹介", description: "User Experience Design" },
      { title: "経歴", description: "App redesign, Website overhaul" },
      { title: "スキルセット", description: "Sketch, Figma, Adobe XD" },
    ],
  },
  {
    name: "tom-takeru",
    role: "Developer",
    imageUrl: "/background.jpeg",
    details: [
      { title: "自己紹介", description: "Frontend Development" },
      {
        title: "経歴",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro optio obcaecati, qui placeat repudiandae, fugiat ab sapiente amet in ut quia quae suscipit id. Aperiam molestias libero quia esse!",
      },
      { title: "スキルセット", description: "React, TypeScript, Node.js" },
    ],
  },
  {
    name: "atok",
    role: "Project Manager",
    imageUrl: "/background.jpeg",
    details: [
      { title: "自己紹介", description: "Project Coordination" },
      {
        title: "経歴",
        description: "Multiple cross-disciplinary projects",
      },
      { title: "スキルセット", description: "Jira, Trello, Slack" },
    ],
  },
  {
    name: "kazukiiii",
    role: "Marketer",
    imageUrl: "/background.jpeg",
    details: [
      { title: "自己紹介", description: "Digital Marketing" },
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
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MemberList;

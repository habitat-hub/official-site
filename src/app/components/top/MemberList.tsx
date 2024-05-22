import React from "react";
import Image from "next/image";

const members = [
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
          <div
            key={index}
            className="border-[0.5px] border-t-[12px] rounded-lg border-light p-6 flex flex-col md:flex-row md:items-center"
          >
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <Image
                src={member.imageUrl}
                alt={member.name}
                className="rounded-lg w-24 h-24 object-cover"
                width={96}
                height={96}
                priority
              />
              <div className="mt-2 text-start">
                <div className="text-light">{member.name}</div>
              </div>
            </div>
            <div className="flex-1 space-y-4 ml-6">
              {member.details.map((detail, index) => (
                <div key={index}>
                  <h4 className="font-bold text-light">{detail.title}</h4>
                  <p className="text-light">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberList;

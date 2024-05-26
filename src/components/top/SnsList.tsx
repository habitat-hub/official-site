import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { SiZenn } from "react-icons/si";

const SnsList: React.FC = () => {
  const buttons = [
    { name: "GitHub", url: "https://github.com/habitat-hub" },
    { name: "Qiita", url: "https://qiita.com/organizations/habitatHub" },
    { name: "Zenn", url: "https://zenn.dev/p/habitat_hub" },
  ];

  return (
    <section className="p-8 bg-light-dark text-light flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-2xl mb-[3px]">SNS</h2>
        <div className="w-full border-b-2 border-light mb-10"></div>
      </div>
      <div className="w-[300px]">
        <div className="flex justify-around text-4xl">
          {buttons.map((button, index) => (
            <a
              key={index}
              aria-describedby={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex item-center rounded hover:bg-slate-600 p-4"
            >
              {button.name === "GitHub" ? (
                <FaGithub />
              ) : button.name === "Qiita" ? (
                <SiQiita />
              ) : button.name === "Zenn" ? (
                <SiZenn />
              ) : (
                button.name
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnsList;

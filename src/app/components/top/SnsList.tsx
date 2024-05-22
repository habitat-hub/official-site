import React from "react";

const SnsList: React.FC = () => {
  const buttons = [
    { label: "Qiita", url: "https://qiita.com" },
    { label: "Zenn", url: "https://zenn.dev" },
    { label: "GitHub", url: "https://github.com" },
  ];

  return (
    <section className="p-8 bg-light-dark text-light flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-2xl mb-[3px]">SNS</h2>
        <div className="w-full border-b-2 border-light mb-10"></div>
      </div>
      <div className="w-[300px]">
        <div className="flex justify-around">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-[#7f5af0] hover:bg-dark-light text-white text-center"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnsList;

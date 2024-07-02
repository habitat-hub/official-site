import React from "react";

type FooterProps = {
  copyright: string;
};

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="w-full p-2 text-center text-sm bg-dark text-light">
      {copyright}
    </footer>
  );
};

export default Footer;

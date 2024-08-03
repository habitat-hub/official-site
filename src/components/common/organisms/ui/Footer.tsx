import React from "react";

type Props = {
  copyright: string;
};

const Footer: React.FC<Props> = ({ copyright }) => {
  return (
    <footer className="w-full p-2 text-center text-sm text-light">
      {copyright}
    </footer>
  );
};

export default Footer;

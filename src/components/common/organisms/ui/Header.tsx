import Image from "next/image";
import React from "react";

type Props = {
  siteTitle: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  onLogoClick: () => void;
};

const Header: React.FC<Props> = ({ siteTitle, logo, onLogoClick }) => (
  <header
    className="w-full p-4 flex md:justify-start items-center bg-dark cursor-pointer"
    onClick={onLogoClick}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className="object-cover opacity-75 mr-[10px]"
    />
    <div className="text-center md:text-left">
      <h1 className="font-fantasy text-lg md:text-xl">{siteTitle}</h1>
    </div>
  </header>
);

export default Header;

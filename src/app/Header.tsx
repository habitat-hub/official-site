import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 flex md:justify-start items-center bg-dark">
      <Image
        src="/logo.jpg"
        alt="ロゴ"
        width={25}
        height={25}
        className="object-cover opacity-75 mr-[10px]"
      />
      <div className="text-center md:text-left">
        <h1 className="font-fantasy text-lg md:text-xl">Habitat Hub</h1>
      </div>
    </header>
  );
};

export default Header;

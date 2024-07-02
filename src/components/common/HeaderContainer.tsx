"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Header from "./ui/Header";

const HeaderContainer: React.FC = () => {
  const router = useRouter();

  const logo = {
    src: "/logo.jpg",
    alt: "Habitat Hub Logo",
    width: 25,
    height: 25,
  };
  const onLogoClick = () => router.push("/");

  return (
    <Header siteTitle="Habitat Hub" logo={logo} onLogoClick={onLogoClick} />
  );
};

export default HeaderContainer;

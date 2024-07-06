"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PortfolioList from "./ui/PortfolioList";

const PortfolioListContainer: React.FC = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ dafaults: { ease: "power-2.inOut" } });
      tl.fromTo(".portfolio__heading", { y: 100 }, { y: 0, opacity: 1 }, "+=2");
      tl.fromTo(".portfolio__body", { y: 100 }, { y: 0, opacity: 1 });
    },
    { scope: container }
  );

  const portfolios = [
    {
      title: "Daydule",
      imageUrl: "/portfolio/daydule/daydule_icon.png",
      href: "/portfolio/daydule",
    },
    {
      title: "Time is Money",
      imageUrl: "/portfolio/time-is-money/time-is-money_icon.png",
      href: "/portfolio/time-is-money",
    },
    { title: "Coming Soon ...", imageUrl: "/background.jpeg" },
    { title: "Coming Soon ...", imageUrl: "/background.jpeg" },
  ];

  return (
    <PortfolioList
      gsapRef={container}
      title="Portfolio"
      portfolios={portfolios}
    />
  );
};

export default PortfolioListContainer;

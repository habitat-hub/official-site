"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

const GroupDescription: React.FC = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ dafaults: { ease: "power-2.inOut" } });
      tl.fromTo(
        ".description__image",
        { scale: 1 },
        { scale: 1, opacity: 0.75, duration: 1.1 }
      );
      tl.fromTo(
        ".description__heading",
        { y: 20, scale: 0.5 },
        { y: 0, scale: 1, opacity: 1, duration: 1.1 },
        "-=0.7"
      );
      tl.fromTo(".description__body", { scale: 0.5 }, { scale: 1, opacity: 1 });
    },
    { scope: container }
  );
  return (
    <section
      className="relative w-full h-[400px] bg-dark text-light"
      ref={container}
    >
      <Image
        src="/background.jpeg"
        alt="Background"
        layout="fill"
        className="description__image w-full h-full object-cover opacity-30"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
        <div className="description__heading text-center opacity-0">
          <h2 className="font-fantasy text-3xl font-bold mb-2">
            Habitat Hub とは
          </h2>
          <div className="w-full border-b-2 border-light mb-10"></div>
        </div>
        <p className="description__body text-center mx-auto leading-relaxed max-w-2xl opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          possimus in vero fugit provident dolorum ullam necessitatibus nesciunt
          voluptas tenetur laborum tempora, error ab eaque. Maxime et dicta
          cupiditate dolorum.
        </p>
      </div>
    </section>
  );
};

export default GroupDescription;

import React from "react";

import Image from "next/image";

type Props = {
  gsapRef: React.MutableRefObject<null>;
  title: string;
  description: string;
};

const GroupDescription: React.FC<Props> = ({ gsapRef, title, description }) => (
  <section
    className="relative w-full h-[400px] bg-dark text-light"
    ref={gsapRef}
  >
    <Image
      src="/background.jpeg"
      alt="Background"
      fill
      style={{
        objectFit: "cover",
      }}
      priority={true}
      className="description__image w-full h-full object-cover opacity-30"
    />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
      <div className="description__heading text-center opacity-0">
        <h2 className="font-fantasy text-3xl font-bold mb-2">{title}</h2>
        <div className="w-full border-b-2 border-light mb-10"></div>
      </div>
      <p className="description__body text-center mx-auto leading-relaxed max-w-2xl opacity-0">
        {description}
      </p>
    </div>
  </section>
);

export default GroupDescription;

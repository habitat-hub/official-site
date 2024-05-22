import React from "react";
import Image from "next/image";

const GroupDescription: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] text-light">
      <Image
        src="/background.jpeg"
        alt="Background"
        layout="fill"
        className="w-full h-full object-cover opacity-75"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <h2 className="font-fantasy text-3xl font-bold mb-2">
            Habitat Hub とは
          </h2>
          <div className="w-full border-b-2 border-light mb-10"></div>
        </div>
        <p className="text-center mx-auto leading-relaxed max-w-2xl">
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

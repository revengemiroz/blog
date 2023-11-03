import React from "react";
import Image from "next/image";

function Heros() {
  return (
    <div className="flex items-center justify-center max-w-5xl">
      <div className="flex flex-row items-center">
        <div className="relative  w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={"/documents.png"}
            fill
            className="object-contain dark:hidden"
            alt="hero pic"
          />
          <Image
            src={"/documents-dark.png"}
            fill
            className="object-contain hidden dark:block"
            alt="hero pic"
          />
        </div>

        <div className="relative  w-[400px] h-[400px] hidden md:block">
          <Image
            src={"/reading.png"}
            fill
            className="object-contain dark:hidden"
            alt="hero pic"
          />
          <Image
            src={"/reading-dark.png"}
            fill
            className="object-contain hidden dark:block"
            alt="hero pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Heros;

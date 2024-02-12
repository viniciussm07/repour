import React from "react";
import Image from "next/image";

import logo from "../../public/logos/logo.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen md:flex md:items-center md:justify-center bg-cover bg-no-repeat bg-top md:bg-fixed bg-neutral-800 bg-[url('/our-photos/churrasco-dos-pais-2024.webp')] md:bg-[url('/our-photos/reencontrOUR.jpeg')] tracking-wide"
    >
      <div className="pt-28 flex items-center justify-center flex-col">
        <div className="w-20 h-20 md:w-80 md:h-80">
          <Image width={400} src={logo} alt="A República OUR" />
        </div>
        <h1 className="text-yellow-400 text-2xl md:text-3xl pt-4 drop-shadow-3xl">
          República Our - São Carlos SP
        </h1>
      </div>
    </section>
  );
}

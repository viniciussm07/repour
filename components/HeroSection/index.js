import React from "react";
import Image from "next/image";

import logo from "../../public/logos/logo.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-no-repeat bg-top md:bg-fixed bg-neutral-800 bg-[url('/our-photos/churrasco-dos-pais-teste.jpg')] md:bg-[url('/our-photos/reencontrOUR.jpeg')] tracking-wide"
    >
      <div className="hidden md:flex items-center justify-center flex-col">
        <div className="w-80 h-80">
          <Image width={400} src={logo} alt="A Rep OUR" />
        </div>
        <p className="text-yellow-400 text-3xl pt-4 ">
          NASCIDO PARA SER REP OUR
        </p>
      </div>
    </section>
  );
}

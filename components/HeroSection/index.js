import React from "react";
import Image from "next/image";

import logo from "../../public/logos/logo.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-cover bg-fixed bg-[url('/our-photos/reencontrrOUR.jpeg')] h-screen tracking-wide -z-50"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="w-80 h-80">
          <Image width={400} src={logo} alt="A Rep OUR"/>
        </div>
        <p className="text-yellow-600 text-3xl drop-shadow-3xl pt-4">
          NASCIDO PARA SER REP OUR
        </p>
      </div>
    </section>
  );
}

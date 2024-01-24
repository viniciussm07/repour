import React from "react";
import Image from "next/image";

import penajaca from "../../public/our-photos/pe-na-jaca-2023.webp";

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="bg-neutral-800 flex flex-col items-center bg-blur p-8 text-white"
      >
      <h2 className="text-4xl pb-5">Quem Somos</h2>
      <div className="flex">
      <div className="flex-1 m-16 ">
        <div className="text-2xl">
          <p className="indent-5 mb-20">
            A República OUR foi fundada em 2011 em São Carlos, quando alguns
            estudantes de Engenharia de Materiais da USP decidiram morar juntos.
            Ao longo dos anos, a república cresceu, unindo pessoas de diversas
            faculdades da cidade, tais como
            <span className="text-red-700"> UFSCar, USP, IFSP e Unicep.</span>
          </p>
          <a
            className="bg-red-700 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 tracking-wider"
            href="#contato"
          >
            Venha participar dessa família!
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 m-4">
        <div className="p-10">
          <Image src={penajaca} alt="Festa Pé na Jaca" width={650} />
        </div>
      </div>
      </div>
    </section>
  );
}

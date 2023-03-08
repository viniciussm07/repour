import React from "react";
import Image from "next/image";

import churras from "../../public/our-photos/24.jpeg";

export default function AboutSection() {
  return (
    <section
      id="sobre-nos"
      className="bg-neutral-800 flex flex-row bg-blur pt-10 pb-16"
    >
      <div className="flex-1 m-16 text-red-700">
        <h2 className="text-4xl pb-5">Sobre Nós</h2>
        <div className="text-xl">
          <p className="indent-5">
            A República OUR foi fundada em 2011, quando alguns estudantes de
            Engenharia de Materiais da USP resolveram morar juntos. Daí a rep
            foi crescendo, e em 2013 os moradores criaram o que se tornaria a
            maior festa de repúblicas de São Carlos, a grandiosa OURgia.
          </p>
          <p className="indent-5">
            A festa que começou em uma garagem, hoje se tornou um rolê pra mais
            de 5000 pessoas, trazendo gente da cidade e região. Como? Por conta
            de muita cerveja gelada, mêses de organização e atrações brabas
            como: Bonde do Tigrão, MC Davi, Yuri Martins, Chemical Surf, entre
            outras. Além disso, o projeto OURgia ajuda a desenvolver várias
            habilidades extra-curriculares pra quem organiza, como senso de
            urgência, comunicação interpessoal, raciocínio lógico, habilidades
            que ajudam muito, inclusive dentro do ambiente de trabalho.
          </p>
          <p className="indent-5">
            Os antigos moradores foram se formando para trabalhar em grandes
            empresas do Brasil, assim renovando os moradores da casa todo ano,
            sendo os atuais de diversos cursos das duas maiores universidades de
            São Carlos: USP e UFSCar.
          </p>
        </div>
      </div>
      <div className="flex-1 mt-4">
        <div className="w-3/4 bg-white block rotate-6 pt-10 pr-10 pl-10 pb-28">
          <Image className="" width={400} height={500} src={churras} />
        </div>
      </div>
    </section>
  );
}

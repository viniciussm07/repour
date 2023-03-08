import React from "react";
import Image from "next/image";

import churras from "../../public/our-photos/24.jpeg";

export default function InfosSection() {
  return (
    <section id="infos" className="flex items-center justify-center bg-red-700">
      <div className="flex-1 mt-4">
        <div className="w-3/4 bg-white block -rotate-6 pt-10 pr-10 pl-10 pb-28">
          <Image className="" width={400} height={500} src={churras} />
        </div>
      </div>
      <div className="flex-1 m-16 text-neutral-900">
        <h2 className="text-4xl pb-5">Infos</h2>
        <div className="text-xl">
          <ul>
            <li>5 Quartos 4 banheiros</li>
            <li>Sala de estudos e acervo de livros</li>
            <li>- Compras
            comuns e mercado inclusos </li>
            <li>Gastos entre 500 - 550</li>
            <li>- Mesa de sinuca</li>
            <li>Faxineira Semanalmente</li>
            <li>Duas dogs Lola e Mia</li>
            <li>Televisão 54" e
            Wi-fi 300Mb</li>
            <li>Playstation 4 com + de 200 jogos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

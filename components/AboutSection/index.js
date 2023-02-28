import React from "react";
import Image from "next/image";

import churras from "../../public/our-photos/24.jpeg";

export default function AboutSection() {
  return (
    <section id="sobre-nos" className="bg-red-700 flex flex-row bg-blur py-10">
      <div className="flex-1 m-16 text-neutral-900">
        <h2 className="text-4xl pb-5">Sobre Nós</h2>
        <div className="text-xl">
          <p>Faala bixão!</p><p>
             Você está procurando uma casa para morar durante o seu
            tempo universitário?
          </p> Nós temos a solução ideal para você! Temos uma
          república com 5 quartos, 4 banheiros, internet de alta velocidade de
          300Mb, televisão 4k e uma sala de estudos para os momentos de estudo e
          trabalho. Além disso, temos 2 cachorras super amigáveis para você se
          divertir. A república também oferece faxina semanal para você ter uma
          casa sempre limpa e organizada. E se você gosta de entretenimento,
          temos diversos serviços de streaming para você curtir seus filmes e
          séries favoritas. Por fim, fazemos compras comuns para que você não
          precise se preocupar com esses pequenos detalhes. Venha fazer parte da
          nossa república e tenha uma ótima experiência universitária!
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

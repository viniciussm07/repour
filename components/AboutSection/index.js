import React from "react";
import Image from "next/image";

import churras from "../../public/our-photos/24.jpeg";

export default function AboutSection() {
  return (
    <section id="sobre-nos" className="flex flex-row bg-blur">
      <div className="flex-1 m-16">
        <h2 className="text-4xl pb-5">Sobre Nós</h2>
        <p>
          Ut et adipisicing in ipsum ea dolore occaecat cillum. Ut magna ipsum
          ad eiusmod. Voluptate laboris duis ex magna duis sint laboris nisi
          proident eu eiusmod amet dolore. Duis sint aliquip non exercitation.
          Nisi magna minim sunt deserunt fugiat labore eu incididunt. Deserunt
          non sint eu est incididunt nisi adipisicing eu mollit culpa. Aliqua et
          incididunt laboris quis ex consectetur do ex ea ex. Esse sunt magna
          anim veniam reprehenderit ea amet officia qui Lorem irure. Sunt qui
          proident cillum enim dolore ea ea irure mollit nulla tempor culpa
          minim ullamco. Eiusmod sit et sint tempor laborum adipisicing
          incididunt voluptate aute commodo. Nostrud est quis mollit nulla
          cupidatat veniam eiusmod. Eiusmod pariatur irure eu minim do magna ut
          labore excepteur velit et. Et deserunt excepteur ut dolore tempor.
          Sint tempor veniam qui fugiat. Officia veniam est sit commodo anim
          consequat id excepteur. Eu labore quis sunt laboris et Lorem occaecat
          nisi. Sunt laboris consectetur excepteur non. Duis consequat cillum do
          reprehenderit et duis aute id incididunt consequat ullamco elit. Sit
          quis magna sint eu ea sint reprehenderit elit dolore esse officia
          labore. Enim voluptate amet excepteur culpa et ea occaecat nulla
          cillum. Sint dolore aute cillum nisi laboris pariatur culpa enim ex
          do. Est aliqua enim et officia velit mollit sunt tempor enim aliquip
          est. Quis est irure sunt consequat exercitation amet labore.
        </p>
      </div>
      <div className="flex-1">
        <Image className="rotate-6" width={500} height={500} src={churras} />
      </div>
    </section>
  );
}

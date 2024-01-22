import React from "react";
import PhotoProfile from "./PhotoProfile";

import xeng from "../../public/residents/xeng.jpeg"
import daiane from "../../public/residents/daiane.jpg"
import ribery from "../../public/residents/ribery.jpg"
import japao from "../../public/residents/japao.jpg"
import nelly from "../../public/residents/nelly.jpg"
import monicao from "../../public/residents/monicao-teste.jpg"
import meiokilo from "../../public/residents/meiokilo.jpg"
import rasputia from "../../public/residents/rasputia.jpg"


export default function ResidentsSection() {
  return (
    <section
      id="moradores"
      className="flex flex-col items-center py-10 justify-center bg-neutral-800 text-white"
    >
      <h1 className="text-4xl pb-5">Moradores</h1>
      <div className="grid-rows-1 text-2xl text-center">
        <ul className="flex flex-1 m-5">
          <li>Xeng <PhotoProfile profileImage={xeng}/></li>
          <li>Ribery <PhotoProfile profileImage={ribery}/></li>
          <li>Japão <PhotoProfile profileImage={japao}/></li>
          <li>Daiane <PhotoProfile profileImage={daiane}/></li>
        </ul>
        <ul className="flex flex-1 m-5">
          <li>Nelly <PhotoProfile profileImage={nelly}/></li>
          <li>Monicão <PhotoProfile profileImage={monicao}/></li>
          <li>Meio Kilo <PhotoProfile profileImage={meiokilo}/></li>
          <li>Rasputia <PhotoProfile profileImage={rasputia}/></li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import PhotoProfile from "./PhotoProfile";

import xeng from "../../public/residents/xeng.jpeg"
import daiane from "../../public/residents/daiane.jpg"
import ribery from "../../public/residents/ribery.jpg"
import japao from "../../public/residents/japao.jpg"
import nelly from "../../public/residents/nelly.jpg"
import monicao from "../../public/residents/monicao.jpg"
import meiokilo from "../../public/residents/meiokilo.jpg"
import rasputia from "../../public/residents/rasputia.jpg"


export default function ResidentsSection() {
  return (
    <section
      id="moradores"
      className="flex flex-col items-center py-10 justify-center bg-red-700 text-white"
    >
      <h2 className="text-4xl pb-8">Moradores</h2>
      <div className="grid-rows-1 text-2xl text-center">
        <ul className="flex flex-1 mb-10">
          <li>Xeng <PhotoProfile profileImage={xeng}/><span className="text-xl">018 - USP</span></li>
          <li>Ribery <PhotoProfile profileImage={ribery}/><span className="text-xl">019 - UFSCar</span></li>
          <li>Japão <PhotoProfile profileImage={japao}/><span className="text-xl">019 - UFSCar</span></li>
          <li>Daiane <PhotoProfile profileImage={daiane}/><span className="text-xl">019 - UFSCar</span></li>
        </ul>
        <ul className="flex flex-1 mb-10">
          <li>Nelly <PhotoProfile profileImage={nelly}/><span className="text-xl">021 - USP</span></li>
          <li>Monicão <PhotoProfile profileImage={monicao}/><span className="text-xl">022 - USP</span></li>
          <li>Meio Kilo <PhotoProfile profileImage={meiokilo}/><span className="text-xl">023 - UFSCar</span></li>
          <li>Rasputia <PhotoProfile profileImage={rasputia}/><span className="text-xl">023 - UFSCar</span></li>
        </ul>
      </div>
    </section>
  );
}

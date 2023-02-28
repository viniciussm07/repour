import React from "react";
import PhotoProfile from "./PhotoProfile";
import Image from "next/image";

import dylon from "../../public/residents/dylon.jpg"
import gretchen from "../../public/residents/gretchen.jpg"
import xeng from "../../public/residents/xeng.jpeg"
import daiane from "../../public/residents/daiane.jpg"
import ribery from "../../public/residents/ribery.jpg"
import japao from "../../public/residents/japao.jpg"
import nelly from "../../public/residents/nelly.jpg"
import monicao from "../../public/residents/monicao-teste.jpg"
import chris from "../../public/residents/chris.jpg"


export default function ResidentsSection() {
  return (
    <section
      id="moradores"
      className="flex flex-col items-center py-10 justify-center bg-red-700"
    >
      <h1 className="text-4xl pb-5">Moradores</h1>
      <div className="grid-rows-1 text-2xl">
        <ul className="flex flex-1 m-5">
          <li>Dylon <PhotoProfile profileImage={dylon}/></li>
          <li>Gretchen <PhotoProfile profileImage={gretchen}/></li>
          <li>Xeng <PhotoProfile profileImage={xeng}/></li>
          <li>Ribery <PhotoProfile profileImage={ribery}/></li>
        </ul>
        <ul className="flex-1 m-5">
          <li>Japão <PhotoProfile profileImage={japao}/></li>
          <li>Daiane <PhotoProfile profileImage={daiane}/></li>
          <li>Nelly <PhotoProfile profileImage={nelly}/></li>
          <li>Mônicão <PhotoProfile profileImage={monicao}/></li>
          <li>Chris <PhotoProfile profileImage={chris}/></li>
        </ul>
      </div>
    </section>
  );
}

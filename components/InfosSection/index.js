import React from "react";
import { MdCleaningServices, MdLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


export default function InfosSection() {
  return (
    <section id="infos" className="flex items-center p-8 bg-red-700">
      <div className="flex items-center justify-center flex-1 m-4">
        <div className="p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14796.98168215833!2d-47.8948708!3d-22.0019055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b871a2a7372dbd%3A0x8cb00b9c3769da9d!2sRep%C3%BAblica%20OUR!5e0!3m2!1spt-BR!2sbr!4v1705950430903!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex-1 m-16 text-white">
        <h2 className="text-4xl pb-5">Infos</h2>
        <div className="text-3xl indent-5">
          <ul className="space-y-5">
            <li>
              <MdLocationOn size={50} className="inline-block" />
              Nos localizamos a{" "}
              <span className="text-yellow-600">600m da USP </span>e a{" "}
              <span className="text-yellow-600">
                200m de um ponto de ônibus para UFSCar
              </span>
              ;
            </li>
            <li>
              <MdCleaningServices size={50} className="inline-block" />
              <span className="text-yellow-600"> Faxina</span> semanal;
            </li>
            <li>
              <RiMoneyDollarCircleLine size={50} className=" inline-block" />{" "}
              Gastos de aproximadamente
              <span className="text-yellow-600"> R$650,00 </span>
              compras comuns e mercado inclusos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { MdCleaningServices, MdLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default function InfosSection() {
  return (
    <section
      id="infos"
      className="flex flex-col items-center p-2 md:p-8 bg-red-700 text-white"
    >
      <h2 className="text-3xl md:text-4xl py-5">Infos</h2>
      <div className="md:flex">
        <div className="flex-1 m-8 md:mb-20">
          <div className="text-xl md:text-3xl">
            <ul className="space-y-5">
              <li>
                <MdLocationOn size={40} className="inline-block" />
                Nos localizamos a{" "}
                <span className="text-yellow-400">600m da USP </span>e a{" "}
                <span className="text-yellow-400">
                  200m de um ponto de ônibus para UFSCar
                </span>
                ;
              </li>
              <li>
                <MdCleaningServices size={40} className="inline-block" />
                <span className="text-yellow-400"> Faxina</span> semanal;
              </li>
              <li>
                <RiMoneyDollarCircleLine size={40} className=" inline-block" />{" "}
                Gastos de aproximadamente
                <span className="text-yellow-400"> R$650,00 </span>
                compras comuns e mercado inclusos;
              </li>
              <li>
                <BsFillHouseDoorFill size={40} className=" inline-block" />{" "}
                <span className="text-yellow-400">
                  5 quartos e 4 banheiros.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 m-4">
          <div className="w-full p-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14796.98168215833!2d-47.8948708!3d-22.0019055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b871a2a7372dbd%3A0x8cb00b9c3769da9d!2sRep%C3%BAblica%20OUR!5e0!3m2!1spt-BR!2sbr!4v1705950430903!5m2!1spt-BR!2sbr"
                loading="lazy"
                width="100%"
                height="100%"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link as Links } from "react-scroll";

export default function MobileMenu() {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center text-2xl">
      <div className="bg-neutral-600 w-11/12 h-5/6 rounded-lg p-4 flex justify-center">
        <ul className="flex flex-col p-4 mt-4 ">
          <li>
            <Links
              href="#quem-somos"
              to="quem-somos"
              className="block py-5 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700"
              smooth={true}
              duration={600}
              spy={true}
              exact="true"
              offset={-135}
            >
              Quem Somos
            </Links>
          </li>
          <li>
            <Links
              href="#infos"
              to="infos"
              className="block py-5 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
              smooth={true}
              duration={600}
              spy={true}
              exact="true"
              offset={-135}
            >
              Infos
            </Links>
          </li>
          <li>
            <Links
              href="#nossa-casa"
              to="nossa-casa"
              className="block py-5 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
              smooth={true}
              duration={600}
              spy={true}
              exact="true"
              offset={-135}
            >
              Nossa Casa
            </Links>
          </li>
          <li>
            <Links
              href="#moradores"
              to="moradores"
              className="block py-5 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
              smooth={true}
              duration={600}
              spy={true}
              exact="true"
              offset={-135}
            >
              Moradores
            </Links>
          </li>
          <li>
            <Links
              href="#contato"
              to="contato"
              className="block py-5 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
              smooth={true}
              duration={600}
              spy={true}
              exact="true"
              offset={-135}
            >
              Contato
            </Links>
          </li>
        </ul>
      </div>
    </div>
  );
}

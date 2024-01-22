import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Links } from "react-scroll";

import { FaInstagram } from "react-icons/fa";

import logo from "../../public/logos/logo.webp";

export default function Navbar() {
  return (
    <nav className="sticky z-10 bg-opacity-40 bg-black pb-3 top-0 -mt-28 tracking-wide">
      <div className="bg-red-700 h-9 mb-2" />
      <div className="container flex items-center justify-between mx-auto px-6 max-w-5xl w-full">
        <Links
          href="#home"
          to="home"
          smooth={true}
          duration={600}
          spy={true}
          exact="true"
          offset={-100}
        >
          <Image
            src={logo}
            className="h-20 w-20 mr-3"
            alt="República Our Logo"
          />
        </Links>
        <div className="flex items-center md:block" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0">
            <li>
              <Links
                href="#quem-somos"
                to="quem-somos"
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-500 hover:text-red-700 "
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-500 hover:text-red-700 "
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
                href="#moradores"
                to="moradores"
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-500 hover:text-red-700 "
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-500 hover:text-red-700 "
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
        <div>
          <Link
            href="https://www.instagram.com/instagrour/"
            aria-current="Instagram"
          >
            <FaInstagram className="h-9 w-9 text-red-700 hover:text-yellow-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

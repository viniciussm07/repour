import Image from "next/image";
import React from "react";
import logo from "../../public/logos/logo.webp";
import { Link as Links } from "react-scroll";

export default function Footer() {
  return (
    <footer id="contato" className="bg-neutral-800">
      <div className="w-full max-w-5xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Links
            href="#home"
            to="home"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-100}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-20 w-20 mr-3"
              alt="República Our Logo"
            />
          </Links>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li className="mr-2">
              <Links
                href="#quem-somos"
                to="quem-somos"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-135}
                className="hover:text-yellow-400"
              >
                Quem Somos
              </Links>
            </li>
            <li className="m-2">
              <Links
                href="#infos"
                to="infos"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-135}
                className="hover:text-yellow-400"
              >
                Infos
              </Links>
            </li>
            <li className="m-2">
              <Links
                href="#nossa-casa"
                to="nossa-casa"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-135}
                className="hover:text-yellow-400"
              >
                Nossa Casa
              </Links>
            </li>
            <li className="ml-2">
              <Links
                href="#moradores"
                to="moradores"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-135}
                className="hover:text-yellow-400"
              >
                Moradores
              </Links>
            </li>
          </ul>
          <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <a
              className="hover:text-yellow-400"
              href="https://wa.me/19998127987"
            >
              Contato: (19) 99812-7987
            </a>
          </div>
        </div>

        <hr className="my-6 border-neutral-500 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://repour.vercel.app/"
            className="hover:text-yellow-400"
          >
            Rep Our
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

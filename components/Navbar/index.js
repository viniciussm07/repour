import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Links } from "react-scroll";

import { FaInstagram, FaTimes } from "react-icons/fa";

import logo from "../../public/logos/logo.webp";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="sticky bg-opacity-40 bg-black pb-1 md:pb-3 top-0 -mt-28 tracking-wide z-20">
      <div className="bg-red-700 md:h-9 mb-2" />
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
            className="h-20 w-20 p-1 md:p-0"
            alt="República Our Logo"
          />
        </Links>
        <button
          onClick={handleToggle}
          type="button"
          className="z-10 inline-flex items-center mr-3 p-2 w-10 h-10 justify-center text-sm text-red-700 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none focus:ring-gray-600"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {navbarOpen ? (
            <FaTimes size={25} />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div className="hidden w-full md:block md:w-auto items-center">
          <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0">
            <li>
              <Links
                href="#quem-somos"
                to="quem-somos"
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700"
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
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
                className="block py-2 pl-3 pr-4 md:p-0 text-yellow-400 hover:text-red-700 "
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
        <div className="hidden md:block">
          <Link
            href="https://www.instagram.com/instagrour/"
            aria-current="Instagram"
          >
            <FaInstagram className="h-9 w-9 text-red-700 hover:text-yellow-400" />
          </Link>
        </div>
      </div>
      {navbarOpen ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-2xl">
          <div className="bg-neutral-800 w-11/12 h-screen rounded-lg p-4 flex justify-center text-center">
            <ul className="flex flex-col p-4 mt-20 ">
              <li>
                <Links
                  onClick={handleToggle}
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
                  onClick={handleToggle}
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
                  onClick={handleToggle}
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
                  onClick={handleToggle}
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
                  onClick={handleToggle}
                  href="#contato"
                  to="contato"
                  className="block py-5 pl-3 pr-4 text-yellow-400 hover:text-red-700 "
                  smooth={true}
                  duration={600}
                  spy={true}
                  exact="true"
                  offset={-135}
                >
                  Contato
                </Links>
              </li>
              <li className="flex items-center justify-center py-5 pl-3 pr-4 text-yellow-400 hover:text-red-700 ">
                <Link
                  href="https://www.instagram.com/instagrour/"
                  aria-current="Instagram"
                >
                  <FaInstagram className="h-9 w-9 text-yellow-400 hover:text-red-700" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

import logo from "../../public/logos/logo.PNG";

export default function Navbar() {
  return (
    <nav className="">
      <div className="bg-red-700 h-9 mb-2" />
      <div className="container flex items-center justify-between mx-auto px-6 max-w-5xl w-full">
        <Link href="/" className="">
          <Image
            src={logo}
            className="h-20 w-20 mr-3"
            alt="República Our Logo"
          />
        </Link>
        <div className="flex items-center md:block" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link
            href="https://www.instagram.com/instagrour/"
            aria-current="Instagram"
          >
            <FaInstagram className="h-9 w-9 text-red-700" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex items-center justify-center bg-neutral-800">
      <div className="flex-1 mt-4">
      </div>
      <div className="flex-1 m-16 text-red-700">
        <div className="text-xl">
          <h2 className="text-white">Contacts</h2>
          <ul className="">
            <li className="text-gray-300">Email: ourrep019@gmail.com</li>
            <li className="text-gray-300">Phone: (19) 99812-7987</li>
            <li className="text-gray-300">Address: 123 Main St, City, State</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

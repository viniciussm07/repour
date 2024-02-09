import React from "react";
import PhotoProfile from "./PhotoProfile";
import { Residents } from "./Residents";

export default function ResidentsSection() {
  const residents = Residents;
  return (
    <section
      id="moradores"
      className="flex flex-col items-center p-2 md:p-8 justify-center bg-red-700 text-white"
    >
      <h2 className="text-3xl md:text-4xl py-5">Moradores</h2>
        <ul className="grid grid-cols-3 md:gap-6">
          {residents.map((resident, index) => (
            <li className="flex flex-col items-center text-xl md:text-2xl text-center my-3" key={index}>
              {resident.name} <PhotoProfile profileImage={resident.image} />
              <span className="text-sm md:text-lg">
                {resident.year} - {resident.university}
              </span>
              <p className="text-sm md:text-lg">{resident.course}</p>
            </li>
          ))}
        </ul>
    </section>
  );
}

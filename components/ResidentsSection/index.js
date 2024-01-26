import React from "react";
import PhotoProfile from "./PhotoProfile";
import { Residents } from "./Residents";

export default function ResidentsSection() {
  const residents = Residents;
  const halfLength = Math.ceil(residents.length / 2);
  const firstHalf = residents.slice(0, halfLength);
  const secondHalf = residents.slice(halfLength);
  return (
    <section
      id="moradores"
      className="flex flex-col items-center py-10 justify-center bg-red-700 text-white"
    >
      <h2 className="text-4xl pb-8">Moradores</h2>
      <div className="grid grid-rows-1 text-2xl gap-8 text-center">
        <ul className="flex flex-1 mb-10">
          {firstHalf.map((resident, index) => (
            <li className="px-4" key={index}>
              {resident.name} <PhotoProfile profileImage={resident.image} />
              <span className="text-1xl">
                {resident.year} - {resident.university}
              </span>
              <p className="text-xl">{resident.course}</p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-1 mb-10">
          {secondHalf.map((resident, index) => (
            <li className="px-4" key={index}>
              {resident.name} <PhotoProfile profileImage={resident.image} />
              <span className="text-1xl">
                {resident.year} - {resident.university}
              </span>
              <p className="text-xl">{resident.course}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

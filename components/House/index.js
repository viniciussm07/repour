import React from "react";
import Slider from "./Slider";

const House = () => {
  return (
    <section
      id="nossa-casa"
      className="flex flex-col items-center py-10 justify-center text-white bg-neutral-800 text-white w-full h-auto"
    >
      <h2 className="text-3xl md:text-4xl py-5">Nossa Casa</h2>
      <div className="w-full flex flex-col space-x-4 py-10">
        <Slider />
      </div>
    </section>
  );
};

export default House;

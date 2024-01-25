import React from "react";
import Slider from "./Slider";

const House = () => {
  return (
    <section
      id="nossa-casa"
      className="flex flex-col items-center py-10 justify-center bg-neutral-800 text-white"
    >
      <h2 className="text-4xl pb-5 text-white">Nossa Casa</h2>
      <div className="flex items-center justify-center space-x-4">
        <Slider />
      </div>
    </section>
  );
};

export default House;

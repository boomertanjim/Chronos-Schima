// import { useState, useEffect } from "react";
import Circle from "./svg/Circle";
import Hexagon from "./svg/Hexagon";
import Pentagon from "./svg/Pentagon";
import Square from "./svg/Square";
import Star from "./svg/Star";
import Triangle from "./svg/Triangle";

const Canvas = ({ current }) => {
  const components = [Circle, Hexagon, Pentagon, Square, Star, Triangle];
  const Tab = components[current[0]];

  return (
    <div className="row-span-1 w-full h-full flex items-center justify-center">
      <div className="relative w-50 h-35 lg:w-80 lg:h-56 bg-text rounded-lg flex justify-center items-center">
        <div className="anim" style={{ color: current[1][0] }}>
          <Tab />
        </div>
        <img
          src="./dialogue.svg"
          alt=""
          className="absolute w-20 lg:w-27 top-4 left-25 lg:top-6 lg:left-46 anim"
        />
        <div className="w-33 h-14.5 absolute top-0.5 left-21 lg:top-3 lg:left-45.5 text-xl rounded-2xl flex justify-center items-center anim">
          <p>{current[2][0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Canvas;

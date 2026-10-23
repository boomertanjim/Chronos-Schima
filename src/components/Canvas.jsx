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
    <div className="col-span-1 w-full h-full flex items-center justify-center">
      <div className="relative w-100 h-70 bg-text rounded-lg flex justify-center items-center">
        <div className="anim" style={{ color: current[1][0] }}>
          <Tab />
        </div>
        <img
          src="./dialogue.svg"
          alt=""
          className="absolute w-40 top-6 left-57 anim"
        />
        <div className="w-33 h-14.5 absolute top-6 left-64 text-2xl rounded-2xl flex justify-center items-center anim">
          <p>{current[2][1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Canvas;

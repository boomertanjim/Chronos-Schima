import "./App.css";
import Canvas from "./components/Canvas";
import Cards from "./components/Cards";
import Control from "./components/Control";
import Header from "./components/Header";
import { useState, useEffect } from "react";

const shapes = {
  Circle: "./circle.svg",
  Hexagon: "./hexagon.svg",
  Pentagon: "./pentagon.svg",
  Square: "./square.svg",
  Star: "./star.svg",
  Triangle: "./triangle.svg",
};

const colors = {
  Blue: "0000FF",
  Green: "008000",
  Red: "FF2C2C",
  Cyan: "00FFFF",
  Yellow: "FFFF00",
  Purple: "9D00FF",
};

const texts = [
  "GG!",
  "Wow!",
  "Yo!",
  "Hello",
  "Huh?",
  "R we fr?",
  "Wassup?",
  "GingGong",
  "Larp",
  "Tung",
  "Hi",
  "Hi Lol",
  "Dang",
  "Son?",
  "<3",
  "Fr gng?",
  "Nuh uh",
  "MRQTPNJ...",
  "Oi kire!",
  "Abe oy!",
];

const data = [shapes, colors, texts];

function App() {
  const [current, setCurrent] = useState([]);
  const selectRandom = () => {
    let random;
    random = Math.floor(Math.random() * Object.keys(shapes).length);
    console.log("Random Selected 1: ", random);
    let shape = [Object.values(shapes)[random], random];

    random = Math.floor(Math.random() * Object.keys(colors).length);
    console.log("Random Selected 2: ", random);
    let color = [Object.values(colors)[random], random];

    random = Math.floor(Math.random() * Object.keys(texts).length);
    console.log("Random Selected 3: ", random);
    let text = [Object.values(texts)[random], random];

    setCurrent([shape, color, text]);
  };

  useEffect(() => {
    selectRandom();
    console.log("Current Stuff: ", current);
  }, []);

  return (
    <div
      className="w-screen h-screen grid grid-rows-11"
      onClick={console.log(current)}
    >
      <Header />
      <div className="grid row-span-10 grid-cols-2">
        <Cards />
        <div className="w-full h-full col-span-1 grid grid-rows-2">
          <Canvas />
          <Control />
        </div>
      </div>
    </div>
  );
}

export default App;

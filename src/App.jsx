import "./App.css";
import Canvas from "./components/Canvas";
import Cards from "./components/Cards";
import Control from "./components/Control";
import Header from "./components/Header";
import { useState } from "react";

const shapes = ["Circle", "Hexagon", "Pentagon", "Square", "Star", "Triangle"];

const colors = {
  Blue: "#0000FF",
  Green: "#008000",
  Red: "#FF2C2C",
  Cyan: "#00FFFF",
  Yellow: "#FFFF00",
  Purple: "#9D00FF",
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

// const data = [shapes, colors, texts];

function App() {
  const selectRandom = () => {
    let random;
    random = Math.floor(Math.random() * 5);
    console.log("Random Selected 1: ", random);
    let shape = random;

    random = Math.floor(Math.random() * Object.keys(colors).length);
    console.log("Random Selected 2: ", random);
    let color = [Object.values(colors)[random], random];

    random = Math.floor(Math.random() * Object.keys(texts).length);
    console.log("Random Selected 3: ", random);
    let text = [Object.values(texts)[random], random];

    return [shape, color, text];
  };
  const [score, setScore] = useState(0);
  const [expected] = useState(() => {
    const result = selectRandom();
    const s = shapes[result[0]];
    const c = result[1][0];
    const t = result[2][0];

    return [s, c, t];
  });
  const [current] = useState(() => {
    return selectRandom();
  });

  return (
    <div className="w-screen h-screen grid grid-rows-11">
      <Header score={score} />
      <div className="grid row-span-10 grid-cols-2">
        <Cards />
        <div className="w-full h-full col-span-1 grid grid-rows-2">
          <Canvas current={current} />
          <Control
            shapes={shapes}
            colors={colors}
            texts={texts}
            current={current}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Canvas from "./components/Canvas";
import Cards from "./components/Cards";
import Control from "./components/Control";
import Header from "./components/Header";
import { useEffect, useState } from "react";

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
  "Gng?",
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
  "My bad",
  "Mmmm!",
];

function App() {
  const selectRandom = () => {
    let random;
    random = Math.floor(Math.random() * 5);
    let shape = random;

    random = Math.floor(Math.random() * Object.keys(colors).length);
    let color = [Object.values(colors)[random], random];

    random = Math.floor(Math.random() * Object.keys(texts).length);
    let text = [Object.values(texts)[random], random];

    return [shape, color, text];
  };
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(150);
  const [answer, setAnswer] = useState(["", "", ""]);
  const [done, setDone] = useState(false);
  const [restart, setRestart] = useState(false);
  const [current, setCurrent] = useState(() => selectRandom());
  const [expected, setExpected] = useState(() => {
    const result = current.map((val) => val);
    const s = shapes[result[0]];
    const c = Object.keys(colors)[result[1][1]];
    const t = result[2][0];

    return [s, c, t];
  });

  const validated = answer.map((val, i) => {
    if (val === "") {
      return 0;
    } else if (val === expected[i]) {
      return 1;
    } else {
      return 2;
    }
  });

  useEffect(() => {
    const ref = async (j) => {
      setScore((prev) => prev + j * 3);
    };
    if (done) {
      const count = validated.filter((item) => item === 1).length;

      ref(count);
    }
  }, [done]);

  useEffect(() => {
    console.log("Expected: ", expected);
    console.log("Current Answer: ", answer);
    console.log("Current Validation State: ", validated);
  }, [answer, validated, expected]);

  useEffect(() => {
    async function ref() {
      const newCurrent = selectRandom();
      setCurrent(newCurrent);
      setAnswer(["", "", ""]);
      const s = shapes[newCurrent[0]];
      const c = Object.keys(colors)[newCurrent[1][1]];
      const t = newCurrent[2][0];
      setExpected([s, c, t]);
      setDone(false);
      setRestart(true);
    }
    if (done == true) {
      ref();
    }
  }, [done]);

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="w-screen h-screen grid grid-rows-11">
      <Header score={score} time={time} />
      <div className="grid row-span-10 grid-cols-2">
        <Cards />
        <div className="w-full h-full col-span-1 grid grid-rows-2">
          <Canvas current={current} />
          <Control
            shapes={shapes}
            colors={colors}
            texts={texts}
            current={current}
            setAnswer={setAnswer}
            validated={validated}
            setDone={setDone}
            setRestart={setRestart}
            restart={restart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

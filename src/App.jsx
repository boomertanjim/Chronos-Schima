import "./App.css";
import Canvas from "./components/Canvas";
import Cards from "./components/Cards";
import Control from "./components/Control";
import Header from "./components/Header";
import { useEffect, useMemo, useState } from "react";

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
    let random = Math.floor(Math.random() * 6);
    let shape = random;

    random = Math.floor(Math.random() * Object.keys(colors).length);
    let color = [Object.values(colors)[random], random];

    random = Math.floor(Math.random() * texts.length);
    let text = [Object.values(texts)[random], random];

    return [shape, color, text];
  };

  //* Header States
  const chronos = 150;
  const [time, setTime] = useState(chronos);
  const [score, setScore] = useState(0);
  const [cash, setCash] = useState(0);
  const [animActive, setAnimActive] = useState(false);
  const [timeStatus, setTimeStatus] = useState("");
  const [timeColor, setTimeColor] = useState("green");

  //* Question States
  const [answer, setAnswer] = useState(["", "", ""]);
  const [current, setCurrent] = useState(() => selectRandom());
  const [expected, setExpected] = useState(() => {
    const result = current.map((val) => val);
    const s = shapes[result[0]];
    const c = Object.keys(colors)[result[1][1]];
    const t = result[2][0];

    return [s, c, t];
  });
  const validated = useMemo(() => {
    return answer.map((val, i) => {
      if (val === "") {
        return 0;
      } else if (val === expected[i]) {
        return 1;
      } else {
        return 2;
      }
    });
  }, [answer, expected]);

  //* Round and Restart States
  const [done, setDone] = useState(false);
  const [restart, setRestart] = useState(false);

  //* Power Up States
  const [powerSave, setPowerSave] = useState(false);
  const [powerQuestion, setPowerQuestion] = useState(10);
  const [powerQuestionRounds, setPowerQuestionRounds] = useState(
    () => Math.floor(Math.random() * 5) + 1,
  );

  //* Reset Function after every Round
  useEffect(() => {
    async function ref(j) {
      if (!restart) {
        const newCurrent = selectRandom();
        setCurrent(newCurrent);
        setAnswer(["", "", ""]);
        const s = shapes[newCurrent[0]];
        const c = Object.keys(colors)[newCurrent[1][1]];
        const t = newCurrent[2][0];
        setExpected([s, c, t]);
        setScore((prev) => prev + j * 3);
        if (j > 2) {
          setTime((prev) => prev + 3);
          setCash((prev) => prev + 5);
          setTimeStatus("+3 Secs");
          setTimeColor("green");
        } else {
          if (!powerSave) {
            setTime((prev) => prev - 5);
            setTimeStatus("-5 Secs");
            setTimeColor("red");
          } else {
            setTimeStatus("Saved!");
            setTimeColor("green");
          }
        }
        setAnimActive(true);
        if (j < 2) {
          setPowerSave(false);
        }
        if (powerQuestion != 10) {
          if (powerQuestionRounds > 1) {
            setPowerQuestionRounds((prev) => prev - 1);
          } else {
            let random = Math.floor(Math.random() * 5) + 1;
            setPowerQuestionRounds(random);
            setPowerQuestion(10);
          }
        }
        setDone(false);
      }
    }
    if (done == true) {
      const count = validated.filter((item) => item === 1).length;
      ref(count);
    }
  }, [done, restart]);

  //* Timer Function
  useEffect(() => {
    async function ref() {
      setRestart(true);
    }
    if (time <= 0) {
      ref();
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="absolute w-screen h-screen grid grid-rows-11">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 flex justify-center items-center"
        style={{ display: restart ? "flex" : "none" }}
      >
        <div className="bg-bg border-2 py-15 border-text w-100 h-100 flex flex-col gap-3 justify-between items-center text-4xl rounded-xl">
          <div className="flex flex-col mt-10 ml-3 justify-center items-center gap-5">
            <p>You Scored:</p>
            <p>{score}</p>
          </div>
          <button
            className="w-40 h-10 border-2 rounded-2xl btnType flex justify-center items-centerS text-2xl"
            onClick={() => {
              setRestart(false);
              setTime(chronos);
              setScore(0);
              setCash(0);
              setDone(true);
              setTimeStatus("");
              setTimeColor("transparent");
            }}
          >
            Play Again
          </button>
        </div>
      </div>
      <Header
        score={score}
        time={time}
        cash={cash}
        animActive={animActive}
        setAnimActive={setAnimActive}
        timeStatus={timeStatus}
        timeColor={timeColor}
      />
      <div className="grid row-span-10 grid-cols-2">
        <Cards
          powerSave={powerSave}
          setPowerSave={setPowerSave}
          cash={cash}
          setCash={setCash}
          powerQuestion={powerQuestion}
          setPowerQuestion={setPowerQuestion}
          powerQuestionRounds={powerQuestionRounds}
        />
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
            done={done}
            powerQuestion={powerQuestion}
            expected={expected}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

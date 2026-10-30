import { useEffect, useState } from "react";

const Control = ({
  shapes,
  colors,
  texts,
  current,
  setAnswer,
  validated,
  setDone,
  done,
  expected,
  powerQuestion,
}) => {
  //* Function to Select all Choices
  const selectChoice = () => {
    let tempShapes = shapes.map((val) => val);
    let tempColors = Object.keys(colors);
    let tempTexts = texts.map((val) => val);
    let tempChoices = [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ];
    let randoms = [];

    let random = Math.floor(Math.random() * 4);
    randoms.push(random);
    tempChoices[0][random] = shapes[current[0]];
    tempShapes.splice(current[0], 1);

    random = Math.floor(Math.random() * 4);
    randoms.push(random);
    tempChoices[1][random] = Object.keys(colors)[current[1][1]];
    tempColors.splice(current[1][1], 1);

    random = Math.floor(Math.random() * 4);
    randoms.push(random);
    tempChoices[2][random] = texts[current[2][1]];
    tempTexts.splice(current[2][1], 1);

    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 3; j++) {
        if (j === randoms[i]) {
          continue;
        }
        if (i == 0) {
          let rand = Math.floor(Math.random() * tempShapes.length);
          tempChoices[i][j] = tempShapes[rand];
          tempShapes.splice(rand, 1);
        } else if (i == 1) {
          let rand = Math.floor(Math.random() * tempColors.length);
          tempChoices[i][j] = tempColors[rand];
          tempColors.splice(rand, 1);
        } else if (i == 2) {
          let rand = Math.floor(Math.random() * tempTexts.length);
          tempChoices[i][j] = tempTexts[rand];
          tempTexts.splice(rand, 1);
        }
      }
    }

    return tempChoices;
  };

  //* States
  const [choices, setChoices] = useState(() => {
    return selectChoice();
  });
  const [recorded, setRecorded] = useState([false, false, false]);
  const [showing, setShowing] = useState([10, 10, 10]);

  const handleAnswer = (ans, index, num) => {
    setAnswer((prev) => prev.map((val, i) => (i == index ? ans : val)));
    setShowing((prev) =>
      prev.map((val, i) =>
        i == index ? (recorded[i] == false ? num : val) : val,
      ),
    );
    setRecorded((prev) => prev.map((val, i) => (i == index ? true : val)));
  };

  //* End a specific round
  useEffect(() => {
    if (!recorded.includes(false)) {
      setDone(true);
    }
  }, [recorded, setDone]);

  //* Reset Everything after each round
  useEffect(() => {
    async function ref() {
      setChoices(selectChoice());
      setRecorded([false, false, false]);
      setShowing([10, 10, 10]);
    }
    ref();
  }, [current]);

  //* First PowerUp Settings
  useEffect(() => {
    async function ref() {
      setAnswer((prev) =>
        prev.map((val, i) =>
          i == powerQuestion ? expected[powerQuestion] : val,
        ),
      );
      if (done == false) {
        setRecorded((prev) =>
          prev.map((val, i) => (i == powerQuestion ? true : val)),
        );
      }
      let index = choices[powerQuestion].indexOf(expected[powerQuestion]);
      setShowing((prev) =>
        prev.map((val, i) =>
          i == powerQuestion ? (recorded[i] == false ? index : val) : val,
        ),
      );
    }

    if (powerQuestion < 0 || powerQuestion >= expected.length) {
      return;
    }

    ref();
  }, [powerQuestion, choices]);

  return (
    <div className="row-span-1 w-full h-full justify-center flex flex-col gap-3">
      <p className="text-xl lg:text-2xl xl:text-3xl xl:mb-1">
        What is the Name of the Shape?
      </p>
      <div className="grid grid-cols-4">
        {choices[0].map((val, i) => (
          <button
            className="w-17 md:w-20 lg:w-25 xl:w-30 h-min py-0.5 lg:py-0 border-2 border-text rounded-lg flex justify-center items-center text-sm lg:text-lg  xl:text-xl btnType cursor-pointer"
            onClick={() => {
              recorded[0] === false && handleAnswer(val, 0, i);
            }}
            style={{
              background: `${showing[0] == i ? (validated[0] == 1 ? "green" : "red") : "white"}`,
            }}
            key={i}
          >
            {val}
          </button>
        ))}
      </div>

      <p className="text-xl lg:text-2xl xl:text-3xl xl:mb-1 xl:mt-1">
        What is the Color of the Shape?
      </p>
      <div className="grid grid-cols-4">
        {choices[1].map((val, i) => (
          <button
            className="w-17 md:w-20 lg:w-25 xl:w-30 h-min py-0.5 lg:py-0 border-2 border-text rounded-lg flex justify-center items-center text-sm lg:text-lg xl:text-xl btnType cursor-pointer"
            onClick={() => {
              recorded[1] === false && handleAnswer(val, 1, i);
            }}
            style={{
              background: `${showing[1] == i ? (validated[1] == 1 ? "green" : "red") : "white"}`,
            }}
            key={i}
          >
            {val}
          </button>
        ))}
      </div>

      <p className="text-xl lg:text-2xl xl:text-3xl xl:mb-1 xl:mt-1">
        What is the Shape Saying?
      </p>
      <div className="grid grid-cols-4">
        {choices[2].map((val, i) => (
          <button
            className="w-17 md:w-20 lg:w-25 xl:w-30 h-min py-0.5 lg:py-0 border-2 border-text rounded-lg flex justify-center items-center text-sm lg:text-lg xl:text-xl btnType cursor-pointer"
            onClick={() => {
              recorded[2] === false && handleAnswer(val, 2, i);
            }}
            style={{
              background: `${showing[2] == i ? (validated[2] == 1 ? "green" : "red") : "white"}`,
            }}
            key={i}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Control;

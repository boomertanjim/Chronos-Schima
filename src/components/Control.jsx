import { useEffect, useState } from "react";

const Control = ({ shapes, colors, texts, current }) => {
  const [choices, setChoices] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  const [recorded, setRecorded] = useState([false, false, false]);

  const selectChoice = () => {
    let tempShapes = shapes;
    let tempColors = Object.keys(colors);
    let tempTexts = texts;
    let tempChoices = [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ];
    let randoms = [];

    let random = Math.floor(Math.random() * 3);
    randoms.push(random);
    tempChoices[0][random] = shapes[current[0]];
    tempShapes.splice(current[0], 1);

    random = Math.floor(Math.random() * 3);
    randoms.push(random);
    tempChoices[1][random] = Object.keys(colors)[current[1][1]];
    tempColors.splice(current[1][0], 1);

    random = Math.floor(Math.random() * 3);
    randoms.push(random);
    tempChoices[2][random] = texts[current[2][1]];
    tempTexts.splice(current[2][0], 1);

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

    setChoices(tempChoices);
    console.log(tempChoices);
  };

  useEffect(() => {
    selectChoice();
    console.log(choices);
  }, []);

  return (
    <div className="col-span-1 w-full h-full">
      <div className="col-span-1 justify-center flex flex-col gap-3">
        <p className="text-3xl">What is the Name of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer" onClick={recorded[0] === false && }>
            {choices[0][0]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[0][1]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[0][2]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[0][3]}
          </button>
        </div>
        <p className="text-3xl">What is the Color of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[1][0]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[1][1]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[1][2]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[1][3]}
          </button>
        </div>
        <p className="text-3xl">What is the Shape Saying?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[2][0]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[2][1]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[2][2]}
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType cursor-pointer">
            {choices[2][3]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;

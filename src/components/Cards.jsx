const Cards = ({
  setPowerSave,
  powerSave,
  cash,
  setCash,
  setPowerQuestion,
  powerQuestion,
  powerQuestionRounds,
  gambleToggle,
  setGambleToggle,
}) => {
  const questionRequired = 20;
  const gambleRequired = 6;
  const saveRequired = 10;
  return (
    <div className="col-span-1 h-full w-full flex justify-center items-center gap-4">
      <div className="flex flex-col justify-center">
        <div className="relative w-40 h-60 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <div
            className={`${powerQuestion == 10 && "hidden"} absolute w-full h-full bg-text/30 rounded-lg`}
          ></div>
          <img src="./wand.svg" alt="" className="w-18 mb-4" />
          <p className="text-2xl font-bold text-center mb-2">-1 Question</p>
          <p className="text-2xl font-bold text-center">
            For {powerQuestionRounds} Rounds
          </p>
          <button
            className="w-30 h-8 mt-6 bg-bg border-2 rounded-xl border-text text-center text-xl/tight cursor-pointer"
            onClick={() => {
              if (cash >= questionRequired) {
                let random = Math.floor(Math.random() * 3);
                setPowerQuestion(random);
                setCash((prev) => prev - questionRequired);
              }
            }}
          >
            {powerQuestion != 10 ? "In Use" : "BUY"}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-40 h-60 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <img src="./gamble.svg" alt="" className="w-20 h-20 mb-4" />
          <p className="text-2xl font-bold text-center">Gamble</p>
          <button
            className="w-30 h-8 mt-10 bg-bg border-2 rounded-xl border-text text-center text-xl/tight cursor-pointer"
            onClick={() => {
              if (cash >= gambleRequired) {
                setGambleToggle(true);
                setCash((prev) => prev - gambleRequired);
              }
            }}
          >
            {gambleToggle ? "In Use" : "BUY"}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="relative w-40 h-60 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <div
            className={`${!powerSave && "hidden"} absolute w-full h-full bg-text/30 rounded-lg`}
          ></div>
          <img src="./heart.svg" alt="" className="w-20 mb-4" />
          <p className="text-2xl font-bold text-center mb-2">+1</p>
          <p className="text-2xl font-bold text-center">Save</p>
          <button
            className="w-30 h-8 mt-6 bg-bg border-2 rounded-xl border-text text-center text-xl/tight cursor-pointer"
            onClick={() => {
              if (cash >= saveRequired) {
                setPowerSave(true);
                setCash((prev) => prev - saveRequired);
              }
            }}
          >
            {powerSave ? "In Use" : "BUY"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

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
      <div className="flex gap-1 flex-col justify-center">
        <div className="relative w-20 h-30 md:w-26 md:h-39 lg:w-32 lg:h-48 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <div
            className={`${powerQuestion == 10 && "hidden"} absolute w-full h-full bg-text/30 rounded-lg`}
          ></div>
          <img
            src="./wand.svg"
            alt=""
            className="w-9 md:w-11 lg:w-13 mb-4 lg:mb-6"
          />
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center mb-2">
            -1 Question
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center">
            For {powerQuestionRounds} Rounds
          </p>
          <button
            className="whitespace-nowrap w-min h-min px-3 py-1 mt-2 lg:mt-4 bg-bg border-2 rounded-xl border-text text-center text-sm/tight lg:text-lg cursor-pointer"
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
        <p className="flex justify-center text-xl lg:text-2xl">{`${questionRequired}$`}</p>
      </div>
      <div className="flex gap-1 flex-col justify-center">
        <div className="relative w-20 h-30 md:w-26 md:h-39 lg:w-32 lg:h-48 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <div
            className={`${!gambleToggle && "hidden"} absolute w-full h-full bg-text/30 rounded-lg`}
          ></div>
          <img
            src="./gamble.svg"
            alt=""
            className="w-12 md:w-14 lg:w-16 mb-3 md:mb-4 lg:mb-6"
          />
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center">
            Gamble
          </p>
          <button
            className="whitespace-nowrap w-min h-min px-3 py-1 mt-4 lg:mt-6 bg-bg border-2 rounded-xl border-text text-center text-sm/tight lg:text-lg cursor-pointer"
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
        <p className="flex justify-center text-xl lg:text-2xl">{`${gambleRequired}$`}</p>
      </div>
      <div className="flex gap-1 flex-col justify-center">
        <div className="relative w-20 h-30 md:w-26 md:h-39 lg:w-32 lg:h-48 border-3 border-text rounded-xl cards flex flex-col justify-center items-center">
          <div
            className={`${!powerSave && "hidden"} absolute w-full h-full bg-text/30 rounded-lg`}
          ></div>
          <img
            src="./heart.svg"
            alt=""
            className="w-10 md:w-13 lg:w-15 mb-3 lg:mb-5"
          />
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center mb-2">
            +1
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-bold text-center">
            Save
          </p>
          <button
            className="whitespace-nowrap w-min h-min px-3 py-1 mt-2 lg:mt-4.5 bg-bg border-2 rounded-xl border-text text-center text-sm/tight lg:text-lg cursor-pointer"
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
        <p className="flex justify-center text-xl lg:text-2xl">{`${saveRequired}$`}</p>
      </div>
    </div>
  );
};

export default Cards;

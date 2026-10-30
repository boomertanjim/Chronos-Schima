import { useEffect, useState } from "react";

const Gamble = ({ setGambleToggle, gambleToggle, setTime, setCash }) => {
  const [count, setCount] = useState(0);
  const [gamble, setGamble] = useState([
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
    ["", 0, false],
  ]);

  useEffect(() => {
    const ref = () => {
      const moneyArray = [0, 1, 1, 1, 1, 1, 2];
      const timeArray = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
      const moneyRandom =
        moneyArray[Math.floor(Math.random() * moneyArray.length)];
      const timeRandom =
        timeArray[Math.floor(Math.random() * timeArray.length)];

      const newGamble = Array.from({ length: 10 }, () => ["", 0, false]);
      const track = Array.from({ length: 10 }, (_, i) => i);

      for (let i = track.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [track[i], track[j]] = [track[j], track[i]];
      }

      for (let i = 0; i < moneyRandom; i++) {
        const index = track[i];
        newGamble[index][0] = "You got 15 Coins!";
        newGamble[index][1] = 1;
      }

      for (let i = 0; i < timeRandom; i++) {
        const index = track[moneyRandom + i];
        newGamble[index][0] = "You got +1 Minute";
        newGamble[index][1] = 2;
      }

      for (let i = 0; i < track.length - timeRandom - moneyRandom; i++) {
        const index = track[moneyRandom + timeRandom + i];
        newGamble[index][0] = "Haha Loser!";
        newGamble[index][1] = 0;
      }
      setGamble(newGamble);
    };
    if (gambleToggle) {
      ref();
    }
  }, [gambleToggle, gamble.length]);

  useEffect(() => {
    const ref = () => {
      setGamble((prev) =>
        prev.map((val) => val.map((v, j) => (j == [2] ? true : v))),
      );
      setCount(0);
    };
    if (count >= 2) {
      ref();
      setTimeout(() => {
        setGambleToggle(false);
      }, 1000);
    }
  }, [count]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 flex justify-center items-center"
      style={{ display: gambleToggle ? "flex" : "none" }}
    >
      <div className="bg-bg border-2 py-8 px-10 border-text w-120 h-80 lg:w-200 lg:h-120 rounded-xl grid grid-rows-10">
        <div className="text-center text-2xl lg:text-3xl row-span-1">
          Choose Any Two
        </div>
        <div className="row-span-9 grid grid-rows-2 grid-cols-5 gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-3">
          {gamble.map((val, i) => (
            <div className="relative h-full w-full border-3 border-text rounded-xl cards flex flex-col justify-center items-center p-3">
              <div
                className={`absolute bg-[#faf4dc] w-full h-full rounded-xl text-5xl flex justify-center items-center ${gamble[i][2] && "gamble"}`}
                style={{
                  animationPlayState: !gamble[i][2] ? "paused" : "running",
                }}
                onClick={() => {
                  if (!gamble[i][2]) {
                    setCount((prev) => prev + 1);
                    gamble[i][1] == 1
                      ? setCash((prev) => prev + 15)
                      : gamble[i][1] == 2 && setTime((prev) => prev + 60);
                    setGamble((prev) =>
                      prev.map((val, index) =>
                        i == index
                          ? val.map((v, j) => (j == 2 ? true : v))
                          : val,
                      ),
                    );
                  }
                }}
              >
                ?
              </div>
              <div
                className={`w-full h-full flex justify-center items-center text-lg lg:text-2xl text-center ${gamble[i][1] == 0 ? "text-red-400" : "text-green-400"}`}
              >
                {val[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamble;

const Header = ({
  score,
  time,
  cash,
  animActive,
  setAnimActive,
  timeStatus,
  timeColor,
}) => {
  return (
    <div className="row-span-1 w-full h-full grid grid-cols-3 px-4 py-1">
      <div className="flex items-center gap-2 col-span-1">
        <div className="w-min h-6 px-4 lg:py-3 rounded-lg border-2 border-text justify-center items-center flex gap-2 text-xl/tight lg:text-xl/tight">
          <p>Score:</p>
          <p className="text-orange-400">{score}</p>
        </div>
        <div className="w-min h-6 px-2 lg:py-3 rounded-lg border-2 border-text justify-center items-center flex text-xl/tight lg:text-xl/tight">
          {cash}
          <span className="text-[#008000]">$</span>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center text-2xl/tight md:text-3xl/tight">
        Chronos Schima
      </div>
      <div className="col-span-1 flex justify-end items-center ">
        <div className="relative w-min h-6 px-3 lg:py-4 bg-text rounded-lg text-xl lg:text-xl flex gap-1 justify-center items-center">
          <p
            className={`z-[-1] absolute top-2 left-4 ${animActive && "popAnim"}`}
            style={{
              color: timeColor,
              animationPlayState: !animActive ? "paused" : "running",
            }}
            onAnimationEnd={() => {
              setAnimActive(false);
            }}
          >
            {timeStatus}
          </p>
          <p className="text-bg">{time > 0 ? Math.floor(time / 60) : "0"}</p>
          <p className="text-bg">:</p>
          <p className="text-bg">
            {time > 0
              ? time % 60 < 10
                ? (time % 60).toString().padStart(2, "0")
                : time % 60
              : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

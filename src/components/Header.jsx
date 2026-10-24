const Header = ({ score, time, cash }) => {
  return (
    <div className="row-span-1 w-full h-full grid grid-cols-3 px-4 py-1">
      <div className="flex items-center gap-2 col-span-1">
        <div className="w-30 h-9.5 rounded-lg border-2 border-text justify-center items-center flex gap-2 text-2xl/tight">
          <p>Score:</p>
          <p className="text-orange-400">{score}</p>
        </div>
        <div className="w-min h-9.5 px-3 rounded-lg border-2 border-text justify-center items-center flex text-2xl/tight">
          {`${cash}$`}
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center text-3xl/tight">
        Chronos Schima or sum shi idk
      </div>
      <div className="col-span-1 flex justify-end items-center ">
        <div className="w-22 h-9.5 bg-text rounded-lg text-bg text-xl flex gap-1 justify-center items-center">
          <p>{Math.floor(time / 60)}</p>
          <p>:</p>
          <p>
            {time % 60 < 10
              ? (time % 60).toString().padStart(2, "0")
              : time % 60}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

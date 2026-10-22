const Header = () => {
  return (
    <div className="row-span-1 w-full h-full grid grid-cols-3 px-4 py-1">
      <div className="flex items-center gap-2 col-span-1">
        <div className="w-30 h-9.5 rounded-lg border-2 border-text justify-center items-center flex text-2xl/tight">
          Score: 20
        </div>
        <div className="w-13 h-9.5 rounded-lg border-2 border-text justify-center items-center flex text-2xl/tight">
          10$
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center text-3xl/tight">
        Chronos Schima or sum shi idk
      </div>
      <div className="col-span-1 flex justify-end items-center ">
        <div className="w-13 h-9.5 bg-text rounded-lg text-bg text-xl flex justify-center items-center">
          2:45
        </div>
      </div>
    </div>
  );
};

export default Header;

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
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Header;

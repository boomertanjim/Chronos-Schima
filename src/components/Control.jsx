const Control = () => {
  return (
    <div className="row-span-7 border-amber-700 border-2 w-full h-full grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center gap-2">
        <div className="w-40 h-60 border-4 border-text rounded-xl"></div>
        <div className="w-40 h-60 border-4 border-text rounded-xl"></div>
        <div className="w-40 h-60 border-4 border-text rounded-xl"></div>
      </div>
      <div className="col-span-1 justify-center flex flex-col gap-3">
        <p className="text-3xl">What is the Name of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
        </div>
        <p className="text-3xl">What is the Color of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
        </div>
        <p className="text-3xl">What is the Shape Saying?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
          <button className="w-min h-min px-3 py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl">
            Circle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;

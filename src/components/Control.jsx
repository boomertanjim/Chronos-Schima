const Control = () => {
  return (
    <div className="row-span-7 w-full h-full grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center gap-4">
        <div className="w-40 h-60 border-3 border-text rounded-xl cards"></div>
        <div className="w-40 h-60 border-3 border-text rounded-xl cards"></div>
        <div className="w-40 h-60 border-3 border-text rounded-xl cards"></div>
      </div>
      <div className="col-span-1 justify-center flex flex-col gap-3">
        <p className="text-3xl">What is the Name of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
        </div>
        <p className="text-3xl">What is the Color of the Shape?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
        </div>
        <p className="text-3xl">What is the Shape Saying?</p>
        <div className="grid grid-cols-4 mx-8">
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
          <button className="w-30 h-min py-0.5 border-2 border-text rounded-lg flex justify-center items-center text-xl btnType">
            Circle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;

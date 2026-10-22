const Canvas = () => {
  return (
    <div className="col-span-1 w-full h-full flex items-center justify-center">
      <div className="relative w-100 h-70 bg-text rounded-lg flex justify-center items-center">
        <img src="./circle.svg" alt="" className="w-40 anim" />
        <img
          src="./dialogue.svg"
          alt=""
          className="absolute w-40 top-6 left-57 anim"
        />
        <div className="w-33 h-14.5 absolute top-6 left-64 text-2xl rounded-2xl flex justify-center items-center anim">
          <p>WOW!</p>
        </div>
      </div>
    </div>
  );
};

export default Canvas;

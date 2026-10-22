import "./App.css";
import Canvas from "./components/Canvas";
import Cards from "./components/Cards";
import Control from "./components/Control";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen grid grid-rows-11">
      <Header />
      <div className="grid row-span-10 grid-cols-2">
        <Cards />
        <div className="w-full h-full col-span-1 grid grid-rows-2">
          <Canvas />
          <Control />
        </div>
      </div>
    </div>
  );
}

export default App;

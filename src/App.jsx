import "./App.css";
import Canvas from "./components/Canvas";
import Control from "./components/Control";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen grid grid-rows-15">
      <Header />
      <Canvas />
      <Control />
    </div>
  );
}

export default App;

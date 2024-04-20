/** @format */

import "./App.css";
import BgColor from "./BgColor";

function App() {
  return (
    <>
      <div className="bg-green-400 px-2 py-8 rounded-lg bottom-9 w-56 items-center">
        <h1 className="text-3xl">Color Changer</h1>
      </div>
      <BgColor />
    </>
  );
}

export default App;

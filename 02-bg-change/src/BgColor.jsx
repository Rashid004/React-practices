/** @format */

import { useState } from "react";

function BgColor() {
  const [color, setColor] = useState("orangered");

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
        <button
          onClick={() => setColor("olive")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("orangered")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "orangered" }}
        >
          Orangered
        </button>
        <button
          onClick={() => setColor("lightgrey")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "lightgrey" }}
        >
          Lightgrey
        </button>
        <button
          onClick={() => setColor("white")}
          className="outline-none shadow-lg px-4 py-1 text-black rounded-full"
          style={{ backgroundColor: "white" }}
        >
          white
        </button>
        <button
          onClick={() => setColor("darkblue")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "darkblue" }}
        >
          Darkblue
        </button>
        <button
          onClick={() => setColor("lightgreen")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "lightgreen" }}
        >
          Lightgreen
        </button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
          style={{ backgroundColor: "darkpink" }}
        >
          Pink
        </button>
      </div>
      <div
        className="w-full h-screen duration-200 rounded-xl "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
          <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none shadow-lg px-4 py-1 text-white rounded-full"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgColor;

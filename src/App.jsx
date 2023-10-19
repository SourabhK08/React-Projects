import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightgrey");

  return (
    <>
      <div
        className=" h-screen w-full duration-150 "
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex flex-wrap fixed justify-center bottom-20 inset-x-0 px-2">
        <div className="flex fixed flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl ">
          <button
            className="outline-none px-3 py-2 font-extrabold bg-red-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-yellow-400 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("yellow")}
          >
            YELLOW
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-orange-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("orange")}
          >
            ORANGE
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-yellow-950 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("#654321")}
          >
            BROWN
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-green-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-green-400 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("olive")}
          >
            OLIVE
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-blue-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-cyan-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("cyan")}
          >
            CYAN
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-pink-500 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("pink")}
          >
            PINK
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-purple-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("purple")}
          >
            PURPLE
          </button>
          <button
            className="outline-none px-3 py-2 font-extrabold bg-pink-600 rounded-2xl shadow-lg  text-white "
            onClick={() => setColor("hotpink")}
          >
            HOT PINK
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

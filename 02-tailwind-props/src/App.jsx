import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-cyan-200 text-black p-4 rounded-full mb-4  ">
        Test tailwind
      </h1>

      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24"
          src="https://images.pexels.com/photos/18597591/pexels-photo-18597591/free-photo-of-kalachowkicha-mahaganpati-2023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}

      <Card username="sourabh" textBtn="click me" />
      <Card username="richa" textBtn="show me" />
    </>
  );
}

export default App;

import { React, useState } from "react";
import "./App.css";

function App() {
  // let counter = 17;

  let [counter, setCounter] = useState(17);

  const incCounter = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const decCounter = () => {
    if (counter > 10) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };
  return (
    <>
      <h1>Counter = {counter} </h1>
      <br />
      <div className="button">
        <form action="">
          <input type="button" value="Increment" onClick={incCounter} />
          <br />
          <br />
          <input type="button" value="Decrement" onClick={decCounter} />
        </form>
      </div>
    </>
  );
}

export default App;

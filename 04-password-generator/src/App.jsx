import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "`~!@#$%^&*(){}?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // index value of char
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // in this [] we're mentionig those methods which we want to OPTIMIZE , callback is responsible not only for running the function but MEMORIZE by putting into cache memory kuch chg hoga to cache m rkha jaiga

  //passwordGenerator(); TOO MANY RE RENDERS , we CAN'T CALL DIRECTLY , NEED TO USE USE EFFECT

  // see https://youtu.be/Lt4vy8hfc-s?si=VrLjHFvwj7_K-DqC @ 41:00

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  // in this [] agar in mai kuch bhi chg hota h to dubara se run kr do apn un methods ko mention krte h

  // useRef hook

  const pswdRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    pswdRef.current?.select(); // just for optimization and user experiecne we use ref

    // pswdRef.current?.setSelectionRange(0, 3);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8 text-orange-700 bg-black ">
        <h1 className="text-center text-4xl text-white font-semibold">
          Password Generator
        </h1>
        <br />
        <div className="flex shadow-md rounded-md overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="Password"
            readOnly
            ref={pswdRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#45a029"; // Change background color on hover
              e.target.style.transform = "scale(1.2)"; // Apply zoom-in effect
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4CAF50"; // Restore original background color
              e.target.style.transform = "scale(1)"; // Remove zoom-in effect
            }}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1  ">
            <input
              type="range"
              className="cursor-pointer"
              value={length}
              min={7}
              max={17}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-semibold text-lg">Length:{length} </label>
          </div>

          <div className="flex items-center gap-x-1  ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // for toggling previous value ko revrse karne ke liye
              }}
            />
            <label htmlFor="numberInput" className="font-semibold text-lg">
              Number
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // for toggling previous value ko revrse karne ke liye
              }}
            />
            <label htmlFor="numberInput" className="font-semibold text-lg">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

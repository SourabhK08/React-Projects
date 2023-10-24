import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-center font-bold"> React router </h2>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import FunctionProvider from "./components/container";
import "./App.css";

const App = () => {
  const [prevState, setPrevState] = useState("");
  const [currState, setCurrState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const num = (e) => {
    if (currState.includes(".") && e.target.innerText === ".") return;
    if (total) setPrevState("");
    currState
      ? setCurrState((pre) => pre + e.target.innerText)
      : setCurrState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(currState);
  }, [currState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currState === "") return;
    if (prevState !== "") {
      equals();
    } else {
      setPrevState(currState);
      setCurrState("");
    }
  };
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(prevState) / parseFloat(currState));
        break;

      case "+":
        cal = String(parseFloat(prevState) + parseFloat(currState));
        break;

      case "*":
        cal = String(parseFloat(prevState) * parseFloat(currState));
        break;

      case "-":
        cal = String(parseFloat(prevState) - parseFloat(currState));
        break;

      default:
        return;
    }
    setInput("");
    setPrevState(cal);
    setCurrState("");
  };

  const percent = () => {
    prevState
      ? setCurrState(String((parseFloat(currState) / 100) * prevState))
      : setCurrState(String(parseFloat(currState) / 100));
  };

  const reset = () => {
    setPrevState("");
    setCurrState("");
    setInput("0");
  };

  const clear = () => {
    setInput(input.slice(0, input.length - 1));
    if (input === "") {
      setInput("0");
    }
  };

  const buttons = [
    { name: "btn", click: reset, button: "AC" },
    { name: "btn", click: clear, button: "<MdOutlineBackspace />" },
    { name: "btn", click: percent, button: "%" },
    { name: "btn light-gray", click: operatorType, button: "/" },
    { name: "btn", click: num, button: "7" },
    { name: "btn", click: num, button: "8" },
    { name: "btn", click: num, button: "9" },
    { name: "btn light-gray", click: operatorType, button: "*" },
    { name: "btn", click: num, button: "4" },
    { name: "btn", click: num, button: "5" },
    { name: "btn", click: num, button: "6" },
    { name: "btn light-gray", click: operatorType, button: "-" },
    { name: "btn", click: num, button: "1" },
    { name: "btn", click: num, button: "2" },
    { name: "btn", click: num, button: "3" },
    { name: "btn light-gray", click: operatorType, button: "+" },
    { name: "btn", click: operatorType, button: "()" },
    { name: "btn", click: num, button: "0" },
    { name: "btn", click: num, button: "." },
    { name: "btn red", click: equals, button: "=" },
  ];

  return (
    <FunctionProvider buttons={buttons} input={input} prevState={prevState} />
  );
};

export default App;

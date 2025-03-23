import { useState } from "react";

import Display from "./Display";
import Keypad from "./Keypad";

import { calculate } from '../utils/helpers';

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [topDisplay, setTopDisplay] = useState("0");
  const [arg1, setArg] = useState({ value: "0", isSet: false });
  const [operator, setOperator] = useState(null);

  function handleOperations(value) {
    if (arg1.isSet && operator && !isNaN(parseFloat(display))) {
      const
        num1 = parseFloat(arg1.value),
        num2 = parseFloat(display);
      let result = calculate(num1, num2, operator).toString();
      setTopDisplay(result);
      setArg({ value: result, isSet: true });
      setDisplay(value);
      setOperator(value);
      return;
    }
    if (!operator && !arg1.isSet || !operator && arg1.isSet) {
      setArg({ value: display, isSet: true });
      setTopDisplay(display);
    } else if (operator && value === '-' && display !== '-') {
      setTopDisplay(topDisplay + display);
      setDisplay(value);
      return;
    } else if (/[+\-x/]$/.test(topDisplay) && display === '-') {
      setTopDisplay(topDisplay.slice(0, -1));
    }
    setDisplay(value);
    setOperator(value);
  }

  const handleClicks = (e) => {
    const value = e.target.textContent;
    switch (value) {
      case "AC":
        setDisplay("0");
        setTopDisplay("0");
        setArg({ value: "0", isSet: false });
        setOperator(null);
        break;
      case "C":
        if (display.length > 1) setDisplay(display.slice(0, -1))
        else if (topDisplay.length > 1 && display === '0') setTopDisplay("0");
        else setDisplay("0");
        break;
      case ".":
        if (/[+\-x/]/.test(display)) {
          setTopDisplay(topDisplay + display);
          setDisplay("0.");
          return;
        } else if (arg1.isSet && !operator) {
          setTopDisplay("0");
          setArg({ value: "0", isSet: false });
          setDisplay('0.');
          return;
        } else if (isNaN(display)) {
          setDisplay("0.");
          return;
        }
        if (!display.includes(".")) setDisplay(display + value);
        break;
      case "-":
      case "+":
      case "x":
      case "/":
        handleOperations(value);
        break;
      case "=":
        if (arg1.isSet) {
          const
            num1 = parseFloat(arg1.value),
            num2 = parseFloat(display);
          if (!isNaN(num2)) {
            let result = calculate(num1, num2, operator);
            setTopDisplay(topDisplay + display);
            setDisplay(result.toString());
            setArg({ value: result.toString(), isSet: true });
            setOperator(null);
          }
        }
        break;
      default:
        if (display === "0") {
          setDisplay(value);
        } else {
          if (arg1.isSet && !operator) {
            setTopDisplay("0");
            setArg({ value: "0", isSet: false });
            setDisplay(value);
            return;
          } 
          if (display === operator) {
            setTopDisplay(topDisplay + display);
            setDisplay(value);
            return;
          }
          setDisplay(display + value);
        }
        break;
    }
  }

  return (
    <main>
      <Display display={display} topDisplay={topDisplay} />
      <Keypad clickFunc={handleClicks} />
    </main>
  );
}
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [inc, setInc] = useState(1);
  const [day, setDay] = useState(0);

  function handleReset() {
    setInc(1);
    setDay(0);
  }

  // function handleIncAdd() {
  //   setInc((i) => i + 1);
  // }
  // function handleIncMinus() {
  //   if (inc > 1) setInc((i) => i - 1);
  // }
  function handleDayAdd() {
    setDay((i) => i + inc);
  }
  function handleDayMinus() {
    setDay((i) => i - inc);
  }

  const date = new Date();
  date.setDate(date.getDate() + day);

  return (
    <div>
      <div className="container">
        <p>Increase the Increments</p>
        <div className="increment">
          <input
            type="range"
            min="1"
            max="10"
            value={inc}
            onChange={(e) => setInc(Number(e.target.value))}
          />
          <p>{inc}</p>
          {/* <button onClick={handleIncMinus}>-</button>
        <span>Increments of: {inc} </span>
        <button onClick={handleIncAdd}>+</button> */}
        </div>

        <p>
          Change the day by the above increments using outside buttons <br /> or
          change the day by 1 value using the input buttons
        </p>

        <div className="day">
          <button onClick={handleDayMinus}>-</button>
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
          <button onClick={handleDayAdd}>+</button>
        </div>
        {inc !== 1 || day !== 0 ? (
          <button className="btnReset" onClick={handleReset}>
            Reset
          </button>
        ) : null}
      </div>
      <div className="display-date">
        <p>
          <h1>
            {day === 0
              ? "Today is "
              : day === 1
              ? `${day} day from now is `
              : day > 1
              ? `${day} days from now is `
              : day === -1
              ? `${Math.abs(day)} day ago was `
              : `${Math.abs(day)} days ago was `}
          </h1>
          <h1>{date.toDateString()}</h1>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const miniusBtnHandler = () => {
    setCounter(counter - 1);
  };

  const plusBtnHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="center-items">
      <button onClick={miniusBtnHandler}>-</button>
      <p>{counter}</p>
      <button onClick={plusBtnHandler}>+</button>
    </div>
  );
};

export default Counter;

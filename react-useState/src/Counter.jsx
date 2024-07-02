import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

function Counter({
  initialValue = 0,
  increment = 1,
  decrement = 1,
}) {
  const [counter, setCounter] = useState(initialValue);
  function handleIncrement() {
    setCounter((c) => c + increment);
  }
  function handleDecrement() {
    setCounter((c) => c - decrement);
  }
  function handleReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment counter</button>
      <button onClick={handleDecrement}>Decrement counter</button>
      <button onClick={handleReset}>Reset counter</button>
    </div>
  );
}

export default Counter;

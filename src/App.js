import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

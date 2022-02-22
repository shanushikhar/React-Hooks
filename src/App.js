import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  let increment = () => {
    setCounter(counter + 1);
  };

  const getValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        {counter}
        <button onClick={increment}>Increment</button>
      </div>
      <br />
      <input placeholder="say something..." onChange={getValue} />
      {value}
    </div>
  );
}

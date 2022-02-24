import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
  const [data, setData] = useState("Yo Yo Yo....");
  const [toggle, setToggle] = useState(false);

  //const getVal = useCallback((e) => data + e, [data]);

  const getVal = useCallback(
    (e) => {
      return data + e;
    },
    [data]
  );

  return (
    <div>
      <div>
        <Child data={getVal} />
      </div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div>{toggle && <h1>hey buddy</h1>}</div>
    </div>
  );
}

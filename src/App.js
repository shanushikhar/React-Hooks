import React, { useState } from "react";
import Child from "./Child";
import Example from "./Example";

export default function App() {
  const [data, setData] = useState("Hi i have Hooks");

  return (
    <div>
      <Example data={data} />
      <h1>please look my branchs :)</h1>
      <Child manupulateData={setData} />
    </div>
  );
}

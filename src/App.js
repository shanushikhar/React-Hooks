
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const onClick = () => {
    // inputRef.current.placeholder = "hoho";
    // inputRef.current.focus(); // to Focus
    inputRef.current.value = ""; // to clear the field value
  };

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="say something..." />
      <button onClick={onClick}>Change Name / focus input field</button>
    </div>
  );

}

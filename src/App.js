import React, { useRef } from "react";
import Button from "./Button";

// reusable components that needs to invoke from outside like parent component

export default function App() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => buttonRef.current.doToggle()}>
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

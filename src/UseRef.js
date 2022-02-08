import React, { useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState("");
  const [showvalue, setshowValue] = useState(false);

  function getValue(e) {
    e.preventDefault();
    setshowValue(true);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setValue(e.target.value);
            setshowValue(false);
          }}
          type="text"
          placeholder="whats on your mind?"
        />
        <button type="submit" onClick={getValue}>
          click
        </button>
      </form>
      {showvalue ? <p1>{value}</p1> : null}
    </div>
  );
}

import React, { useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState(" ");
  const [showvalue, setshowValue] = useState(true);

  let MAX_LENGTH = 200;

  function getValue(e) {
    e.preventDefault();
    setshowValue(true);
  }

  const createBoundry = (e) => {
    if (e.target.value.length < MAX_LENGTH) {
      setValue(e.target.value);
    } else {
      setValue(null);
    }
    setshowValue(false);
  };

  return (
    <div>
      <form>
        <textarea
          rows="10"
          onChange={createBoundry}
          type="text"
          placeholder="whats on your mind?"
        />
        <button type="submit" onClick={getValue}>
          click
        </button>
      </form>

      {value ? (
        <p1>
          {value.length} / {MAX_LENGTH}
        </p1>
      ) : (
        <p2>Too long</p2>
      )}

      <br />
      {showvalue ? <span>{value}</span> : null}
    </div>
  );
}

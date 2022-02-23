import React, { useState, useRef, useEffect } from "react";

function useCustomHook(valToPass, refVal) {
  useEffect(() => {
    const span = refVal.current;
    span.innerText = valToPass.length;

    document.title = valToPass;
  }, [valToPass]);
}

export default function UseRef() {
  const [value, setValue] = useState(" ");
  const [showvalue, setshowValue] = useState(true);

  const messageLengthRef = useRef();

  const first10Char = value.substr(0, 10);

  useCustomHook(
    "Post: " + (first10Char ? ` ${first10Char}` : ""),
    messageLengthRef
  );

  let MAX_LENGTH = 200;

  function getValue(e) {
    e.preventDefault();
    setshowValue(true);
  }

  const createBoundry = (e) => {
    if (e.target.value.length < MAX_LENGTH) {
      setValue(e.target.value);
    } else {
      // setValue("");
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
        <div>
          <span ref={messageLengthRef} /> / {MAX_LENGTH}
        </div>
      ) : (
        <p2>Too long</p2>
      )}

      <br />
      {showvalue ? <span>{value}</span> : null}
    </div>
  );
}

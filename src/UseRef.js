import React, { useState, useRef } from "react";

export default function UseRef() {
  const [value, setValue] = useState(" ");
  const [showvalue, setshowValue] = useState(true);
  // A "Ref"erence of somethng, usually its a DOM element
  const messageLengthRef = useRef();

  let MAX_LENGTH = 200;

  function getValue(e) {
    e.preventDefault();
    setshowValue(true);
  }

  const createBoundry = (e) => {
    if (e.target.value.length < MAX_LENGTH) {
      // useRef
      const message = e.target.value;
      const span = messageLengthRef.current;
      span.innerText = message.length;

      // manually doing with ID
      //   const message = e.target.value;
      //   const span = document.getElementById("message-length");
      //   span.innerText = message.length;

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
        <div>
          {/* doing with Ref */}
          <span ref={messageLengthRef} /> / {MAX_LENGTH}
          {/* doing with ID */}
          {/* <span id="message-length" /> / {MAX_LENGTH} */}
        </div>
      ) : (
        <p2>Too long</p2>
      )}

      <br />
      {showvalue ? <span>{value}</span> : null}
    </div>
  );
}

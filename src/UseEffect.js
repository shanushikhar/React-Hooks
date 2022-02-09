import React, { useState, useRef, useEffect } from "react";
/** TODO
 * put a less than condition for useEffect  => //const first10Char = value.length > 10;
 * add a drop down to change the value in textinput based from drop down value
 * after 200 words, should come too long but broke
 */
export default function UseRef() {
  const [value, setValue] = useState(" ");
  const [showvalue, setshowValue] = useState(true);

  const messageLengthRef = useRef();

  //const first10Char = value.length > 10;
  const first10Char = value.substr(0, 10);

  useEffect(() => {
    console.log("---", value);
    const span = messageLengthRef.current;
    span.innerText = value.length;

    document.title = "Post: " + (first10Char ? ` ${first10Char}` : "");
  }, [first10Char]);

  //   useEffect(() => {
  //     const span = messageLengthRef.current;
  //     span.innerText = value.length;
  //     // document.title = "Facebook (1)";
  //     document.title = "Post: " + (value ? ` ${value}` : "");
  //   }, [value]);

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

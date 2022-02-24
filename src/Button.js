import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    doToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Button From Child</button>
      {toggle && <p>Show Text</p>}
    </div>
  );
});

export default Button;

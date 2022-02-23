import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

function Minutes() {
  const [minutes, setMinutes] = useState(5);
  const [error, setError] = useState(null);
  console.log(states);

  const handleSubtract = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      setError("Cant go below 0");
    }
  };
  const handleAdd = () => {
    setMinutes(minutes + 1);
    setError(null);
  };

  return (
    <div>
      <div className="Minutes">
        <div>
          <button
            onClick={handleSubtract}
            type="button"
            className="icon_button Minutes_button"
          >
            <FaMinus />
          </button>
        </div>
        <div className="Minutes_label" htmlFor="minutes">
          {minutes} Minutes
        </div>
        <div>
          <button
            onClick={handleAdd}
            type="button"
            className="icon_button Minutes_button"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      {error && (
        <marquee>
          <button
            onClick={() => {
              setError(null);
            }}
          >
            Dismiss
          </button>
          <center>
            <p style={{ color: "red" }}>{error}</p>
          </center>
        </marquee>
      )}
    </div>
  );
}

const states = [];
let callCount = -1;

function useState(initialValue) {
  const id = ++callCount;

  if (states[id]) return states[id];

  const setValue = (newValue) => {
    // assign the new value
    states[id][0] = newValue;
    // re-render
    renderphonyHooks();
  };
  const tuple = [initialValue, setValue];
  states.push(tuple);
  return tuple;
}

function renderphonyHooks() {
  callCount = -1;
  ReactDOM.render(<Minutes />, document.getElementById("root"));
}
renderphonyHooks();

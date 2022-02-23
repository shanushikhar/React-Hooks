import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "toogleValue":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toogleValue" });
        }}
      >
        Click me
      </button>
      <div>{state.showText && <p>I am EVEN :)</p>}</div>
    </div>
  );
}

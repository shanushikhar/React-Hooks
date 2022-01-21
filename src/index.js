import React from "react"; // blueprint of app, helps to describe the UI but not know how to render
import ReactDOM from "react-dom"; // target platform where we bring blueprint to render into

import "./index.css";
import App from "./App";

//const reactElement = <div>heyyyyyyyyyyyy !</div>
//const reactElement = React.createElement("div", null, "Aayyyyyyy");

// React is just JS
const text = "this is weird at all";
//const reactElement = React.createElement("div", null, text);

// const reactElement = React.createElement(
//   "div",
//   null,
//   (() => {
//     return text + 89;
//   })()
// );

// const reactElement = React.createElement(
//   "button",
//   { className: "icon_button cta" }, // can ass class and do styling
//   "+",
//   " ",
//   text
// );

const reactElement = React.createElement(
  "button",
  { className: "icon_button cta" }, // can ass class and do styling
  React.createElement(
    "span",
    {
      style: { fontWeight: "bold", color: "red", backgroundColor: "black" },
    },
    "+",
    "",
    text
  )
);

const domElement = document.getElementById("root");

ReactDOM.render(reactElement, domElement);

console.log("hdeyy");

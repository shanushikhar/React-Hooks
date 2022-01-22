import React from "react"; // blueprint of app, helps to describe the UI but not know how to render
import ReactDOM from "react-dom"; // target platform where we bring blueprint to render into

import "./index.css";
import App from "./App";
import { FaHome, FaCartPlus } from "react-icons/fa";

//const reactElement = <div>heyyyyyyyyyyyy !</div>
//const reactElement = React.createElement("div", null, "Aayyyyyyy");

// React is just JS
const text = "this is weird at all";

// below are the example of Behind the Hood of JSX

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

// const reactElement = React.createElement(
//   "button",
//   { className: "icon_button cta" }, // can ass class and do styling
//   React.createElement(
//     "span",
//     {
//       style: { fontWeight: "bold", color: "red", backgroundColor: "black" },
//     },
//     "+",
//     "",
//     text
//   )
// );

// JSX
// const reactElement = (
//   <button className="any class name">
//     + <span style={{ fontWeight: "bold" }}>{text.toLocaleUpperCase()}</span>
//   </button>
// );
// // style={{ fontWeight: "bold" }} => 1st curly braces means go to js and 2nd is the object

// const domElement = document.getElementById("root");
// ReactDOM.render(reactElement, domElement);

// Components
// const reactElement = (
//   <button className="any class name">
//     <FaHome /> +
//     <span style={{}}>
//       <FaCartPlus />
//     </span>
//   </button>
// );
// // style={{ fontWeight: "bold" }} => 1st curlly braces means go to js and 2nd is the object

// const Icon = () => reactElement; // defining component for reusability

// const domElement = document.getElementById("root");
// ReactDOM.render(<Icon />, domElement);

// Re_using Components.....
const Icon = ({ icon, name, children, clicked, onMyKeyBoardClicked }) => (
  <button
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onMyKeyBoardClicked();
    }}
    onClick={clicked}
    className="any class name"
  >
    {icon} <span>{name}</span>
    {children}
  </button>
);

const domElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Icon icon={<FaHome />} name="Home" /> <br />
    <Icon icon={<FaCartPlus />} name="Cart" />
    {/* here it is passing by name */}
    <Icon
      clicked={() => {
        console.log("clicked.");
      }}
    >
      HAHAhaha <FaHome />
      {/* here it is passing by position */}
    </Icon>
    <Icon children="oh god" />
    <br />
    {/* here it is passing by name */}
    <Icon
      onMyKeyBoardClicked={() => {
        console.log("keyboard clicked");
      }}
    >
      hey keyBoardClick
    </Icon>
  </div>,
  domElement
);

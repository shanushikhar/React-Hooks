import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data));
  }, []);

  const getlargestComment = (comment) => {
    if (!comment) return null;
    console.log(comment);
    let largestComment = "";
    for (let x of comment) {
      // x.body = largestComment
      if (x.body.length > largestComment.length) {
        largestComment = x.body;
      }
    }
    console.log("called.....");
    return largestComment;
  };

  const magicMemo = useMemo(() => getlargestComment(data), [data]);
  // const magicMemo = useMemo(() => {
  //   return getlargestComment(data);
  // }, [data]);

  return (
    <div>
      <h1>useMemo</h1>
      <div>{magicMemo}</div>
      <div>
        <button onClick={() => setToggle(!toggle)}>click me</button>
        {toggle && <span>you can see me now</span>}
      </div>
    </div>
  );
}

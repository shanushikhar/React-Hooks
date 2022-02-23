
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //console.log("hi ", res.data);
      setData(res.data);
    });
  }, []);

  return <div>{data && data[0].name}</div>;
}

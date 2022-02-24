import React, { useEffect } from "react";

export default function Child({ data }) {
  useEffect(() => {
    console.log("hey buddy :)");
  }, [data]);

  return <div>{data(" Bangy")}</div>;
}

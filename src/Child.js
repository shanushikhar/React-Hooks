import React from "react";

export default function Child({ manupulateData }) {
  return (
    <div>
      <input
        placeholder="say something"
        type="text"
        onChange={(e) => manupulateData(e.target.value)}
      />
    </div>
  );
}

import React, { useRef, useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

export default function App() {
  const [username, setUserName] = useState(null);
  return (
    <AppContext.Provider value={{ username, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

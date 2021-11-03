import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { useCount } from "./count-context";

function App() {
  const {
    state: { count },
    dispatch,
  } = useCount();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Current count: {count}</div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </header>
    </div>
  );
}

export default App;

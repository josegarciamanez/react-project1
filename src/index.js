import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>React Project-1</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

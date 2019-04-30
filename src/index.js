import React from "react";
import ReactDOM from "react-dom";
import Shop from "./Shop";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Shop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

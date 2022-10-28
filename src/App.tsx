import React from "react";
import "./App.css";
import { Camera } from "./media/Camera";

function App() {
  return (
    <div className="App">
      <Camera />
      <div>
        私は<input type="text"></input>です
      </div>
    </div>
  );
}

export default App;

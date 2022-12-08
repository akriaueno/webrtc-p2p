import React from "react";
import styles from "./App.module.scss";
import { Camera } from "./component/Camera";
import { SDPInput } from "./component/SDPInput";

function App() {
  return (
    <div className={styles.app}>
      <Camera />
      <div className="nameInput">
        私は<input type="text"></input>です
      </div>
      <div className={styles.container}>
        <SDPInput label="generated SDP" />
        <SDPInput label="remote SDP" placeholder="paste here" />
      </div>
    </div>
  );
}

export default App;

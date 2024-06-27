import React, { useState } from "react";

import "../../styles/index.css";
import Light from "./Light";

function Home() {
  const [turnOnLight, setTurnOnLight] = useState("");

  return (
    <div className="trafficLightContainer">
      <div className="pole"></div>
      <div className="trafficLight">
        <div
          onClick={() => setTurnOnLight("red")}
          className={"light red" + (turnOnLight === "red" ? " bright" : "")}
        ></div>
        <div
          onClick={() => setTurnOnLight("yellow")}
          className={"light yellow" + (turnOnLight === "yellow" ? " bright" : "")}
        ></div>
        <div
          onClick={() => setTurnOnLight("green")}
          className={"light green" + (turnOnLight === "green" ? " bright" : "")}
        ></div>
      </div>
    </div>
  );
}

export default Home;

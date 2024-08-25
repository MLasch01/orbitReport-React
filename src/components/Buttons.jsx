import styling from "./styling.css";
import satData from "./satData";
import App from "../App";
import { useState } from "react";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className = "flex-container">
      {displaySats.map((type, index) => {
        return (

          <button onClick={() => filterByType(type, setSat)} key={index}>
            {type} Orbit
          </button>
        );
      })}

          <button onClick={() => setSat(satData)}>
            All Orbits
          </button>
    </div>
  );
};



export default Buttons;
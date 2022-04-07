import React from "react";
import "./Game.css";
import Box from "./Box";

function Game({table}) {
  return (
    <div className="boxContainer">
      <Box number={table} />
    </div>
  );
}

export default Game;

import React, { useState } from "react";
import "./Math.css";
import Game from "../Game/Game";

function Math({ num }) {
  const [hide, setHide] = useState(false);
  const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let tableOf = parseInt(num);
  var time = 60;

  let timing = setInterval(() => {
    let clock = document.querySelector("h2");
    time = time - 1;
    clock.innerHTML = "00:" + time;

    if (time === 0) {
      clock.innerHTML = "";
      clearInterval(timing);
      setHide(true);
    }
  }, 1000);


  return (
    <div id="content">
      {hide ? (
        <Game table={tableOf} />
      ) : (
        <div className="main">
          <h2></h2>
          <h1>You have 60 seconds to remember this table.</h1>
          <div className="table">
            {series.map((element) => (
              <div>
                <p>
                  {tableOf} x {element} = {tableOf * element}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Math;

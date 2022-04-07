import "./App.css";
import { useState } from "react";
import Math from "../Math/Math";
import { Obj } from "../Home/Home";

function App() {
  const [hello, setHello] = useState(false);
  const [value, setValue] = useState(0);

  function refresh() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div
        onClick={() => {
          setHello(false);
        }}
        className="navbar"
      >
        <div id="innerNavbar">
          <h3 onClick={refresh}>tableEasy.com</h3>
          <h5>Click On table which you want to learn.</h5>
        </div>
      </div>
      {/*  */}
      {hello ? (
        <Math num={value} />
      ) : (
        <div className="Home">
          <div className="box">
            {Obj.map((abhi) => (
              <div>
                <div
                  value={abhi.tableof}
                  className="tab"
                  onClick={(e) => {
                    setValue(e.target.getAttribute("value"));
                    setHello(true);
                  }}
                >
                  <div value={abhi.tableof} className="text">
                    table of {abhi.tableof}{" "}
                  </div>
                  <div value={abhi.tableof} className="emoji">
                    {abhi.emoji}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

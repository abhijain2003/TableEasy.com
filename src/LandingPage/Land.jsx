import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Land.css";
import { NavLink } from "react-router-dom";
import image from "../image/table.jpg";


function Land() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="leftDiv">
          <div className="innerLeftDiv">
            <div className="headings">
              <h1>This is the place</h1>
              <h1 className="coloredH1">for You to learn table easily.</h1>
            </div>
            <div className="smallContent">
              <h3>
                Easily <span>master the tables</span> and faster your
                calculations.
              </h3>
              <NavLink 
              exact 
              to='/app'
              className='btn'
              >Start Learning</NavLink>
              <h6>No sign-up required. Start right away.</h6>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <img alt="image" src={image} />
        </div>
      </div>
      <div className="tutorial">
        <iframe width="860" height="315" 
src="https://www.youtube.com/embed/fkchFU5wwM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
        </div>
    </div>
  );
}

export default Land;

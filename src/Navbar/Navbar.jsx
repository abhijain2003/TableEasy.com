import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {

  function refresh() {
    window.location.reload();
  }

  return (
    <div className="navbar">
      <div className="innerNav">
        <h3 onClick={refresh}>tableEasy.com</h3>
        <NavLink 
        exact 
        to="/app"
        className='btn'
        >
          Start learning
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <div class="nav">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
        <a>
          <Link to="/join">Join Us!</Link>
        </a>
        <a>
          <Link to="/resources">Resources</Link>
        </a>
        <a>
          <Link to="/shop">Shop</Link>
        </a>
    </div>
  );
}

export default Navbar;
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

function Footer() {
  return (
    <div class="footer">
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
        <a>
            <Link>Start a Chapter!</Link>
        </a>
        <a>
            <Link>Newsletter</Link>
        </a>
        <a>
            <Link>Contact Us</Link>
        </a>
        <a>
        <Link>
        <form>
            <input type="text"></input>
            <input type="submit"></input>
        </form>
        </Link>
        </a>
        <a>
          <Link>© Hearts of Love 2022</Link>
        </a>
    </div>
  );
}

export default Footer;
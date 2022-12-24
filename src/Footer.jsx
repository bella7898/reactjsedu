import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

function Footer() {
  return (
    <div class="footer">
      <a>
      <Link><img src="https://bella7898.github.io/reactjsedu/src/assets/hearts_1.png" alt="Hearts Of Love Logo" width="50" height="50"></img></Link>
      </a>
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
      
      <p class="copyright">© Hearts of Love 2022</p>
    </div>
  );
}

export default Footer;
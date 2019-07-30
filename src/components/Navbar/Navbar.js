import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/dashboard">
        <img
          // src="https://fontmeme.com/permalink/190724/8f2bd2e8d36ee8f404723b6c674e437a.png"
          src="https://fontmeme.com/permalink/190731/15a20cff2c4602b960dbbe6a691e1ac6.png"
          alt="Disney Parent logo"
        />
      </Link>
      <ul className="nav-links">
        <Link className="link" to="/signin">
          <li>Sign In / Sign Up</li>
        </Link>
      </ul>
    </header>
  );
}

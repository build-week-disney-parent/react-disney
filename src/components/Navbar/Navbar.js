import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <img
        src="https://fontmeme.com/permalink/190724/8f2bd2e8d36ee8f404723b6c674e437a.png"
        alt="Disney Parent logo"
      />
      <ul className="nav-links">
        <Link className="link" to="/signin">
          <li>Sign In / Sign Up</li>
        </Link>
      </ul>
    </header>
  );
}

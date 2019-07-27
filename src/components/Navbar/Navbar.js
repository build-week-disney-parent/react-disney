import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <img
        src="https://fontmeme.com/permalink/190724/8f2bd2e8d36ee8f404723b6c674e437a.png"
        alt="Disney Parent logo"
      />
      <ul className="nav-links">
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </header>
  );
}

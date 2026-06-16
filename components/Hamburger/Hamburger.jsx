"use client";

import { RiMenu3Line } from "react-icons/ri";
import "./Hamburger.css";


export default function Hamburger({ onClick, scrolled }) {
  return (
    <button
      type="button"
      className={`menu-btn ${scrolled ? "scrolled" : ""}`}
      id="menu-toggle"
      onClick={onClick}
      aria-label="Open navigation menu"
      aria-expanded="false"
    >
      <span className="hamburger" aria-hidden="true">
        <RiMenu3Line />
      </span>
      <span className="menu-text">Menu</span>
    </button>
  );
}

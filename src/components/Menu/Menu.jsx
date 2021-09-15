import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setMenu }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenu(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenu(!menuOpen)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenu(!menuOpen)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenu(!menuOpen)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenu(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

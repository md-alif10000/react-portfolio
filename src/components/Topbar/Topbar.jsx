import { Mail, Person } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenu }) => {
  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className="logo">
            Md. Alif
          </a>
          <div className="item">
          <div className="itemContainer">
            <Person className="icon" />
            <span>+880 1309677070</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>md.alif10000@gmail.com</span>
          </div>
          

          </div>
         
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenu(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

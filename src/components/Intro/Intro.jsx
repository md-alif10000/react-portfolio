import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:40,
      strings: ["Full stuck Web Developer","Android App Developer!", "Ios Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./images/me.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Md Alif</h1>
          <h3>
           <span ref={textRef}> </span>{" "}
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

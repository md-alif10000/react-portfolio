import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import Works from "./components/Works/Works";
import { useState } from "react";

function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={isOpen} setMenu={setisOpen} />
      <Menu menuOpen={isOpen} setMenu={setisOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

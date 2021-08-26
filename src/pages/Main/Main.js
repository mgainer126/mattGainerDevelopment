import React from "react";
import "../Main/Main.scss";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="mainwrapper">
          <Navbar />
          <Hero />
        </div>
        <div className="portfoliowrapper">
          <Portfolio />
        </div>
        <div className="aboutwrapper">
          <About />
          <Skills />
        </div>
      </>
    );
  }
}

export default Main;

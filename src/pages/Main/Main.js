import React from "react";
import "../Main/Main.scss";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="mainwrapper">
          <Navbar />
          <Hero />
        </div>
        <Portfolio />
      </>
    );
  }
}

export default Main;

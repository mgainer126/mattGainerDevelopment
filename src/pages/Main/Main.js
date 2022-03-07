import React from "react";
import "../Main/Main.scss";
import Header from "../../components/Header/Header";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import ContactMe from "../../components/ContactMe/ContactMe";

function Main() {
  return (
    <div className="pagewrapper">
      {/* <Navbar /> */}
      <Header />
      <div className="mainwrapper">
        <div className="mainpagealignment">
          <div className="herowrapper">
            <Hero />
          </div>
          <div className="portfoliowrapper">
            <Portfolio />
          </div>
          <div className="aboutwrapper">
            <About />
            <Skills />
          </div>

          <div className="contactme-wrapper">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;

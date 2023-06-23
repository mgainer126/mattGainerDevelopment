import data from "../assets/data/resumeData.json";
import download from "../assets/images/download.svg";
import meImage from "../assets/images/profilepic.jpg";
import React from "react";

function About() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="about">
      <div
        className={`fade-in-left ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="about-about">
          <img src={meImage} alt="me" className="about-img" />
          <section className="about-me">
            <h2 className="about-title">About Me</h2>
            {data.main.bio.map((item, index) => {
              return (
                <p className="about-description" key={index}>
                  {item}
                </p>
              );
            })}
          </section>
        </section>
        <section className="about-contact">
          <div>
            <h2 className="about-title">Contact Details</h2>
            <p className="about-company">{data.main.name}</p>
            <p className="about-company">{data.main.address.street}</p>
            <p className="about-company">
              {data.main.address.city}, {data.main.address.state},{" "}
              {data.main.address.zip}{" "}
            </p>
            <p className="about-company">{data.main.phone}</p>
            <p className="about-company">{data.main.email}</p>
          </div>
          <div>
            <div className="about-resume">
              <img
                src={download}
                alt="download"
                className="about-resume-icon"
              />
              <a
                href="https://1drv.ms/w/s!AtKTEtRydYtmk1xPa-GdpnYL77fj?e=sAeDks"
                className="about-resume-btn"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;

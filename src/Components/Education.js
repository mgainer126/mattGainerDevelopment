import React from "react";
import data from "../assets/data/resumeData.json";

function Education() {
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
    <div
      className={`fade-in-left ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <section className="education">
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-list">
          {data.resume.education.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <p className="education-item-title">{item.school}</p>
                <p className="education-item-major">{item.degree}</p>
                <p className="education-item-date">{item.graduated}</p>
                {item.description.map((item, index) => {
                  return (
                    <p className="education-item-description" key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Education;

import data from "../assets/data/resumeData.json";
import ProgressBar from './ProgressBar';
import React from 'react';


function Skills (){
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
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

    return(
        <div className={`fade-in-left ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <section className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-list">
            {data.resume.skills.map((item, index) => {
               const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
                return (
                    <div className="skills-item" key={index}>
                        <div className="skills-item-title">{item.name}</div>
                        <ProgressBar key={index} bgcolor={randomColor} completed={item.level} />
                    </div>
                )
            })}
        </div>
    </section>
    </div>
    );
}

export default Skills;
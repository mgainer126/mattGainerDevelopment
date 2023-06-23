import data from "../assets/data/resumeData.json";
import portfolio from '../assets/images/01.png';
// import dashboard from '../assets/images/02.png';
import foodiofare from '../assets/images/03.png';
import brewercave from '../assets/images/04.png'
import ecommerce from '../assets/images/05.png'
import React from 'react';

function Works (){
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
        <section className="works">
                  <div className={`fade-in-left ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <h2 className="works-title">CHECK OUT SOME OF MY WORKS</h2>
           <div className="works-list">
            <a href="https://www.mattgainerdevelopment.com/" >
              <div className="works-item" >
                <img src={portfolio} alt="project" className="works-item-img"/>
                <div className="works-item-title">{data.portfolio.projects[0].title}</div>
              </div>
            </a>
            <a href="https://www.foodiofare.com/" >
            <div className="works-item" >
              <img src={foodiofare} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[2].title}</div>
            </div>
            </a>
            <a href="https://www.brewercave.com/" >
            <div className="works-item" >
              <img src={brewercave} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[3].title}</div>
            </div>
            </a>
            <a href="https://coolhunterz.netlify.app/" >
            <div className="works-item" >
              <img src={ecommerce} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[4].title}</div>
            </div>
            </a>
</div>
</div>
    </section>
    );
}

export default Works;
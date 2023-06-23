import ParticlesBg from "particles-bg";
import github from "../assets/images/github.svg";
import data from "../assets/data/resumeData.json";


function Hero (){


    return(
        <>
      
        <section className="hero">
        <ParticlesBg color="random" type="square" bg={true} />
        
       
            <h1 className="hero-title">
                {data.main.name}
            </h1>
            <p className="hero-description">
                {data.main.description}
            </p>
            <a href={data.main.github} className="hero-link">
            <div className="hero-btn">
              <img src={github} alt="github" className="hero-btn-icon"/>
              <p className="hero-github">GitHub</p>
          </div>
            </a>
            
        </section>
        
        </>
        
    )
}

export default Hero;
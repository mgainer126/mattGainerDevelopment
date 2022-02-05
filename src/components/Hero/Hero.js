import "../../components/Hero/Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <hero className="herowrapper">
        <div>
          <h2 className="hero">Hey,</h2>
          <h2 className="hero">I'm Matt,</h2>
          <h2 className="hero">Web Developer</h2>
          <Link to="/ContactPage" className="contact-link">
            <div className="hero__contact">Contact Me!</div>
          </Link>
        </div>
      </hero>
    </>
  );
}

export default Hero;

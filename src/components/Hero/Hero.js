import "../../components/Hero/Hero.scss";

function Hero() {
  return (
    <>
      <hero className="herowrapper">
        <div>
          <h2 className="hero">Hey,</h2>
          <h2 className="hero">I'm Matt,</h2>
          <h2 className="hero">web developer</h2>
          <div className="hero__contact">Contact Me!</div>
        </div>
      </hero>
    </>
  );
}

export default Hero;

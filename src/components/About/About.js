import "../About/About.scss";

function About() {
  return (
    <section className="about">
      <about className="about__wrapper">
        <h2 className="about__title">About Me</h2>
        <p className="about__summary">
          Above all things, I love building things and making them work. There
          is a moment after you have built something you have put your heart and
          soul into, and you flip that switch and it works as expected. It's is
          a big bang feeling that is hard to replicate, those who have worked
          with me will attest to my joy of that moment. I've always gravitated
          towards activities both personal and professional where I can create.
        </p>
        <p className="about__summary">
          In my most recent role as a Product Owner Manager, I've had the
          fortunate opportunity to work closely with developers as well as all
          other areas of the business to bring ideas to life.
        </p>
        <p className="about__summary">
          As a recent Web Development graduate I feel the sky is the limit in
          terms of what I can do with code. With this educational knowledge, I
          intend to deliver experiences to customers from inception through to
          code as a developer. When you love what you do, it is not work.
        </p>
      </about>
    </section>
  );
}

export default About;

import "../AboutPage/AboutPage.scss";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page">
        <About />
      </div>
    </>
  );
}

export default AboutPage;

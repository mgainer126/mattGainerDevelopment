import "../AboutPage/AboutPage.scss";
import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";

function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="about-page">
        <About />
      </div>
    </>
  );
}

export default AboutPage;

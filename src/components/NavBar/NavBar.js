import "../NavBar/NavBar.scss";
import logo from "../../assets/mattgainer.png";
import githublogo from "../../assets/GitHub.png";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbarwrapper">
        <Link to="/" className="navbar-link">
          <logo className="logo">
            <img src={logo} alt="logo" className="logo__img"></img>
          </logo>
        </Link>
        <ul className="navbar">
          <Link to="/AboutPage" className="navbar-link">
            <li className="navbar__1">About</li>
          </Link>

          <Link to="/SkillsPage" className="navbar-link">
            <li className="navbar__2">My Skills</li>
          </Link>
          {/* <li className="navbar__3">Work</li> */}
          <Link to="ContactPage" className="navbar-link">
            <li className="navbar__4">Contact</li>
          </Link>
        </ul>
        <ul className="soc-media">
          <li>
            <ExternalLink href="https://www.linkedin.com/in/matthew-gainer-cbap-cspo/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
                className="soc-media__img"
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/mgainer126">
              <img src={githublogo} alt="github" className="soc-media__img" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

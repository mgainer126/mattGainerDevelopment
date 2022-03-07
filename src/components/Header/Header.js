import "../Header/Header.scss";
import logo from "../../assets/mattgainer.png";
import githublogo from "../../assets/GitHub.png";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__link">
            <logo className="header__logo">
              <img src={logo} alt="logo" className="header__img"></img>
            </logo>
          </Link>
          <ul className="header__navbar">
            <Link to="/AboutPage" className="headernavbar__link">
              <li className="header__item">About</li>
            </Link>

            <Link to="/SkillsPage" className="headernavbar__link">
              <li className="header__item">My Skills</li>
            </Link>
            {/* <li className="navbar__3">Work</li> */}
            <Link to="ContactPage" className="headernavbar__link">
              <li className="header__item">Contact</li>
            </Link>
          </ul>
          <ul className="header__soc-media">
            <li>
              <ExternalLink href="https://www.linkedin.com/in/matthew-gainer-cbap-cspo/">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="LinkedIn"
                  className="headersoc-media__img-linkedin"
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/mgainer126">
                <img
                  src={githublogo}
                  alt="github"
                  className="headersoc-media__img-github"
                />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

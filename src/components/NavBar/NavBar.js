import "../NavBar/NavBar.scss";
import logo from "../../assets/mattgainer.png";

function NavBar() {
  return (
    <>
      <div className="navbarwrapper">
        <logo className="logo">
          <img src={logo} alt="logo" className="logo__img"></img>
        </logo>
        <ul className="navbar">
          <li className="navbar__1">About</li>
          <li className="navbar__2">My Skills</li>
          <li className="navbar__3">Work</li>
          <li className="navbar__4">Contact</li>
        </ul>
        <ul className="soc-media">
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
              className="soc-media__img"
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v2.png"
              alt="twitter"
              className="soc-media__img"
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook.png"
              alt="facebook"
              className="soc-media__img"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

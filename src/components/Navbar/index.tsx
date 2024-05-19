import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
      <div className="container">
        <ul className={`nav ${clicked && "show"}`}>
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#home">
              Skills
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#service">
              Services
            </a>
          </li>
          {/* <li className="item">
            <a className="link" href="#portfolio">
              Portfolio
            </a>
          </li> */}
          {/* <li className="item">
          <a className="link" href="#testmonial">
            Testmonial
          </a>
        </li> */}

          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <a
          id="nav-toggle"
          className={`hamburger hamburger--elastic ${clicked && "is-active"}`}
          onClick={handleClick}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

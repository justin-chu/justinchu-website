import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoMail } from "react-icons/go";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import "./Navbar.css";

function Navbar() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 641 });
    return isDesktop ? children : null;
  };
  const MobileOrTablet = ({ children }) => {
    const isMobileOrTablet = useMediaQuery({ maxWidth: 640 });
    return isMobileOrTablet ? children : null;
  };

  return (
    <div style={{ marginBottom: 60 }}>
      <Desktop>
        <nav className="nav-items">
          <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
            <h5 style={{ fontWeight: 700 }} className="nav-logo">
              Justin Chu
            </h5>
          </Link>
          <ul className="nav-menu">
            <li>
              <Link
                to={{
                  pathname: "/portfolio",
                }}
                className="nav-links"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/resume",
                }}
                className="nav-links"
              >
                Resume
              </Link>
            </li>
          </ul>
          <div className="right-container">
            <a
              href="mailto:j64chu@uwaterloo.ca"
              className="social-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail
                style={{ marginRight: 15, marginTop: 1, color: "" }}
                size="1.9em"
              />
            </a>
            <a
              href="https://github.com/justin-chu"
              className="social-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub
                style={{ marginRight: 15, marginTop: 2 }}
                size="1.65em"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/justinchu252/"
              className="social-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin style={{ marginTop: 0.5 }} size="1.9em" />
            </a>
          </div>
        </nav>
      </Desktop>
      <MobileOrTablet>
        <MobileNavbar />
      </MobileOrTablet>
    </div>
  );
}

export default Navbar;

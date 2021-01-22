import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoMail } from "react-icons/go";
import Menu from "../../assets/images/menu.svg";
import Cross from "../../assets/images/cross.svg";
import "./MobileNavbar.css";

function MobileNavbar() {
  const [drawer, setDrawer] = React.useState(false);
  return (
    <nav className="nav-items">
      <Link to={{ pathname: "/" }} className="nav-logo">
        <h5 style={{ fontWeight: 700 }} className="nav-logo">
          Justin Chu
        </h5>
      </Link>
      <button onClick={() => setDrawer(true)} className="menu-button">
        <img alt="" height={22} width={22} src={Menu} />
      </button>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <div className="drawer">
          <div className="mobile-nav-logo ">
            <button onClick={() => setDrawer(false)} className="cross-button">
              <img alt="" height={18} width={18} src={Cross} />
            </button>
          </div>
          <ul className="mobile-nav-menu">
            <Link
              to={{
                pathname: "/",
              }}
              onClick={() => setDrawer(false)}
              className="mobile-nav-links"
            >
              <li>Home</li>
            </Link>
            <Link
              to={{
                pathname: "/portfolio",
              }}
              onClick={() => setDrawer(false)}
              className="mobile-nav-links"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to={{
                pathname: "/resume",
              }}
              onClick={() => setDrawer(false)}
              className="mobile-nav-links"
            >
              <li>Resume</li>
            </Link>
          </ul>
          <div className="bottom-container">
            <a
              href="mailto:j64chu@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail
                color="black"
                style={{ marginRight: 15, marginTop: 1, color: "" }}
                size="1.9em"
              />
            </a>
            <a
              href="https://github.com/justin-chu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub
                color="black"
                style={{ marginRight: 15, marginTop: 2 }}
                size="1.65em"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/justinchu252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin
                color="black"
                style={{ marginRight: 15, marginTop: 0.5 }}
                size="1.9em"
              />
            </a>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}

export default MobileNavbar;

import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import "./MobileNavbar.css";

function MobileNavbar() {
  const [drawer, setDrawer] = React.useState(false);
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setDrawer(false)}>
      <nav
        className="nav-items mobile-nav"
        style={{ position: "fixed", padding: "10px 20px" }}
      >
        <Link to={{ pathname: "/" }} className="nav-logo">
          <h5 style={{ fontWeight: 700 }} className="nav-logo">
            Justin Chu
          </h5>
        </Link>
        <button onClick={() => setDrawer(!drawer)} className="icon-button">
          <svg
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {!drawer ? (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
        <motion.div
          className="drawer"
          initial={false}
          animate={drawer ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <ul className="mobile-nav-menu">
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
                pathname: "/blog",
              }}
              onClick={() => setDrawer(false)}
              className="mobile-nav-links"
            >
              <li>Blog</li>
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
                style={{ marginRight: 15, marginTop: 0.5 }}
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
        </motion.div>
      </nav>
    </OutsideClickHandler>
  );
}

export default MobileNavbar;

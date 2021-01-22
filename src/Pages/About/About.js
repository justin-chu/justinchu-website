import React from "react";
import "./About.css";
import Code from "../../assets/images/code.svg";
// import Anime from "react-anime";
import Connect from "./Connect";
import Skills from "./Skills";
// import ResumeProjects from "./ResumeProjects";

const About = () => {
  function ScrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1280, minHeight: "100vh" }}>
        <div className="panel-1">
          <div>
            <h1 className="header">Hi, I'm Justin.</h1>
            <p className="intro">
              I'm a second-year Computer Science student at the University of
              Waterloo who loves building websites and apps from front-end to
              back-end!
            </p>
            <button className="button" onClick={() => ScrollToBottom()}>
              Contact me
            </button>
          </div>
          <img src={Code} alt="" className="image" />
        </div>
        <div className="arrow bounce">
          <svg
            height="70"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <Skills />
        {/* <ResumeProjects /> */}
        <Connect />
      </div>
    </div>
  );
};

export default About;

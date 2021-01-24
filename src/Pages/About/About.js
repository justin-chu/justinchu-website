import React from "react";
import "./About.css";
import Code from "../../assets/images/code.svg";
import { Helmet } from "react-helmet";
import Typist from "react-typist";
// import "dist/Typist.css";
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

  function ScrollToContent() {
    var content = document.getElementById("content").offsetTop;
    window.scrollTo({
      top: content,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <title>Justin Chu</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div style={{ width: "100%", maxWidth: 1280, minHeight: "100vh" }}>
        <div className="panel-1">
          <div>
            <h1 className="header">
              <Typist cursor={{ show: false }}>Hi, I'm Justin!</Typist>
            </h1>
            <p className="intro">
              I'm a second-year Computer Science student at the University of
              Waterloo who loves building websites and apps from front-end to
              back-end!
            </p>
            <div>
              <button className="button" onClick={() => ScrollToBottom()}>
                Contact me
              </button>
              <a
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1r3gJgt1mFUHEEGLmqVqC1CORPbf5Hm5-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button resume-button" onClick={() => {}}>
                  View my resume
                </button>
              </a>
            </div>
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
            onClick={() => ScrollToContent()}
            style={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <div id="content">
          <Skills />
          {/* <ResumeProjects /> */}
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default About;

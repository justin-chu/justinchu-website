import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./About.css";
import { Link } from "react-router-dom";
import Code from "../../assets/images/code.svg"
import Projects from "../../assets/images/projects.svg"
import Resume from "../../assets/images/resume.svg"
import { Skills } from "./Skills"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs"
import { GoMail } from "react-icons/go";

const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000, offset: 0});
  }, [])
  
  function ScrollToBottom() {
    window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"});
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{width: "100%", maxWidth: 1280}}>
        <div className="panel-1">
          <div>
            <h1 className="header" data-aos="fade">Hi, I'm Justin.</h1>
            <p className="intro" data-aos="fade">I'm a second-year Mathematics student at the University of Waterloo.</p>
            <p className="intro" data-aos="fade">I use various languages and technologies but specialize in React, JavaScript, Java, and Python.</p>
            <button className="button" data-aos="fade" onClick={() => ScrollToBottom()}>Contact me</button>
          </div>
          <img src={Code} className="image" data-aos="fade" />
        </div>
        <div className="panel-2">
          <h1 className="sub-header">Skills</h1>
          <div className="grid">
            {Skills.map((item, index) => {
              return (
                <div className="item" data-aos="fade-up">
                  <div className="inner">
                    <div className="front" style={{backgroundColor: item.color}}>
                      <img style={{ height: 80, width: 80 }} src={require(`../../assets/images/${item.path}`)} />
                      <p>{item.name}</p>
                    </div>
                    <div className="back" style={{backgroundColor: item.color}}>
                      <p>{item.info}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="panel-3">
          <h1 className="sub-header">Portfolio</h1>
          <div className="portfolio">
            <div style={{width: 600}}>
              <p className="portfolio-text">Check out my most recent personal projects and hackathons...</p>
              <Link to={{ pathname: "/portfolio" }} className="portfolio-link">
              <p className="text">View my portfolio</p>
                <BsArrowRight color="black" size="32px" className="arrow-1" />
              </Link>
            </div>
            <img className="portfolio-image" src={Projects} />            
          </div>
        </div>
        <div className="panel-4">
          <h1 className="sub-header">Resume</h1>
          <div className="resume">
            <div style={{width: 600}}>
              <p className="resume-text">My relevant work experience, project and hackathon details, education, and more...</p>
              <Link to={{ pathname: "/resume" }} className="resume-link">
              <p className="text">View my resume</p>
                <BsArrowRight color="black" size="32px" className="arrow-2" />
              </Link>
            </div>
            <img className="resume-image" src={Resume} />
          </div>
        </div> */}
        <div className="panel-5">
          <h1 className="sub-header">Connect with me</h1>
          <div style={{marginTop: 20, marginBottom: 60}}>
            <a 
              href="https://www.linkedin.com/in/justinchu252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button 
                className="contact"
                // style={{backgroundColor: "#f3f3f3"}}
              >
                <GoMail color="black" size="32px" /> {/*require(`../assets/images/devpost.svg`)*/}
              </button>
            </a>
            <a 
              href="https://github.com/justin-chu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button 
                className="contact"
                style={{backgroundColor: "#f3f3f3"}}
              >
                <IoLogoGithub color="#333" size="32px" />
              </button>
            </a>
            <a 
              href="https://www.linkedin.com/in/justinchu252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button 
                className="contact"
                style={{backgroundColor: "#e7f2fd"}}
              >
                <IoLogoLinkedin color="#2867B2" size="32px" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

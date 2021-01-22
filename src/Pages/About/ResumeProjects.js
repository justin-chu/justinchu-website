import { Link } from "react-router-dom";
import Projects from "../../assets/images/projects.svg";
import Resume from "../../assets/images/resume.svg";
import { BsArrowRight } from "react-icons/bs";

const ResumeProjects = () => {
  return (
    <div>
      <div className="panel-3">
        <h1 className="sub-header">Portfolio</h1>
        <div className="portfolio">
          <div style={{ width: 600 }}>
            <p className="portfolio-text">
              Check out my most recent personal projects and hackathons...
            </p>
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
          <div style={{ width: 600 }}>
            <p className="resume-text">
              My relevant work experience, project and hackathon details,
              education, and more...
            </p>
            <Link to={{ pathname: "/resume" }} className="resume-link">
              <p className="text">View my resume</p>
              <BsArrowRight color="black" size="32px" className="arrow-2" />
            </Link>
          </div>
          <img className="resume-image" src={Resume} />
        </div>
      </div>
    </div>
  );
};

export default ResumeProjects;

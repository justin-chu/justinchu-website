import React from "react";
import "./Portfolio.css";

const WorkExperience = () => {
  const [work, setWork] = React.useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%" }}>
        <h2 className="sub-header" style={{ marginTop: 0, margin: 0 }}>
          Work Experience
        </h2>
        <p className="portfolio-desc">
          Check out some of my past projects that I've built for school,
          hackathons, or on my own.
        </p>

        <div className="work-experience-container">
          <div style={{display: "flex", flexDirection: "column"}}>
            <div onClick={() => setWork(0)} className="work-experience-button">
              <img
                alt={`Amazon`}
                className="work-experience-logo"
                src={`/images/amazon.png`}
              />
            </div>
            <div onClick={() => setWork(1)} className="work-experience-button">
              <img
                alt={`Amazon`}
                className="work-experience-logo"
                src={`/images/arctic-wolf.png`}
              />
            </div>
            <div onClick={() => setWork(2)} className="work-experience-button">
              <img
                alt={`Amazon`}
                className="work-experience-logo"
                src={`/images/pencil.png`}
              />
            </div>
          </div>
          <div className="work-experience-content">
            <p className="work-experience-text">
              {work === 0 ?
                "Amazon"
                : work === 1 ?
                  "Developed customer portal using React, Redux, Bootstrap, and used Django and Python to develop a comprehensive REST API Integrated sensor API with the customer portal, allowing customers to configure sensors 90% faster  Maintained code quality by creating unit tests with Jest, Enzyme, (python test runner), and used Cypress for "
                :
                  "Pencil"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

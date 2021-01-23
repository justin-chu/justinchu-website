import React from "react";
import "./Portfolio.css";
import { Projects } from "./Projects";

const Portfolio = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="portfolio-container">
        <h1
          className="sub-header"
          style={{ marginTop: 0, margin: 0, textAlign: "left" }}
        >
          Portfolio
        </h1>
        <p className="portfolio-desc">
          Check out some of my past projects that I've built for school,
          hackathons, or on my own.
        </p>
        <div className="projects-container">
          {Projects.map((item, index) => {
            return (
              <a
                key={index}
                className="card"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    className="project-image-container"
                    style={{
                      backgroundImage: `url(/images/${item.image})`,
                    }}
                  >
                    <img
                      alt={item.title}
                      className="project-image"
                      src={`/images/${item.image}`}
                    />
                    <div className="project-overlay">
                      <div className="project-text">
                        <h2 className="project-title">{item.title}</h2>
                        <p className="project-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

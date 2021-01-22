import React from "react";
import "./Portfolio.css";
import { Projects } from "./Projects";

const Portfolio = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          padding: 60,
          minHeight: "100vh",
        }}
      >
        <h1 className="sub-header" style={{ marginTop: 0, marginBottom: 40 }}>
          Portfolio
        </h1>
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
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      // filter: "blur(1px)",
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

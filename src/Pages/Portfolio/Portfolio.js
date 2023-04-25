import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <title>Justin Chu - Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <div className="portfolio-container">
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;

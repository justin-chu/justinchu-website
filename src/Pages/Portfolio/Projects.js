import React, { useEffect } from "react";
import "./Portfolio.css";
import { ProjectList } from "./ProjectList";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const square = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%" }}>
        <h2 className="sub-header">
          Projects
        </h2>
        <p className="portfolio-desc">
          Check out some of my past projects that I've built for school,
          hackathons, or on my own.
        </p>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={list}
          className="projects-container"
        >
          {ProjectList.map((item, index) => {
            return (
              <motion.div variants={square} key={index}>
                <a
                  className="card"
                  href={item.link !== "" && item.link}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

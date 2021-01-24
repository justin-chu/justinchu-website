import { useEffect } from "react";
import { SkillsItems } from "./SkillsItems";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

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
        staggerChildren: 0.2,
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
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <div className="panel-2">
      <h1 className="sub-header" style={{ marginTop: 0, marginBottom: 0 }}>
        Skills
      </h1>
      <p className="portfolio-desc" style={{ marginBottom: 40 }}>
        These are a few of the languages/frameworks I've used in projects and am
        most familiar with.
      </p>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={list}
        className="grid"
      >
        {SkillsItems.map((item, index) => {
          return (
            <motion.div variants={square} key={index}>
              <div className="item-container">
                <div className="item" style={{ backgroundColor: item.color }}>
                  <img
                    style={{ height: "50%", width: "50%" }}
                    alt={item.name}
                    src={`/images/${item.path}`}
                  />
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#585858" }}>
                {item.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;

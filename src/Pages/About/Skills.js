import { SkillsItems } from "./SkillsItems";

const Skills = () => {
  return (
    <div className="panel-2">
      <h1 className="sub-header" style={{ marginTop: 0, marginBottom: 0 }}>
        Skills
      </h1>
      <p className="portfolio-desc" style={{ marginBottom: 40 }}>
        These are a few of the languages/frameworks I've used in projects and am
        most familiar with.
      </p>
      <div className="grid">
        {SkillsItems.map((item, index) => {
          return (
            <div key={index}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

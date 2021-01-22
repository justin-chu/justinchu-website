import { SkillsItems } from "./SkillsItems";

const Skills = () => {
  return (
    <div className="panel-2">
      <h1 className="sub-header">Skills</h1>
      <div className="grid">
        {SkillsItems.map((item, index) => {
          return (
            <div key={index} className="item-container">
              <div className="item" style={{ backgroundColor: item.color }}>
                <img
                  style={{ height: "40%", width: "40%" }}
                  alt={item.name}
                  src={`/images/${item.path}`}
                />
                <p style={{ margin: "24px 0 0 0", color: "rgba(0,0,0,0.8)" }}>
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

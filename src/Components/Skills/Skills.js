import React from "react";
import SkillItem from "./SkillItem";

const skillList = [
  { type: "Languages", items: ["C++", "Python", "HTML", "CSS", "Javascript"] },
  { type: "Frameworks", items: ["React.js", "Flutter", "Flask"] },
  { type: "Tools", items: ["Bash", "Git & Github", "Vim"] },
];

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          {skillList.map((skill) => (
            <SkillItem type={skill.type} items={skill.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

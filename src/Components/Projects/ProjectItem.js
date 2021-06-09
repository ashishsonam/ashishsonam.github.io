import React from "react";

const ProjectItem = ({ name, description, tools }) => {
  return (
    <div>
      <div className="project__name">
        <a href="#" target="_blank" className="arrow-link">
          {name}
        </a>
      </div>
      <p>{description}</p>
      <div className="project__used">
        {tools.map((tool) => (
          <span className="project__used__item">{tool}</span>
        ))}
      </div>
      <br />
    </div>
  );
};

export default ProjectItem;

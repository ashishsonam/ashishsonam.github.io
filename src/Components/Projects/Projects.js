import React from "react";
import ProjectItem from "./ProjectItem";

const projectList = [
  {
    name: "Mobile App for IIIT N",
    description: "Built with Flutter.",
    tools: ["Flutter", "Firebase", "Python", "Flask"],
  },
  {
    name: "Discord Bot",
    description: "Implemented using Python and Discord.js Library",
    tools: ["Discord.js", "Python", "Flask"],
  },
  {
    name: "E-Commerce Site",
    description: "Simple E-Commerce site built using React.",
    tools: ["React", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section className="section other-projects">
      <div className="section__title">Projects</div>
      <div className="section__content">
        <div className="project">
          {projectList.map((project) => (
            <ProjectItem
              name={project.name}
              description={project.description}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

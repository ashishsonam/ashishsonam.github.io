import React from "react";
import ExperienceItem from "./ExperienceItem";

const experienceList = [
  {
    job: "Geeks for Geeks",
    time: "Nov 2020 - Present",
    position: "Technical Content Writer",
  },
];

const Experience = () => {
  return (
    <section className="section experience">
      <div className="section__title">Experience</div>
      <div className="section__content">
        <div className="jobs">
          {experienceList.map((experience) => (
            <ExperienceItem
              job={experience.job}
              time={experience.time}
              position={experience.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

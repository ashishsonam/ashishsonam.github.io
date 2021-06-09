import React from "react";

const ExperienceItem = ({ job, time, position }) => {
  return (
    <div className="job">
      <div className="time-place">
        <div className="job__company">
          <a href="#" target="_blank">
            {job}
          </a>
        </div>
        <div className="job__time">{time}</div>
      </div>
      <div className="job__position">{position}</div>
    </div>
  );
};

export default ExperienceItem;

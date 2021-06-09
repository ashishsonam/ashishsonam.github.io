import React from "react";

const SkillItem = ({ type, items }) => {
  return (
    <div className="skillz__category">
      <div className="skillz__category__label">{type}</div>
      <ul>
        {items.map((item) => (
          <li className="skillz__category__item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;

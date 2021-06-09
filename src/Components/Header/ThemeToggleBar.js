import React from "react";

const ThemeToggleBar = () => {
  return (
    <div className="switch-wrapper">
      <div className="sun"></div>
      <div className="toggle-wrapper">
        <input id="switch" type="checkbox" />
        <label for="switch" id="toggle">
          Toggle
        </label>
      </div>
      <div className="moon"></div>
    </div>
  );
};

export default ThemeToggleBar;

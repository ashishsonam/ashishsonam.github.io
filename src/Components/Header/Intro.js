import React from "react";

const Intro = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello! <span className="emoji wave-hand animated"></span>
      </h1>
      <h2 className="intro__tagline">
        I'm <span className="name">Ashish Sonam</span>, a 2nd year CSE undergrad
        at IIIT Nagpur Learning MERN development and exploring open source.{" "}
        {/* <span className="emoji technologist"></span> */}
      </h2>
      <h3 className="intro__contact">
        <span>Get in touch</span>
        <span className="arrow-static"></span>
        &nbsp;&nbsp;
        <span>
          <a
            href="mailto:ashishsonam00@gmail.com"
            target="_blank"
            className="highlight-link"
          >
            ashishsonam00@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Intro;

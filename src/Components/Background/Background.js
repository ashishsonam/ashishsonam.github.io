import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I'm currently a Computer Science student at IIIT Nagpur learning MERN
          development and constantly competing at various programming contests
          with my Data Structures and Algorithm skills. I'm also quite
          interested in Open Source Software and always trying to contribute my
          part to the Open Source World.
        </p>
        <p>
          <strong>When I'm not in front of a computer screen</strong>, I'm
          probably taking a nap or just sitting in my balcony staring at the
          sky.
        </p>
        <a className="status" href="resume/resume_ashish.pdf" target="blank">
          <div className="status__light">
            <div className="status__light__ring"></div>
            <div className="status__light__led"></div>
          </div>
          <div className="status__message">View My Resume</div>
        </a>
      </div>
    </section>
  );
};

export default Background;

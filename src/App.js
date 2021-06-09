import React from "react";
import Background from "./Components/Background/Background";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Header/Intro";
import Projects from "./Components/Projects/Projects";
import ScrollToTop from "./Components/Footer/ScrollToTop";
import Skills from "./Components/Skills/Skills";
import ThemeToggleBar from "./Components/Header/ThemeToggleBar";

const App = () => {
  return (
    <div classNameName="App">
      <ThemeToggleBar />
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;

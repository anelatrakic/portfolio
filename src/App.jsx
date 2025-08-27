import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default App;

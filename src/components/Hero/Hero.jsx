import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Hi! I'm <span>Anela</span>, welcome to my portfolio!
          </h1>
          <p>
            I'm a dedicated full-stack software engineer with 2+ years of
            experience, based in New York City.
          </p>
          <p>
            I’m seeking new opportunities in tech where I can make a meaningful
            impact while growing technically and professionally.
          </p>
          <div className="hero-action">
            <a href="#contact" className="hero-connect">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/17snKOsHcIr9OW8oI4brgrXx3jkkMvTN5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com/in/anelatrakic"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={profile_img} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

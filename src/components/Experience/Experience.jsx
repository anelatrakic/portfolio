import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Experience_Data from "../../assets/experience_data";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="experience-container">
        {Experience_Data.map((experience, index) => {
          return (
            <div key={index} className="experience-format">
              <h3>{experience.e_title}</h3>
              <h2>{experience.e_date}</h2>
              <p>{experience.e_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

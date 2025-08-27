import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import htmlLogo from "../../assets/tech-logos/html.png";
import cssLogo from "../../assets/tech-logos/css-3.png";
import jsLogo from "../../assets/tech-logos/js.png";
import tsLogo from "../../assets/tech-logos/typescript.png";
import reactLogo from "../../assets/tech-logos/react.png";
import nextLogo from "../../assets/tech-logos/next-js.svg";
import vueLogo from "../../assets/tech-logos/vue.png";
import tailwindLogo from "../../assets/tech-logos/tailwind-css.png";
import pythonLogo from "../../assets/tech-logos/python.png";
import javaLogo from "../../assets/tech-logos/java.png";
import csharpLogo from "../../assets/tech-logos/c-sharp.png";
import kotlinLogo from "../../assets/tech-logos/kotlin.jpeg";
import mongoLogo from "../../assets/tech-logos/mongodb.png";
import postgresLogo from "../../assets/tech-logos/postgresql.png";
import dockerLogo from "../../assets/tech-logos/docker.png";
import kubernetesLogo from "../../assets/tech-logos/kubernetes.png";
import gitLogo from "../../assets/tech-logos/git.png";
import cLogo from "../../assets/tech-logos/c.png";
import sqlLogo from "../../assets/tech-logos/sql.jpg";
import atlassianLogo from "../../assets/tech-logos/atlassian-1.svg";

import { User, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-content">
        <div className="about-para space-y-6 text-gray-800 leading-relaxed">
          <p className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-600" />
            &nbsp;&nbsp; I'm <span className="font-semibold">Anela</span>, a
            software engineer who loves learning and building technology that
            makes a real difference.
          </p>

          <p className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-gray-600 flex-shrink-0" />
            &nbsp;&nbsp;
            <span>
              I earned my degree in <strong>Computer Science</strong> with a
              minor in <strong>General Business</strong> from the University of
              Maryland - College Park. While at UMD, I was involed in the
              Association for Women in Computing (AWC), served as a CMNS
              recruitement ambassador, worked as an undergraduate teaching
              assistant, and got involved with a startup.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-gray-600 flex-shrink-0" />
            &nbsp;&nbsp;
            <span>
              In <strong>May 2024</strong>, I graduated a year early to begin my
              full-time career. Since then, I've worked at{" "}
              <strong>Leidos QTC Health Services</strong>, where I developed a
              clinical case management platform designed to improve efficiency
              and support better patient care.
            </span>
          </p>
        </div>
        <div className="about-skills">
          <h2>Skills & Technologies</h2>

          <div className="tech-category">
            <div className="tech-category-title">
              <h3>Languages</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <img src={pythonLogo} alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src={tsLogo} alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="tech-item">
                <img src={jsLogo} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <img src={htmlLogo} alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="tech-item">
                <img src={cssLogo} alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="tech-item">
                <img src={javaLogo} alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src={csharpLogo} alt="C#" />
                <span>C#</span>
              </div>
              <div className="tech-item">
                <img src={cLogo} alt="C" />
                <span>C</span>
              </div>
              <div className="tech-item">
                <img src={sqlLogo} alt="SQL" />
                <span>SQL</span>
              </div>
              <div className="tech-item">
                <img src={kotlinLogo} alt="Kotlin" />
                <span>Kotlin</span>
              </div>
            </div>
          </div>

          <div className="tech-category">
            <div className="tech-category-title">
              <h3>Frameworks & Tools</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <img src={vueLogo} alt="Vue.js" />
                <span>Vue.js</span>
              </div>
              <div className="tech-item">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src={nextLogo} alt="Next.js" />
                <span>Next.js</span>
              </div>
              <div className="tech-item">
                <img src={tailwindLogo} alt="Tailwind CSS" />
                <span>Tailwind</span>
              </div>
              <div className="tech-item">
                <img src={mongoLogo} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <img src={postgresLogo} alt="PostgreSQL" />
                <span>PostgreSQL</span>
              </div>
              <div className="tech-item">
                <img src={dockerLogo} alt="Docker" />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <img src={kubernetesLogo} alt="Kubernetes" />
                <span>Kubernetes</span>
              </div>
              <div className="tech-item">
                <img src={gitLogo} alt="Git" />
                <span>Git</span>
              </div>
              <div className="tech-item">
                <img src={atlassianLogo} alt="Atlassian" />
                <span>Atlassian Suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

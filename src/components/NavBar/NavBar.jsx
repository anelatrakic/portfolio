import React, { useState, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <Menu onClick={openMenu} className="nav-mob-open" size={30} />
      <ul ref={menuRef} className="nav-menu">
        <X onClick={closeMenu} className="nav-mob-close" size={30} />
        <li className="nav-item">
          <img
            src={underline}
            alt=""
            className={`nav-underline ${menu === "home" ? "active" : ""}`}
          />
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")}>HOME</p>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <img
            src={underline}
            alt=""
            className={`nav-underline ${menu === "about" ? "active" : ""}`}
          />
          <AnchorLink className="anchor-link" offset={100} href="#about">
            <p onClick={() => setMenu("about")}>ABOUT ME</p>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <img
            src={underline}
            alt=""
            className={`nav-underline ${menu === "experience" ? "active" : ""}`}
          />
          <AnchorLink className="anchor-link" offset={100} href="#experience">
            <p onClick={() => setMenu("experience")}>EXPERIENCE</p>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <img
            src={underline}
            alt=""
            className={`nav-underline ${menu === "projects" ? "active" : ""}`}
          />
          <AnchorLink className="anchor-link" offset={100} href="#projects">
            <p onClick={() => setMenu("projects")}>PROJECTS</p>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <img
            src={underline}
            alt=""
            className={`nav-underline ${menu === "contact" ? "active" : ""}`}
          />
          <AnchorLink className="anchor-link" offset={100} href="#contact">
            <p onClick={() => setMenu("contact")}>CONTACT</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

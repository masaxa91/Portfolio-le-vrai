import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";

import csharp from "../../Assets/TechIcons/csharp.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import html from "../../Assets/TechIcons/html.svg";
import PHP from "../../Assets/TechIcons/php.svg";
import css from "../../Assets/TechIcons/css.svg";
import linux from "../../Assets/TechIcons/linux.svg";


function Techstack() {

  const skills = [
    { icon: csharp, name: "Csharp", level: 3 },
    { icon: Javascript, name: "Javascript", level: 2 },
    { icon: Typescript, name: "Typescript", level: 2 },
    { icon: ReactIcon, name: "React.js", level: 3 },
    { icon: <SiNextdotjs fontSize="24px" />, name: "Next.js", level: 2, isComponent: true },
    { icon: SQL, name: "Postgresql", level: 4 },
    { icon: Python, name: "Python", level: 2 },
    { icon: html, name: "HTML", level: 4 },
    { icon: PHP, name: "PHP", level: 3 },
    { icon: css, name: "CSS", level: 5 },
    { icon: linux, name: "LINUX", level: 3 },
  ];

  const renderStars = (level) => {
    return "★★★★★".slice(0, level) + "☆☆☆☆☆".slice(0, 5 - level);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          {skill.isComponent ? skill.icon : <img src={skill.icon} alt={skill.name} />}
          <div className="tech-icons-text">{skill.name}</div>

          {/* Étoiles */}
          <div style={{ color: "#d06cff", fontSize: "14px", marginTop: "5px" }}>
            {renderStars(skill.level)}
          </div>

        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
